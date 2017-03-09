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
    var add = [];
    for( i = 0; i < this.candidates.length; i++ ) {
      add.push(this.candidates[i].votes)
    };
    this.totalVotes = add.reduce(function(a,b) {
      return a+b;
    });
    this.realTime();
  };

  function testMessage() {
    alert("realTime tracking has started")
  };

  CountMeUp.prototype.realTime = function() {
    setInterval(testMessage, 500); //plan to replace testMessage with trackVotes
  };

  exports.CountMeUp = CountMeUp;

})(this);
