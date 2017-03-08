describe('User', function() {

  var user;

  beforeEach(function() {
    user = new User('Teako');
  })

  it('should be initialized with a username for identification', function() {
    expect(user.name).toEqual('Teako');
  })


});
