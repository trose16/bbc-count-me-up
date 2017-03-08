describe('Candidate', function() {

  var candidate;
  var user;

  beforeEach(function() {
    candidate = new Candidate('Dante');
    user = jasmine.createSpyObj('user', ['castVote']);
  });

  it('should be initialized with a name for identification', function() {
    expect(candidate.name).toEqual('Dante');
  });

  it('should receive votes cast by users', function() {
    user.castVote(candidate);
    candidate.receiveVote();
    expect(candidate.votes).toEqual(1);
  });

});
