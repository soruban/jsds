/**
 * User: soruban
 * Date: 05/04/14
 * Time: 17:52
 */
jsds = {};

jsds.BitSet = (function(){

  var BIT_MASK = [
    0x10000000, 0x20000000, 0x40000000, 0x80000000,
    0x01000000, 0x02000000, 0x04000000, 0x08000000,
    0x00100000, 0x00200000, 0x00400000, 0x00800000,
    0x00010000, 0x00020000, 0x00040000, 0x00080000,
    0x00001000, 0x00002000, 0x00004000, 0x00008000,
    0x00000100, 0x00000200, 0x00000400, 0x00000800,
    0x00000010, 0x00000020, 0x00000040, 0x00000080,
    0x00000001, 0x00000002, 0x00000004, 0x00000008
  ];

  var WORD_SIZE = 32,
      DIVIDER = Math.log(WORD_SIZE) / Math.LN2;


  function BitSet(size) {
    this._cardinality = 0;
    this._arr = new Uint32Array(Math.ceil((size+1) / WORD_SIZE));
  }

  /**
   *
   * @param {number} bitIndex , the index of the bit to modify. Indices starts from 1.
   */
  BitSet.prototype.setBit = function(bitIndex) {
    bitIndex = bitIndex - 1;

    var arrIndex = bitIndex >> DIVIDER;
    var bitMasktIndex = bitIndex - arrIndex * WORD_SIZE;
    
    this._arr[arrIndex] = this._arr[arrIndex] | BIT_MASK[bitMasktIndex];
  };

  BitSet.prototype.clearBit = function(bitIndex) {
    bitIndex = bitIndex - 1;

    var arrIndex = bitIndex >> DIVIDER;
    var bitMasktIndex = bitIndex - arrIndex * WORD_SIZE;

    this._arr[arrIndex] = this._arr[arrIndex] & ~BIT_MASK[bitMasktIndex];
  };

  Object.defineProperty(BitSet.prototype, "cardinality", {
    get: function() {
      return this._cardinality;
    }
  });

  Object.defineProperty(BitSet.prototype, "size", {
    get: function() {
      return this._arr.length;
    }
  });

  Object.defineProperty(BitSet.prototype, "underlyingArray", {
    get: function() {
      return this._arr;
    }
  });

  return BitSet;
})();