// sum of all the student ids.
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const init = 0;
    const studentsIdsSum = students.reduce((accum, ele) => accum + ele.id, init);
    return studentsIdsSum;
  }
  return 0;
}
