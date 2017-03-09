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
    this.rankCandidates;
  };

  CountMeUp.prototype.rankCandidates = function() {
    this.candidates.sort(function(a, b) {
    return a.votes + b.votes;
    })
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

  exports.CountMeUp = CountMeUp;

})(this);
