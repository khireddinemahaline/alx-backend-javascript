const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n');

        if (lines.length <= 1) {
            return 'No students found in the database';
        }

        const students = lines.slice(1);
        const fields = {};

        for (const student of students) {
            const [name, , , field] = student.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(name);
        }

        const result = [];
        result.push(`Number of students: ${students.length}`);
        for (const [field, names] of Object.entries(fields)) {
            result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        return result.join('\n');
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
