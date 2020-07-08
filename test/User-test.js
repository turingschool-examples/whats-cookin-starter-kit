/* eslint-disable */

const chai = require('chai');

const expect = chai.expect;
var User = require('../src/User')

describe('User', function () {
            let user;
            beforeEach(function () {
                user = new User();
            });

            it('should be a function', function () {
                expect(User).to.be.a('function');
            });

            it('should be an instance of User', function () {
                expect(user).to.be.an.instanceof(User);
            });

            it('should have a unique id', () => {
                expect(user.id).to.equal(user.id);
            })
            });