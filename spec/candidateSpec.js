describe('User', function() {

  var user;

  beforeEach(function() {
    user = new User('Teako');
    candidate = jasmine.createSpyObj('candidate', ['receiveVote']);
  })

  it('should be initialized with a username for identification', function() {
    expect(user.name).toEqual('Teako');
  })

  it('should be able to cast a vote for a candidate', function() {
    user.castVote(candidate)
    expect(candidate.receiveVote).toHaveBeenCalled();
  });


});
