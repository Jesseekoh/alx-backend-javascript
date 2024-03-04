export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    result.push(appendString + array[array.indexOf(value)]);
  }

  return array;
}
