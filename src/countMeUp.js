(function(exports) {

  function CountMeUp() {
    this.candidates = [];
    this.users = [];
  };

  CountMeUp.prototype.trackUser = function(user) {
    this.users.push(user);
  };

  CountMeUp.prototype.trackCandidate = function(candidate) {
    this.candidates.push(candidate);
  };


  exports.CountMeUp = CountMeUp;

})(this);
