import { sum } from "../components/sum"

test('function to sum of two number should be', () => {
  const result = sum(4, 5);

  //Assertion
  expect(result).toBe(9);
})
