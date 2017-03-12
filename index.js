// Sets up some objects for use in testing interface. Can test how jquery.js code dynamically handles presenting these if you chnage it here.

countMeUp = new CountMeUp();
user = new User('Roscoe');
candidate1 = new Candidate('Dante');
candidate2 = new Candidate('Gabriel');
candidate3 = new Candidate('Blake');
candidate4 = new Candidate('Lucy');
candidate5 = new Candidate('Jazmine');
candidate1.votes = 4000;
candidate2.votes = 2500;
candidate3.votes = 2700;
candidate4.votes = 3000;
candidate5.votes= 5500;
countMeUp.totalVotes = 17700;
countMeUp.trackCandidate(candidate1);
countMeUp.trackCandidate(candidate2);
countMeUp.trackCandidate(candidate3);
countMeUp.trackCandidate(candidate4);
countMeUp.trackCandidate(candidate5);
countMeUp.trackUser(user);
