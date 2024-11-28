const fs = require('fs');

function countStudents(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            process.stderr.write('Error: Cannot load the database\n');
            return;
        }

        const lines = data.trim().split('\n');
        if (lines.length <= 1) {
            process.stdout.write('No students found in the database\n');
            return;
        }

        const students = lines.slice(1); // Remove the header
        console.log(`Number of students: ${students.length}`);

        // Organize students by field
        const fields = {};
        for (const student of students) {
            const studentData = student.split(',');
            const name = studentData[0];
            const field = studentData[3];

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(name);
        }

        // Print students grouped by field
        for (const [field, names] of Object.entries(fields)) {
            process.stdout.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        }
    });
}

countStudents('database.csv');
