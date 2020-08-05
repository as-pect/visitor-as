export function getByteArray(): StaticArray<u8> {
  var result = includeBytes('test.dat');
  return result;
}

export function hardCodedSAu8(): StaticArray<u8> {
  var result = StaticArray.fromArray<u8>([65,66,67,68]);
  return result;
}

