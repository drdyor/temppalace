const fs = require('fs');
const lines = fs.readFileSync('src/data/rooms.ts', 'utf8').split('\n');

const output = [];
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  
  // Skip the extra "      {" after "  {" at start of entrance-hall
  if (line === '      {' && i > 0 && lines[i-1] === '  {') {
    i++;
    continue;
  }
  
  // Check for duplicate grammarPoints block
  if (line === '  },' && i > 0 && lines[i-1].trim() === '],') {
    // Peek ahead to see if this is followed by another grammarPoints block
    const peek = lines.slice(i+1, i+6);
    if (peek.length >= 5 && 
        peek[0].trim() === 'grammarPoints: [' &&
        peek[3].trim() === '],' &&
        peek[4].trim() === '},') {
      // This `  },` closes the room, followed by duplicate grammarPoints + `  },`
      // Keep this `  },` and skip the next 5 lines
      output.push(line);
      i += 6;
      continue;
    }
  }
  
  output.push(line);
  i++;
}

fs.writeFileSync('src/data/rooms.ts', output.join('\n'), 'utf8');
console.log('Fixed corrupted rooms.ts');
