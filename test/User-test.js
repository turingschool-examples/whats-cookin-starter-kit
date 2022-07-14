import { expect } from "chai";
import Recipe from "../src/classes/Recipe";
import User from "../src/classes/User";

describe("User", () => {
  it("Should be a function", () => {
    expect(User).to.be.a("function");
  });

  let user1;
  let user2;
  let user3;

  beforeEach(() => {
    user1 = new User({
      name: "Josh",
      id: 28,
      pantry: [
        {
          ingredient: 11297,
          amount: 4,
        },
        {
          ingredient: 1082047,
          amount: 10,
        },
      ],
    });

    user2 = new User({
      name: "Shane",
      id: 111,
      pantry: [
        {
          ingredient: 6150,
          amount: 3,
        },
        {
          ingredient: 1032009,
          amount: 7,
        },
      ],
    });

    user3 = new User({
      name: "David",
      id: 4444,
      pantry: [
        {
          ingredient: 18372,
          amount: 8,
        },
        {
          ingredient: 1102047,
          amount: 1,
        },
      ],
    });
  });

  it("should contain a unique id per user", () => {
    expect(user1.id).to.equal(28);
    expect(user3.id).to.equal(4444);
  });

  it("should contain a different name per user", () => {
    expect(user2.name).to.equal("Shane");
    expect(user3.name).to.equal("David");
  });

  it("should contain an array of ingredient objects", () => {
    expect(user1.pantry.length).to.equal(2)
    expect(user1.pantry[0].ingredient).to.equal(11297);
  })
});
