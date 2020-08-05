import {getByteArray,hardCodedSAu8} from '../includeBytesTest'

describe('function call replacement', () => {
  it("should be hello world string", () => {
    expect(foo()).toBe("hello world");
  })

  it("should include StaticArray", () => {
    expect(getByteArray()).toBe(hardCodedSAu8());
  })


})