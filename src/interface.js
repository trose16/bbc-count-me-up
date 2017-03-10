$(document).ready(function() {

  showVotes();
  showCandidate();
  showVoteButton();


  $('#track-votes').click(function() {
    user.castVote();
    updateVotes();
  })

  function showCandidate() {
      $("#candidates").html(convertToHTML());
  };

  function convertToHTML() {
    var array = countMeUp.candidates;
    var html = "<ul>";
    for ( var i = 0; i < array.length; i++ ) {
      html += `<li>${ array[i].name }</li>`;
    }
    return html + "</ul>"
  };

  function showVoteButton() {
    var voteBtn = $("<button>");
    $("#candidates li").append(voteBtn);
  }; // target each button to add votes to candidate

  function showVotes() {
    $('#total-votes').text(countMeUp.totalVotes);
  }

})
