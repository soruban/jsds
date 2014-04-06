describe("bit set basic set clear tests on single index", function(){
  var bitset, bitsetArr;

  beforeEach(function(){
    bitset = new jsds.BitSet(32);
    bitsetArr = bitset.underlyingArray;
  });

  afterEach(function(){
    bitset = bitsetArr = null;
  });

  it("can set and clear the first bit correctly", function(){
    bitset.setBit(1);
    expect(bitsetArr[0]).toBe(0x10000000);

    bitset.clearBit(1);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the second bit correctly", function(){
    bitset.setBit(2);
    expect(bitsetArr[0]).toBe(0x20000000);
    bitset.clearBit(2);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the third bit correctly", function(){
    bitset.setBit(3);
    expect(bitsetArr[0]).toBe(0x40000000);
    bitset.clearBit(3);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the fourth bit correctly", function(){
    bitset.setBit(4);
    expect(bitsetArr[0]).toBe(0x80000000);
    bitset.clearBit(4);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the fifth bit correctly", function(){
    bitset.setBit(5);
    expect(bitsetArr[0]).toBe(0x01000000);
    bitset.clearBit(5);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the sixth bit correctly", function(){
    bitset.setBit(6);
    expect(bitsetArr[0]).toBe(0x02000000);
    bitset.clearBit(6);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the seventh bit correctly", function(){
    bitset.setBit(7);
    expect(bitsetArr[0]).toBe(0x04000000);
    bitset.clearBit(7);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the eights bit correctly", function(){
    bitset.setBit(8);
    expect(bitsetArr[0]).toBe(0x08000000);
    bitset.clearBit(8);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the ninth bit correctly", function(){
    bitset.setBit(9);
    expect(bitsetArr[0]).toBe(0x00100000);
    bitset.clearBit(9);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the tenth bit correctly", function(){
    bitset.setBit(10);
    expect(bitsetArr[0]).toBe(0x00200000);
    bitset.clearBit(10);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 11th bit correctly", function(){
    bitset.setBit(11);
    expect(bitsetArr[0]).toBe(0x00400000);
    bitset.clearBit(11);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 12th bit correctly", function(){
    bitset.setBit(12);
    expect(bitsetArr[0]).toBe(0x00800000);
    bitset.clearBit(12);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 13th bit correctly", function(){
    bitset.setBit(13);
    expect(bitsetArr[0]).toBe(0x00010000);
    bitset.clearBit(13);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 14th bit correctly", function(){
    bitset.setBit(14);
    expect(bitsetArr[0]).toBe(0x00020000);
    bitset.clearBit(14);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 15th bit correctly", function(){
    bitset.setBit(15);
    expect(bitsetArr[0]).toBe(0x00040000);
    bitset.clearBit(15);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 16th bit correctly", function(){
    bitset.setBit(16);
    expect(bitsetArr[0]).toBe(0x00080000);
    bitset.clearBit(16);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 17th bit correctly", function(){
    bitset.setBit(17);
    expect(bitsetArr[0]).toBe(0x00001000);
    bitset.clearBit(17);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 18th bit correctly", function(){
    bitset.setBit(18);
    expect(bitsetArr[0]).toBe(0x00002000);
    bitset.clearBit(18);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 19th bit correctly", function(){
    bitset.setBit(19);
    expect(bitsetArr[0]).toBe(0x00004000);
    bitset.clearBit(19);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 20th bit correctly", function(){
    bitset.setBit(20);
    expect(bitsetArr[0]).toBe(0x00008000);
    bitset.clearBit(20);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 21st bit correctly", function(){
    bitset.setBit(21);
    expect(bitsetArr[0]).toBe(0x00000100);
    bitset.clearBit(21);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 22nd bit correctly", function(){
    bitset.setBit(22);
    expect(bitsetArr[0]).toBe(0x00000200);
    bitset.clearBit(22);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 23rd bit correctly", function(){
    bitset.setBit(23);
    expect(bitsetArr[0]).toBe(0x00000400);
    bitset.clearBit(23);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 24th bit correctly", function(){
    bitset.setBit(24);
    expect(bitsetArr[0]).toBe(0x00000800);
    bitset.clearBit(24);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 25th bit correctly", function(){
    bitset.setBit(25);
    expect(bitsetArr[0]).toBe(0x00000010);
    bitset.clearBit(25);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 26th bit correctly", function(){
    bitset.setBit(26);
    expect(bitsetArr[0]).toBe(0x00000020);
    bitset.clearBit(26);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 27th bit correctly", function(){
    bitset.setBit(27);
    expect(bitsetArr[0]).toBe(0x00000040);
    bitset.clearBit(27);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 28th bit correctly", function(){
    bitset.setBit(28);
    expect(bitsetArr[0]).toBe(0x00000080);
    bitset.clearBit(28);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 29th bit correctly", function(){
    bitset.setBit(29);
    expect(bitsetArr[0]).toBe(0x00000001);
    bitset.clearBit(29);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 30th bit correctly", function(){
    bitset.setBit(30);
    expect(bitsetArr[0]).toBe(0x00000002);
    bitset.clearBit(30);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 31st bit correctly", function(){
    bitset.setBit(31);
    expect(bitsetArr[0]).toBe(0x00000004);
    bitset.clearBit(31);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear the 32nd bit correctly", function(){
    bitset.setBit(32);
    expect(bitsetArr[0]).toBe(0x00000008);
    bitset.clearBit(32);
    expect(bitsetArr[0]).toBe(0);
  });
});