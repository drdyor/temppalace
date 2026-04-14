const https = require('https');
const fs = require('fs');

// Fetch Italian nouns from Wikidata (CC0 license - safe for commercial use)
// Includes English glosses when available

const PAGE_SIZE = 10000;
const MAX_TOTAL = 50000;

async function fetchPage(offset) {
  const query = `
SELECT ?lemma ?genderLabel (SAMPLE(?gloss) AS ?english) WHERE {
  ?lexeme dct:language wd:Q652;
          wikibase:lemma ?lemma;
          wikibase:lexicalCategory wd:Q1084.
  OPTIONAL { ?lexeme wdt:P5185 ?gender. }
  OPTIONAL {
    ?lexeme ontolex:sense ?sense.
    ?sense wdt:P5137 ?concept.
    ?concept rdfs:label ?gloss.
    FILTER(LANG(?gloss) = "en")
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
GROUP BY ?lemma ?genderLabel
ORDER BY ?lemma
LIMIT ${PAGE_SIZE}
OFFSET ${offset}
`;

  const encoded = encodeURIComponent(query);
  const url = `https://query.wikidata.org/sparql?query=${encoded}`;

  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        Accept: 'application/sparql-results+json',
        'User-Agent': 'memory-palace-learner/1.0 (educational app)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.results.bindings);
        } catch (e) {
          reject(new Error(data.slice(0, 200)));
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  const all = [];
  let offset = 0;
  while (offset < MAX_TOTAL) {
    console.log(`Fetching offset ${offset}...`);
    const rows = await fetchPage(offset);
    if (rows.length === 0) break;
    for (const row of rows) {
      all.push({
        native: row.lemma.value,
        english: row.english?.value || '',
        gender: row.genderLabel?.value || 'none'
      });
    }
    offset += PAGE_SIZE;
    // Be polite to Wikidata
    await new Promise(r => setTimeout(r, 1500));
  }

  fs.writeFileSync('wikidata-italian-nouns.json', JSON.stringify(all, null, 2));
  console.log(`Saved ${all.length} nouns to wikidata-italian-nouns.json`);
})();
