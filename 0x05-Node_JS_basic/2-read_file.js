const fs = require('fs');

const countStudents = (csvPath) => {
  fs.createReadStream(csvPath, { encoding: 'utf-8' }).on('data', (chunk) => {
    // console.log(chunk);
    const fileLines = chunk.trim().split('\n');
    // number of students in CS
    const numOfStudents = Math.max(fileLines.length - 1, 0);
    const fieldGroups = {};
    for (const line of fileLines.slice(1)) {
      const student = line.split(',');
      const firstName = student[0];
      const field = student[3];

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

// const countStudents = (path) => {
//   if (!fs.existsSync(path)) {
//     throw new Error('Cannot load the database');
//   }
//   const fileLines = fs
//     .readFileSync(path, 'utf-8')
//     .toString('utf-8')
//     .trim()
//     .split('\n');
//   const studentGroups = {};
//   const dbFieldNames = fileLines[0].split(',');
//   const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

//   for (const line of fileLines.slice(1)) {
//     const studentRecord = line.split(',');
//     const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
//     const field = studentRecord[studentRecord.length - 1];
//     if (!Object.keys(studentGroups).includes(field)) {
//       studentGroups[field] = [];
//     }
//     const studentEntries = studentPropNames.map((propName, idx) => [
//       propName,
//       studentPropValues[idx],
//     ]);
//     studentGroups[field].push(Object.fromEntries(studentEntries));
//   }

//   const totalStudents = Object.values(studentGroups).reduce(
//     (pre, cur) => (pre || []).length + cur.length,
//   );
//   console.log(`Number of students: ${totalStudents}`);
//   for (const [field, group] of Object.entries(studentGroups)) {
//     const studentNames = group.map((student) => student.firstname).join(', ');
//     console.log(
//       `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
//     );
//   }
// };

// module.exports = countStudents;
