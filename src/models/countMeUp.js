// Business logic for the bulk of the project is handled by the Count Me Up 'class'. I worked to keep all methods clear SRP and used dependency injection to keep in line with single responsibility.

(function(exports) {

  function CountMeUp() {
    this.candidates = [];
    this.users = [];
    this.totalVotes = 0;
  };

  CountMeUp.prototype.trackUser = function(user) {
    this.users.push(user);
  }; // a user is created and then listed in the system

  CountMeUp.prototype.trackCandidate = function(candidate) {
    this.candidates.push(candidate);
  }; // a candidate is created and then listed in the system

  CountMeUp.prototype.trackVotes = function() {
    this.totalVotes++;
    this.rankCandidates(); // triggered by user.castVote. Will not trigger if user votes > 3
  };

  CountMeUp.prototype.rankCandidates = function() {
    this.candidates.sort(function(a, b) {
    return b.votes - a.votes;
    });
  };

  CountMeUp.prototype.calcPercentage = function() {
    var array = this.candidates;
    var report = [];
    for (var i = 0; i < array.length; i++) {
      percentage = array[i].votes / this.totalVotes * 100 ;
      report.push(array[i].name + " " + Number((percentage).toFixed(1)) + "% " )
    }
    return report;
  };

  CountMeUp.prototype.finalResults = function() {
    this.rankCandidates();
    return this.candidates[0].name + " wins with " + this.candidates[0].votes + " votes!" ;
  };

  exports.CountMeUp = CountMeUp;

})(this);
