import { assertUnreachable } from "src/utils/assertUnreachable";

describe("utils tests", () => {
  test("assertUnreachable function", () => {
    expect(() => assertUnreachable(null as never)).toThrow();
  });
});
