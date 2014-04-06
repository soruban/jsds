describe("bit set tests.", function(){
  var bitset, otherBitset;

  beforeEach(function(){
  });

  afterEach(function(){
    bitset = otherBitset = null;
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

  describe("BitSet should perform logical operation correctly", function(){
    var bitset = new jsds.BitSet(100);
    bitset.setBit(1).setBit(10).setBit(40).setBit(50).setBit(83);
    var otherBitset = new jsds.BitSet(100);
    otherBitset.setBit(2).setBit(15).setBit(40).setBit(70).setBit(83).setBit(84);
    var errBitset = new jsds.BitSet(10);

    it("should throw and error on a logical 'and' if the BitSets are of different size", function(){
      var doAnd = function(){
        bitset.and(errBitset);
      };
      expect(doAnd).toThrow();
    });

    it("should throw and error on a logical 'or' if the BitSets are of different size", function(){
      var doOr = function(){
        bitset.and(errBitset);
      };
      expect(doOr).toThrow();
    });

    it("should perform a logical 'and' correctly", function(){
      var res = bitset.and(otherBitset);
      expect(res[0]).toBe(0);
      expect(hex(res[1])).toBe("0x8000000");
      expect(hex(res[2])).toBe("0x4000");
      expect(hex(res[3])).toBe("0x0");
    });

    it("should perform a logical 'or' correctly", function(){
      var res = bitset.or(otherBitset);
      expect(hex(res[1])).toBe("0x8002000");
      expect(hex(res[2])).toBe("0x200c000");
      expect(hex(res[3])).toBe("0x0");
    });
  });

  /**
   * @param {number} aNumber
   * @returns {string} the hex representation of the number.
   */
  function hex(aNumber) {
    return "0x" + aNumber.toString(16);
  }
});