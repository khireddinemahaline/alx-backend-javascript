export default function concatArrays(array1, array2, string) {
  const newarray = [...array1, ...array2, ...string];
  return newarray;
}
