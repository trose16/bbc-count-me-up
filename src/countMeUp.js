

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
  };
