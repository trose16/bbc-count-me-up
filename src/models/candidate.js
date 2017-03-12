// Candidate model was pretty simple. It should exist and be able to receive votes. receiveVote is triggered by the user.castVote function, it will not trigger if the user votes > 3. Using javascript module pattern to namespace and mimic classes 

(function(exports) {

  function Candidate(name) {
    this.name = name;
    this.votes = 0;
  };

  Candidate.prototype.receiveVote = function() {
    this.votes++;
  };


  exports.Candidate = Candidate;

})(this);
