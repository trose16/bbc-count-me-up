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
