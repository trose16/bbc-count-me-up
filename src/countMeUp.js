

(function(exports) {

  function CountMeUp() {
    this.candidates = [];
    this.users = [];
    this.totalVotes = 0;
  };

  CountMeUp.prototype.trackUser = function(user) {
    this.users.push(user);
  };

  CountMeUp.prototype.trackCandidate = function(candidate) {
    this.candidates.push(candidate);
  };

  CountMeUp.prototype.trackVotes = function() {
    this.totalVotes++;
    this.rankCandidates();
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
      report.push(array[i].name + " " + Number((percentage).toFixed(1)) + "%" )
    }
    return report;
  };

  CountMeUp.prototype.finalResults = function() {
    this.rankCandidates();
    return this.candidates[0].name + " wins with " + this.candidates[0].votes + " votes!" ;
  };

  exports.CountMeUp = CountMeUp;

})(this);
