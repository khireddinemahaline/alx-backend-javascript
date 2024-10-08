export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const studentsids = students.map((ele) => ele.id);
    return studentsids;
  }
  return [];
}
