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

  CountMeUp.prototype.votePercentage = function() {
    var array = this.candidates;
    var decimal = "0.";
    for (var i = 0; i < array.length; i++) {
      toFloat = decimal + array[i].votes.toString();
      percentage = parseFloat(toFloat) * this.totalVotes;
      return Number((percentage).toFixed(1));
    }
  };

  exports.CountMeUp = CountMeUp;

})(this);
