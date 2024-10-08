export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    const studentsids = students.filter((ele) => {
      if (ele.location === city) {
        return ele;
      }
    });
    return studentsids;
  }
  return [];
}
