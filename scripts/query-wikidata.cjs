const https = require('https');

const query = `
SELECT ?lexeme ?lemma ?genderLabel ?sense ?gloss WHERE {
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
LIMIT 10
`;

const encoded = encodeURIComponent(query);
const url = `https://query.wikidata.org/sparql?query=${encoded}`;

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
      console.log(JSON.stringify(json, null, 2));
    } catch (e) {
      console.error('Parse error:', e.message);
      console.log(data.slice(0, 500));
    }
  });
}).on('error', (err) => console.error('Request error:', err.message));
