describe('CountMeUp', function() {

  var countMeUp;
  var user;
  var candidate;
  var realTime;

  beforeEach(function() {
    countMeUp = new CountMeUp();
    user = jasmine.createSpyObj('user', ['castVote']);
    candidate = jasmine.createSpyObj('candidate', ['receiveVote', 'votes']);
    realTime = jasmine.createSpy("realTime");
    jasmine.clock().install();
  }); // Using spyObjects to manage dependancies and separation of concerns. beforeEach block keeps the setup of each test easier to read & less cluttered.

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it('should store a list of candidates', function() {
    expect(countMeUp.candidates).toEqual([]); // I'm starting here since the program is dependent on having candidates for which to vote.
  });

  it('should store a list of users', function() {
    expect(countMeUp.users).toEqual([]) // The next essential component is to track the users that will cast votes.
  });

  it('should add a new user to the list', function() {
    countMeUp.trackUser(user)
    expect(countMeUp.users).toContain(user); // User objects need to actually be added to the system and tracked once created.
  });

  it('should add a new candidate to the list', function() {
    countMeUp.trackCandidate(candidate)
    expect(countMeUp.candidates).toContain(candidate); // Candidates need to be added to the system and tracked once created.
  });

  it('should keep a running total of all votes cast by users', function() {
    user.castVote(candidate);
    candidate.votes = 1;
    countMeUp.trackCandidate(candidate);
    countMeUp.trackVotes();
    expect(countMeUp.totalVotes).toEqual(1);
  }); // writing basic fx to get candidate votes total and report them in one variable.

  it('Must calculate votes at or close to real time', function() {
    setInterval( function(){ realTime(); }, 500);
    jasmine.clock().tick(1500);
    expect( realTime ).toHaveBeenCalled();
    expect( realTime.calls.count() ).toEqual(3);
  }); // 1s = 1000ms using spyObject 'realTime' as a mock to test implementation of auto invoke vote tracking with setInterval.


});
