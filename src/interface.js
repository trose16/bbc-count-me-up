// maybe switch to constructor/prototype so I can have a view object loaded in my index.js

$(document).ready(function() {

  showVotes();
  showCandidate();
  showVoteButton();
  welcomeUser();


  $('#candidates button').click(function() {
      var nameKey = (this).previousSibling;
      console.log(nameKey);
      var candidateObject = findCandidateObject(nameKey, countMeUp.candidates)
      console.log(candidateObject);
      user.castVote(candidateObject, countMeUp);
      showVotes();
  });

  $('#get-results').click(function() {
    showResults();
  });

  $('#get-percentage').click(function() {
    showPercentage();
  });

  function showResults() {
      winner = $("<h3>");
      $('#results').append(winner);
      $('#results').append("The winner is " + countMeUp.finalResults());
    };

    function showPercentage() {
        percent = $("<h3>");
        $('#percentage').append(percent);
        $('#percentage').append("Here are the percentages... " + countMeUp.calcPercentage());
      };

  function nameKey() {
    $('#candidates button').click(function() {
      (this).previousSibling;
      console.log((this).previousSibling);
    });
  }

  function findCandidateObject(nameString, candidateList) {
      for (var i = 0; i < candidateList.length; i++) {
        if (candidateList[i].name === nameString) {
        return candidateList[i];
      }
    }
  }; // takes name string and finds matching candidate object, which can be passed to castVote method and tracked

  function showCandidateByPercentage() {
    $('#percentage')
  }

  function welcomeUser() {
    greet = $("<h3>");
    $("#header").append(greet);
    $("#header").append("Hi " + user.name); // this refers to the user I instantiate in index.js
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


})
