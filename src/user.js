// The goal of this object is to create unique users that are able to cast votes for candidates, which will be stored by CountMeUp...

(function(exports) {

  function User(name) {
    this.name = name;
    this.myPicks = [];
  };

  User.prototype.castVote = function(candidate) {
    this.myPicks.push(candidate);
    candidate.receiveVote();
  };

  exports.User = User;

})(this);
