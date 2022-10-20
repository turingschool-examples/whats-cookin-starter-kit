import { expect } from 'chai';


describe ('User', () => {
  let user1
  beforeEach(() => {
    let user1 = new user()
  })

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

})