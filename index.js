// Sets up some objects for use in testing interface. Can test how jquery.js code dynamically handles presenting these if you change it here. Go incognito or clear cache if change isn't shown in browser.

countMeUp = new CountMeUp();
user = new User('Roscoe');
candidate1 = new Candidate('Dante Clark');
candidate2 = new Candidate('Gabriel Kingston');
candidate3 = new Candidate('Blake Tholen');
candidate4 = new Candidate('Lucy Vanwinkle');
candidate5 = new Candidate('Jazmine Black');
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
