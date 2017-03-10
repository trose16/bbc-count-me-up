// Sets up some objects for use in testing interface

countMeUp = new CountMeUp();
user = new User('Teako');
candidate = new Candidate('Dante');
candidate2 = new Candidate('Gabriel');
candidate3 = new Candidate('Blake');
countMeUp.trackCandidate(candidate);
countMeUp.trackCandidate(candidate2);
countMeUp.trackCandidate(candidate3);
countMeUp.trackUser(user);
