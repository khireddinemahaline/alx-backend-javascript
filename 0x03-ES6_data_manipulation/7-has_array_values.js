export default function hasValuesFromArray(oldarray, newarray) {
  return newarray.every((element) => oldarray.has(element));
}
