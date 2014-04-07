/**
 * User: soruban
 * Date: 05/04/14
 * Time: 17:52
 */
jsds = {};

jsds.BitSet = (function(){

  // js only supports uint32.
  var WORD_SIZE = 32,
    DIVIDER = Math.log(WORD_SIZE) / Math.LN2;
  /**
   * Bit mask used when setting and clearing bits.
   * @type {Array.<number>}
   */
  var BIT_MASK = [
    0x80000000, 0x40000000, 0x20000000, 0x10000000,
    0x08000000, 0x04000000, 0x02000000, 0x01000000,
    0x00800000, 0x00400000, 0x00200000, 0x00100000,
    0x00080000, 0x00040000, 0x00020000, 0x00010000,
    0x00008000, 0x00004000, 0x00002000, 0x00001000,
    0x00000800, 0x00000400, 0x00000200, 0x00000100,
    0x00000080, 0x00000040, 0x00000020, 0x00000010,
    0x00000008, 0x00000004, 0x00000002, 0x00000001
  ];

  /**
   * The size the bitset should be, will be rounded to the closes multiple of 32.
   * @param {number} size
   * @constructor
   */
  function BitSet(size) {
    this._arr = new Uint32Array(Math.ceil((size+1) / WORD_SIZE));
  }

  /**
   * Used internally to create a clone.
   * @param {Array|TypedArray} arr
   */
  BitSet.prototype._initFromArray = function(arr) {
    this._arr = new Uint32Array(arr);
    return this;
  };

  /**
   * @param {number} bitIndex , the index of the bit to modify. Indices starts from 1.
   */
  BitSet.prototype.setBit = function(bitIndex) {
    bitIndex = bitIndex - 1;

    var arrIndex = bitIndex >> DIVIDER;
    var bitMasktIndex = bitIndex - arrIndex * WORD_SIZE;
    
    this._arr[arrIndex] = this._arr[arrIndex] | BIT_MASK[bitMasktIndex];

    return this;
  };

  /**
   * @param {number} bitIndex , the index of the bit to modify. Indices starts from 1.
   * @returns {number} 0 or 1.
   */
  BitSet.prototype.getBit = function(bitIndex) {
    bitIndex = bitIndex - 1;

    var arrIndex = bitIndex >> DIVIDER;
    var bitMasktIndex = bitIndex - arrIndex * WORD_SIZE;

    return (this._arr[arrIndex] & BIT_MASK[bitMasktIndex]) >>> (WORD_SIZE - bitMasktIndex - 1);
  };

  /**
   * @param {number} bitIndex , the index of the bit to modify. Indices starts from 1.
   */
  BitSet.prototype.clearBit = function(bitIndex) {
    bitIndex = bitIndex - 1;

    var arrIndex = bitIndex >> DIVIDER;
    var bitMasktIndex = bitIndex - arrIndex * WORD_SIZE;

    this._arr[arrIndex] = this._arr[arrIndex] & ~BIT_MASK[bitMasktIndex];

    return this;
  };

  /**
   * @param {jsds.BitSet} otherBitSet
   */
  BitSet.prototype.and = function(otherBitSet) {
    if(otherBitSet.size === this.size) {
      var res = new BitSet(this.size * WORD_SIZE - 1);
      for (var i = 0, count = this.size; i < count; i++) {
        res.setBitsInWordAt(i, this._arr[i] & otherBitSet.getBitsInWordAt(i));
      }

      return res;
    }
    else {
      throw new Error("BitSet 'and' operation requires both BitSet to be of equal size.");
    }
  };

  /**
   * @param {jsds.BitSet} otherBitSet
   */
  BitSet.prototype.or = function(otherBitSet) {
    if(otherBitSet.size === this.size) {
      var res = new BitSet(this.size * WORD_SIZE - 1);
      for (var i = 0, count = this.size; i < count; i++) {
        res.setBitsInWordAt(i, this._arr[i] | otherBitSet.getBitsInWordAt(i));
      }

      return res;
    }
    else {
      throw new Error("BitSet 'or' operation requires both BitSet to be of equal size.");
    }
  };

  BitSet.prototype.setBitsInWordAt = function(index, value) {
    this._arr[index] = value;
  };

  BitSet.prototype.getBitsInWordAt = function(index) {
    return this._arr[index];
  };

  /**
   * @returns {jsds.BitSet}
   */
  BitSet.prototype.clone = function() {
    return new BitSet(0)._initFromArray(this._arr);
  };

  /**
   * @returns {number} the number of bit currently set.
   */
  Object.defineProperty(BitSet.prototype, "cardinality", {
    get: function() {
      var cardinality = 0, value;
      for (var arrIindex = 0; arrIindex < this.size; arrIindex++) {
        value = this._arr[arrIindex];
        for (var bitIndex = 0; bitIndex < WORD_SIZE; bitIndex++) {
          cardinality += value & 0x00000001;
          value = value >> 1;
        }
      }
      return cardinality;
    }
  });

  /**
   * The actual size of the bitset array which corresponds to the size of the underlying uint32 array.
   */
  Object.defineProperty(BitSet.prototype, "size", {
    get: function() {
      return this._arr.length;
    }
  });

  /**
   * The underlying array. It should NOT be modified.
   */
  Object.defineProperty(BitSet.prototype, "underlyingArray", {
    get: function() {
      return this._arr;
    }
  });

  return BitSet;
})();