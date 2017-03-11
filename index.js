// Sets up some objects for use in testing interface. Can test how jquery.js code dynamically handles presenting these if you chnage it here.

countMeUp = new CountMeUp();
user = new User('BoBo');
candidate = new Candidate('Dante');
candidate2 = new Candidate('Gabriel');
candidate3 = new Candidate('Blake');
countMeUp.trackCandidate(candidate);
countMeUp.trackCandidate(candidate2);
countMeUp.trackCandidate(candidate3);
countMeUp.trackUser(user);
