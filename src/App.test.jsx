import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("demo application", () => {
  it("exposes a React component", () => {
    expect(App).toBeTypeOf("function");
  });
});
