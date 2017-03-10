$(document).ready(function() {

  var countMeUp = new CountMeUp();
  updateVotes();


  $('#track-votes').click(function() {
    countMeUp.trackVotes();
    updateVotes();
  })

  function updateVotes() {
    $('#total-votes').text(countMeUp.totalVotes);
  }

})
