// maybe switch to constructor/prototype so I can have a view object loaded in my index.js

$(document).ready(function() {

  showVotes();
  showCandidate();
  showVoteButton();
  welcomeUser();

  $('#get-percentage').click(function() {
      showPercentage();
  });

  $('#get-rank').click(function() {
      showRank();
  });

  $('#get-results').click(function() {
      showResults();
  });

  function showPercentage() {
      var percent = $("<h3>");
      $('#percentage').append(percent);
      $('#percentage').append("Here are the percentages... " + countMeUp.calcPercentage()
      );
    };

  // function showRank() {
  //     var rank = $("<h3>");
  //     $('#rank').append(rank);
  //     $('#rank').append("Here is the candidates rank:  <br>" + rankCandidateList()
  //     );
  // };

  function showRank() {
      $("#rank").html(rankToHTML());
      $("#rank").prepend("Candidate rank: ");
  };

  function rankCandidateList() {
    countMeUp.rankCandidates()
    var sorted = [];
    var array = countMeUp.candidates;
    for (var i = 0; i < array.length; i++) {
    sorted.push(array[i].name + ": " + array[i].votes + "</br>");
   }
    return sorted;
  }; // update to output unordered list

  function showResults() {
      var winner = $("<h3>");
      $('#results').append(winner);
      $('#results').append("The winner is " + countMeUp.finalResults()
      );
    };

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

  function rankToHTML() {
    countMeUp.rankCandidates()
    var array = countMeUp.candidates;
    var html = "<ul>";
    for ( var i = 0; i < array.length; i++ ) {
      html += `<li>${ array[i].name + ": " + array[i].votes }</li>`;
    }
    return html + "</ul>"
  };


  // Working on this functionality for voting buttons

    $('#candidates button').click(function() {
        var nameKey = (this).previousSibling;
        console.log(nameKey);
        var candidateObject = findCandidateObject(nameKey, countMeUp.candidates)
        console.log(candidateObject);
        user.castVote(candidateObject, countMeUp);
        showVotes();
      });

      function nameKey() {
          $('#candidates button').click(function() {
          (this).previousSibling;
          console.log((this).previousSibling);
          });
      };

    function findCandidateObject(nameString, candidateList) {
          for (var i = 0; i < candidateList.length; i++)  {
            if (candidateList[i].name === nameString) {
          return candidateList[i];
        }
      }
    }; // takes name string and finds matching candidate object, which can be passed to castVote method and tracked


})
