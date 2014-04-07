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
    expect(bitset.getBit(1)).toBe(1);
    bitset.clearBit(1);
    expect(bitset.getBit(1)).toBe(0);
  });

  it("can set and clear the second bit correctly", function(){
    bitset.setBit(2);
    expect(bitset.getBit(2)).toBe(1);
    bitset.clearBit(2);
    expect(bitset.getBit(2)).toBe(0);
  });

  it("can set and clear the third bit correctly", function(){
    bitset.setBit(3);
    expect(bitset.getBit(3)).toBe(1);
    bitset.clearBit(3);
    expect(bitset.getBit(3)).toBe(0);
  });

  it("can set and clear the fourth bit correctly", function(){
    bitset.setBit(4);
    expect(bitset.getBit(4)).toBe(1);
    bitset.clearBit(4);
    expect(bitset.getBit(4)).toBe(0);
  });

  it("can set and clear the fifth bit correctly", function(){
    bitset.setBit(5);
    expect(bitset.getBit(5)).toBe(1);
    bitset.clearBit(5);
    expect(bitset.getBit(5)).toBe(0);
  });

  it("can set and clear the sixth bit correctly", function(){
    bitset.setBit(6);
    expect(bitset.getBit(6)).toBe(1);
    bitset.clearBit(6);
    expect(bitset.getBit(6)).toBe(0);
  });

  it("can set and clear the seventh bit correctly", function(){
    bitset.setBit(7);
    expect(bitset.getBit(7)).toBe(1);
    bitset.clearBit(7);
    expect(bitset.getBit(7)).toBe(0);
  });

  it("can set and clear the eights bit correctly", function(){
    bitset.setBit(8);
    expect(bitset.getBit(8)).toBe(1);
    bitset.clearBit(8);
    expect(bitset.getBit(8)).toBe(0);
  });

  it("can set and clear the ninth bit correctly", function(){
    bitset.setBit(9);
    expect(bitset.getBit(9)).toBe(1);
    bitset.clearBit(9);
    expect(bitset.getBit(9)).toBe(0);
  });

  it("can set and clear the tenth bit correctly", function(){
    bitset.setBit(10);
    expect(bitset.getBit(10)).toBe(1);
    bitset.clearBit(10);
    expect(bitset.getBit(10)).toBe(0);
  });

  it("can set and clear the 11th bit correctly", function(){
    bitset.setBit(11);
    expect(bitset.getBit(11)).toBe(1);
    bitset.clearBit(11);
    expect(bitset.getBit(11)).toBe(0);
  });

  it("can set and clear the 12th bit correctly", function(){
    bitset.setBit(12);
    expect(bitset.getBit(12)).toBe(1);
    bitset.clearBit(12);
    expect(bitset.getBit(12)).toBe(0);
  });

  it("can set and clear the 13th bit correctly", function(){
    bitset.setBit(13);
    expect(bitset.getBit(13)).toBe(1);
    bitset.clearBit(13);
    expect(bitset.getBit(13)).toBe(0);
  });

  it("can set and clear the 14th bit correctly", function(){
    bitset.setBit(14);
    expect(bitset.getBit(14)).toBe(1);
    bitset.clearBit(14);
    expect(bitset.getBit(14)).toBe(0);
  });

  it("can set and clear the 15th bit correctly", function(){
    bitset.setBit(15);
    expect(bitset.getBit(15)).toBe(1);
    bitset.clearBit(15);
    expect(bitset.getBit(15)).toBe(0);;
  });

  it("can set and clear the 16th bit correctly", function(){
    bitset.setBit(16);
    expect(bitset.getBit(16)).toBe(1);
    bitset.clearBit(16);
    expect(bitset.getBit(16)).toBe(0);
  });

  it("can set and clear the 17th bit correctly", function(){
    bitset.setBit(17);
    expect(bitset.getBit(17)).toBe(1);
    bitset.clearBit(17);
    expect(bitset.getBit(17)).toBe(0);
  });

  it("can set and clear the 18th bit correctly", function(){
    bitset.setBit(18);
    expect(bitset.getBit(18)).toBe(1);
    bitset.clearBit(18);
    expect(bitset.getBit(18)).toBe(0);
  });

  it("can set and clear the 19th bit correctly", function(){
    bitset.setBit(19);
    expect(bitset.getBit(19)).toBe(1);
    bitset.clearBit(19);
    expect(bitset.getBit(19)).toBe(0);
  });

  it("can set and clear the 20th bit correctly", function(){
    bitset.setBit(20);
    expect(bitset.getBit(20)).toBe(1);
    bitset.clearBit(20);
    expect(bitset.getBit(20)).toBe(0);
  });

  it("can set and clear the 21st bit correctly", function(){
    bitset.setBit(21);
    expect(bitset.getBit(21)).toBe(1);
    bitset.clearBit(21);
    expect(bitset.getBit(21)).toBe(0);
  });

  it("can set and clear the 22nd bit correctly", function(){
    bitset.setBit(22);
    expect(bitset.getBit(22)).toBe(1);
    bitset.clearBit(22);
    expect(bitset.getBit(22)).toBe(0);
  });

  it("can set and clear the 23rd bit correctly", function(){
    bitset.setBit(23);
    expect(bitset.getBit(23)).toBe(1);
    bitset.clearBit(23);
    expect(bitset.getBit(23)).toBe(0);
  });

  it("can set and clear the 24th bit correctly", function(){
    bitset.setBit(24);
    expect(bitset.getBit(24)).toBe(1);
    bitset.clearBit(24);
    expect(bitset.getBit(24)).toBe(0);
  });

  it("can set and clear the 25th bit correctly", function(){
    bitset.setBit(25);
    expect(bitset.getBit(25)).toBe(1);
    bitset.clearBit(25);
    expect(bitset.getBit(25)).toBe(0);
  });

  it("can set and clear the 26th bit correctly", function(){
    bitset.setBit(26);
    expect(bitset.getBit(26)).toBe(1);
    bitset.clearBit(26);
    expect(bitset.getBit(26)).toBe(0);
  });

  it("can set and clear the 27th bit correctly", function(){
    bitset.setBit(27);
    expect(bitset.getBit(27)).toBe(1);
    bitset.clearBit(27);
    expect(bitset.getBit(27)).toBe(0);
  });

  it("can set and clear the 28th bit correctly", function(){
    bitset.setBit(28);
    expect(bitset.getBit(28)).toBe(1);
    bitset.clearBit(28);
    expect(bitset.getBit(28)).toBe(0);
  });

  it("can set and clear the 29th bit correctly", function(){
    bitset.setBit(29);
    expect(bitset.getBit(29)).toBe(1);
    bitset.clearBit(29);
    expect(bitset.getBit(29)).toBe(0);
  });

  it("can set and clear the 30th bit correctly", function(){
    bitset.setBit(30);
    expect(bitset.getBit(30)).toBe(1);
    bitset.clearBit(30);
    expect(bitset.getBit(30)).toBe(0);
  });

  it("can set and clear the 31st bit correctly", function(){
    bitset.setBit(31);
    expect(bitset.getBit(31)).toBe(1);
    bitset.clearBit(31);
    expect(bitset.getBit(31)).toBe(0);
  });

  it("can set and clear the 32nd bit correctly", function(){
    bitset.setBit(32);
    expect(bitset.getBit(32)).toBe(1);
    bitset.clearBit(32);
    expect(bitset.getBit(32)).toBe(0);
  });
});