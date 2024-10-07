/*
return array of obj [obj1, obj2....]

obj = {
id: '',
firstname: '',
location: ''
}

*/

export default function getListStudents() {
  const students = [];

  const obj1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const obj2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const obj3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  // return array of objs
  students.push(obj1, obj2, obj3);
  return students;
}
