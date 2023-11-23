const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
  it("should return 4 for inputs 1 and 3", function () {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it("should return 5 for inputs 1 and 3.7", function () {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it("should return 5 for inputs 1.2 and 3.7", function () {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it("should return 6 for inputs 1.5 and 3.7", function () {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
