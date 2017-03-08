describe('CountMeUp', function() {

  var countMeUp;
  var user;
  var candidate;

  beforeEach(function() {
    countMeUp = new CountMeUp();
    user = jasmine.createSpyObj('user', ['castVote']);
    candidate = jasmine.createSpyObj('candidate')
  });

  it('should store a list of candidates', function() {
    expect(countMeUp.candidates).toEqual([]); // I'm starting here since the program is dependent on having candidates for which to vote.
  });

  it('should store a list of users', function() {
    expect(countMeUp.users).toEqual([]) // The next essential component is to track the users that will cast votes.
  });




});
