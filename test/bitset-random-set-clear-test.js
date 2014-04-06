describe("bit set basic set clear tests on single index", function(){
  var bitset, bitsetArr;

  beforeEach(function(){
    bitset = new jsds.BitSet(100);
    bitsetArr = bitset.underlyingArray;
  });

  afterEach(function(){
    bitset = bitsetArr = null;
  });

  it("can set and clear multiple random bits in the same index correctly", function(){
    bitset.setBit(1);
    bitset.setBit(4);
    bitset.setBit(5);
    bitset.setBit(20);
    bitset.setBit(30);
    expect(bitsetArr[0]).toBe(0x91008002);

    bitset.clearBit(1);
    bitset.clearBit(4);
    bitset.clearBit(5);
    bitset.clearBit(20);
    bitset.clearBit(30);
    expect(bitsetArr[0]).toBe(0);
  });

  it("can set and clear multiple random bits in random indices correctly", function(){
    bitset.setBit(1);
    bitset.setBit(32);
    bitset.setBit(33);
    bitset.setBit(64);
    expect(bitsetArr[0]).toBe(0x10000008);
    expect(bitsetArr[1]).toBe(0x10000008);

    bitset.clearBit(1);
    bitset.clearBit(32);
    bitset.clearBit(33);
    bitset.clearBit(64);
    expect(bitsetArr[0]).toBe(0);
    expect(bitsetArr[1]).toBe(0);
  });

});