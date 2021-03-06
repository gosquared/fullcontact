describe('FullContact.Email', function () {
  'use strict';

  var FullContact = require('../')
    , chai = require('chai')
    , expect = chai.expect;

  chai.Assertion.includeStack = true;

  //
  // The API key we use for testing.
  //
  var key = process.env.API_KEY;

  //
  // Some of the requests take a really long time, so set a really long timeout
  //
  this.timeout(20000);

  //
  // Pre-create an API instance
  //
  var api = new FullContact(key);

  describe('#disposable', function () {
    it('is it an disposable e-mail address', function (done) {
      api.email.disposable('arnout@observe.it', done);
    });

    it('provides the proper casing');
  });
});
