var Sapiant = require('../lib/sapiant.js');

describe("Sapiant XOR test suite", function() {
  var xorSapiant = new Sapiant([1], [2], 4);

  it("xorSapiant should not be null", function() {
    expect(xorSapiant).not.toBe(null);
  });
});
