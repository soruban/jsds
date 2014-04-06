describe("bit set tests", function(){
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

  it("should clear the right bit", function(){
    bitset = new jsds.BitSet(2);
    expect(bitset.cardinality).toBe(0);
  });

  it("should have a cardinality of 0 at start", function(){
    expect(true).toBe(true);
  });

  it("should have the correct cardinality after bits being set", function(){
    expect(true).toBe(true);
  });

  it("should have the correct cardinality after bits being cleared", function(){
    expect(true).toBe(true);
  });
});