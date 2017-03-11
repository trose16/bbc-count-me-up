// maybe switch to constructor/prototype so I can have a view object loaded in my index.js

$(document).ready(function() {

  showVotes();
  showCandidate();
  showVoteButton();
  welcomeUser();


  $('#candidates button').click(function() {
    return $('button').siblings();
    showVotes();
  });

  function getCandidateByNameKey() {
    // I need to know which line item button got clicked.. can add a property to button to ID candidate?
    candidates = $('#candidates li'); // returns array
    candidates[i].innerText; // returns nameKey
  };

  function getFinalResults() {
    //on click display list sorted by decending votes. Declare a winner.
  };

  function showCandidateByPercentage() {
    //a button that populates the sorted list
    // need to convertToHTML
  }

  function welcomeUser() {
    greet = $("<h3>");
    $("#header").append(greet);
    $("#header").append("Hi " + user.name);
  }

  function showCandidate() {
      $("#candidates").html(convertToHTML());
      $("#candidates").prepend("Vote For Candidates Here:");
  };

  function showVoteButton() {
    var voteBtn = $("<button>");
    $("#candidates li").append(voteBtn);
  }; // target each button to add votes to candidate

  function showVotes() {
    $('#total-votes').text(countMeUp.totalVotes);
  }


  function convertToHTML() {
    var array = countMeUp.candidates;
    var html = "<ul>";
    for ( var i = 0; i < array.length; i++ ) {
      html += `<li>${ array[i].name }</li>`;
    }
    return html + "</ul>"
  };

  function findNameKey() {
  	$('#candidates button').click(function() {

  	})
  }
  
  function findCandidate(nameString, candidateList) {
    for (var i = 0; i < candidateList.length; i++) {
        if (candidateList[i].name === nameString) {
          return candidateList[i];
        }
    }
  };


})
