// TDD tests for my candidate model

describe('Candidate', function() {

  var candidate;
  var user;

  beforeEach(function() {
    candidate = new Candidate('Dante');
    user = jasmine.createSpyObj('user', ['castVote']);
  }); // Using spyObjects to manage dependancies and separation of concerns. beforeEach block keeps the setup of each test easier to read & less cluttered.

  it('should be initialized with a name for identification', function() {
    expect(candidate.name).toEqual('Dante');
  });

  it('should receive votes cast by users', function() {
    user.castVote(candidate);
    candidate.receiveVote();
    expect(candidate.votes).toEqual(1);
  });

});
