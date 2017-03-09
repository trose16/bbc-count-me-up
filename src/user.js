// The goal of this object is to create unique users that are able to cast votes for candidates, which will be used by CountMeUp...

(function(exports) {

  function User(name) {
    this.name = name;
    this.myPicks = [];
  };

  User.prototype.castVote = function(candidate) {
    if ( this.myPicks.length < 3 ) {
        this.myPicks.push(candidate);
        candidate.receiveVote();
    } else if ( this.myPicks.length === 3 ) {
        throw new Error("Sorry, you can't vote more than 3 times");
    }
  };

  User.prototype.castVote = function(candidate, countMeUp) {
    if ( this.myPicks.length < 3 ) {
      this.myPicks.push(candidate);
      candidate.receiveVote();
      countMeUp.trackVotes();
    } else if ( this.myPicks.length === 3 ) {
        throw new Error("Sorry, you can't vote more than 3 times");
    }
  }; // may refactor to move validation logic to countMeUp per SRP

  exports.User = User;

})(this);
