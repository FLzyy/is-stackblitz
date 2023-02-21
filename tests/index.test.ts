/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { equal } from "node:assert/strict";
import { describe, it } from "node:test";
import isStackblitz from "../src/index";

describe("not replit", () => {
  it("should return false", () => {
    equal(isStackblitz(), false);
  });
});

describe("in replit", () => {
  it("should return true (STACKBLITZ)", () => {
    process.env.STACKBLITZ = "1";
    equal(isStackblitz(), true);
    delete process.env.STACKBLITZ;
  });

  it("should return true (GIT_PROXY = 'https://p.stackblitz.com')", () => {
    const initial = process.env.GIT_PROXY;
    process.env.GIT_PROXY = "https://p.stackblitz.com";
    equal(isStackblitz(), true);
    if (initial) {
      process.env.GIT_PROXY = initial;
    } else {
      delete process.env.GIT_PROXY;
    }
  });
});
