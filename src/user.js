// The goal of this object is to create unique users that are able to cast votes for candidates, which will be stored by CountMeUp...

(function(exports) {

  function User(name) {
    this.name = name;
  };

  User.prototype.castVote = function(candidate) {
    candidate.receiveVote();
  };

  exports.User = User;

})(this);
