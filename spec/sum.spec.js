const sum = require("../sum");

describe("sum", () => {
  test("shoud sum", () => {
    expect(sum(1, 1)).toEqual(3);
  });
});
