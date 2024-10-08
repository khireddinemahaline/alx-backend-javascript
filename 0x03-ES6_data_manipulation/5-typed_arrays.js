//  that returns a new ArrayBuffer
//   with an Int8 value at a specific position.
export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const dataview = new DataView(buf);
  dataview.setInt8(position, value);
  return dataview;
}
