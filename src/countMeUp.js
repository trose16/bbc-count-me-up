(function(exports) {

  function CountMeUp() {
    this.candidates = [];
    this.users = [];
  }

  CountMeUp.prototype.trackUser = function(user) {
    this.users.push(user);
  };


  exports.CountMeUp = CountMeUp;

})(this);
