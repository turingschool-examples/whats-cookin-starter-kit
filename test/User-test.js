import { expect } from "chai";
import Recipe from "../src/classes/Recipe";
import User from "../src/classes/User";



describe("User", () => {
  it("Should be a function", () => {
    expect(User).to.be.a("function");
  })
}