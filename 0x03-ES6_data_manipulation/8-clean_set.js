export default function cleanSet(set, startString) {
  if ((typeof startString !== 'string') || (startString.length === 0)) {
    return '';
  }
  return Array.from(set)
    .filter((ele) => typeof ele === 'string' && ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length))
    .join('-');
}
