import strictEquals from "./utils";

describe("Given a compare function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const equality = strictEquals(valueA, valueB);
      const isEqual = true;

      expect(equality).toBe(isEqual);
    });
  });
  describe("When it receives 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";
      const equality = strictEquals(valueA, valueB);
      const isEqual = false;

      expect(equality).toBe(isEqual);
    });
  });
  describe("When it receives true and false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;
      const equality = strictEquals(valueA, valueB);
      const isEqual = false;

      expect(equality).toBe(isEqual);
    });
  });
  describe("When it receives true and false", () => {
    test("Then it should return false", () => {
      const valueA = false;
      const valueB = false;
      const equality = strictEquals(valueA, valueB);
      const isEqual = true;

      expect(equality).toBe(isEqual);
    });
  });
  describe("When it receives true and false", () => {
    test("Then it should return false", () => {
      const valueA = "Water";
      const valueB = "Oil";
      const equality = strictEquals(valueA, valueB);
      const isEqual = false;

      expect(equality).toBe(isEqual);
    });
  });
  describe("When it receives true and false", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const equality = strictEquals(valueA, valueB);
      const isEqual = false;

      expect(equality).toBe(isEqual);
    });
  });
});
