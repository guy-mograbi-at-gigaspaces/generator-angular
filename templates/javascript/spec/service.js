'use strict';

describe('Service: <%= cameledName %>', function () {

  // load the service's module
  beforeEach(module('<%= scriptAppName %>'));

  // instantiate service
  var m<%= cameledName %>;
  beforeEach(inject(function (<%= cameledName %>) {
    m<%= cameledName %> = <%= cameledName %>;
  }));

  it('should do something', function () {
    expect(!!m<%= cameledName %>).toBe(true);
  });

});
