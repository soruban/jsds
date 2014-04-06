describe("bit set tests.", function(){
  var BitSet;
  var bitset;

  beforeEach(function(){
  });

  afterEach(function(){
    bitset = null;
  });

  it("should create a BitSet to accommodate the given initial size", function(){
    bitset = new jsds.BitSet(0);
    expect(bitset.size).toBe(1);

    bitset = new jsds.BitSet(10);
    expect(bitset.size).toBe(1);

    bitset = new jsds.BitSet(31);
    expect(bitset.size).toBe(1);

    bitset = new jsds.BitSet(32);
    expect(bitset.size).toBe(2);

    bitset = new jsds.BitSet(64);
    expect(bitset.size).toBe(3);
  });

  it("should have a cardinality of 0 at start", function(){
    bitset = new jsds.BitSet(10);
    expect(bitset.cardinality).toBe(0);
  });

  describe("BitSet should have the correct cardinality.", function(){
    var bitset = new jsds.BitSet(100);
    bitset.setBit(1);

    it("should have the correct cardinality after 10 random bits have been set", function(){
      bitset.setBit(20)
        .setBit(32)
        .setBit(45)
        .setBit(56)
        .setBit(68)
        .setBit(79)
        .setBit(83)
        .setBit(99)
        .setBit(100);
      expect(bitset.cardinality).toBe(10);
    });

    it("should have the correct cardinality the 10 bits are cleared", function(){
      bitset.clearBit(1)
        .clearBit(20)
        .clearBit(32)
        .clearBit(45)
        .clearBit(56)
        .clearBit(68)
        .clearBit(79)
        .clearBit(83)
        .clearBit(99)
        .clearBit(100);
      expect(bitset.cardinality).toBe(0);
    });
  });
});