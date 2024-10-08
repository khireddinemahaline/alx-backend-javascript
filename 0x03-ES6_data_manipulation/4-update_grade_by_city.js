// returns an array of students for a specific city with their new grade
/*
students = [{id:1, firstname:"ahmed", location:"city"},...]
grades = [{id:1, grade: 24}]

cancat grade with thier id obj
map throut grade and student => ids == then add
return with flter city

*/

export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = grades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A', // Update grade or set to 'N/A'
      };
    });
}
