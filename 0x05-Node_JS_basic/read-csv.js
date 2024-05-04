const fs = require('fs');

const countStudents = (csvPath) => {
  fs.createReadStream(csvPath, { encoding: 'utf-8' }).on('data', (chunk) => {
    // console.log(chunk);
    const fileLines = chunk.trim().split('\n');
    // number of students in CS
    const numOfStudents = Math.max(fileLines.length - 1, 0);
    const fieldGroups = {};
    for (const line of fileLines.slice(1)) {
      const [firstName, lastName, age, field] = line.split(',');

      if (field in fieldGroups === false) {
        fieldGroups[field] = [];
      }

      fieldGroups[field].push([firstName]);
    }

    console.log(`Number of students:  ${numOfStudents}`);
    for (const [field, group] of Object.entries(fieldGroups)) {
      console.log(`Number of students in ${field}:  ${group.length}. List: ${group.join(', ')}`);
    }
  }).on('error', () => {
    throw new Error('Cannot load the database');
  });
};

module.exports = countStudents;
