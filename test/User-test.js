import { expect } from "chai";
import User from "../src/classes/User";
import { mockUsers } from "./mock-data";

describe("User", () => {
  let user1, user2;
  beforeEach(() => {
    user1 = new User(mockUsers[0]);
    user2 = new User(mockUsers[1]);
  });

  it("should have a name", () => {
    expect(user1.name).to.equal("Saige O'Kon");
    expect(user2.name).to.equal("Ephraim Goyette");
  });

  it("should have an id", () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
  });

  it("should have ingredients in pantry", () => {
    expect(user1.pantry).to.deep.equal([
      { ingredient: 11297, amount: 4 },
      { ingredient: 1082047, amount: 10 },
    ]);

    expect(user2.pantry).to.deep.equal([
      { ingredient: 6150, amount: 3 },
      { ingredient: 1032009, amount: 7 },
    ]);
  });
});
