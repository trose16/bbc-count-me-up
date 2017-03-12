// interface.js is the middle view layer accessing data from backend models to dynamically render frontend index.html page content using jQuery

$(document).ready(function() {

// calling the functions I need upon page load
  welcomeUser();
  showTotalVotes();
  showCandidate();
  showCandidateVoteButton();

  // hard coded test of candidate vote button sequence...
  $('#candidates button').click(function() {
      try {
        user.castVote(candidate4, countMeUp);
        showTotalVotes();
      }
      catch(err) {
        showError();
      }
  });

  $('#get-percentage').click(function() {
      showPercentage();
  });

  $('#get-rank').click(function() {
      showRank();
  });

  $('#get-results').click(function() {
      showResults();
  });

  function showError() {
      $("#error-message").html("I'm sorry " + user.name + " you may only vote 3 times.");
  };

  function showPercentage() {
      $("#percentage").html(percentageToHTML());
      $("#percentage").prepend("Candidate vote percetage: "); // make sure this works!
  };

  function showRank() {
      $("#rank").html(rankToHTML());
      $("#rank").prepend("Candidate rank: ");
  };

  function showResults() {
      var winner = $("<h3>");
      $('#results').append(winner);
      $('#results').append("The winner is " + countMeUp.finalResults()
      );
    };

  function welcomeUser() {
    var greet = $("<h3>");
    $("#greet-user").append(greet);
    $("#greet-user").append("Welcome " + user.name + "!");
  }

  function showCandidate() {
      $("#candidates").html(convertToHTML());
      $("#candidates").prepend("Vote For Candidates Here:");
  };

  function showCandidateVoteButton() {
    var voteBtn = $("<button>");
    $("#candidates li").append(voteBtn);
    $("#candidates button").html('Vote For Me!');
  }; // target each button to add votes to candidate

  function showTotalVotes() {
    $('#total-votes').html("Total Votes: " + countMeUp.totalVotes);
  }


// ↓ These methods convert my objects to html for view

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

  function percentageToHTML() {
    var array = countMeUp.calcPercentage();
    var html = "<ul>";
    for ( var i = 0; i < array.length; i++ ) {
      html += `<li>${ array[i] }</li>`;
    }
    return html + "</ul>"
  };


  // Working on this functionality for voting buttons



// This seems like it should be working since it does if it's done bit by bit in console. However as one function it doesn't do something right: "Uncaught TypeError: Cannot read property 'receiveVote' of undefined at User.castVote (user.js:13)"
    // $('#candidates button').click(function() {
    //     var nameKey = (this).previousSibling;
    //     return nameKey;
    //     console.log(nameKey);
    //     var candidateObject = findCandidateObject(nameKey, countMeUp.candidates);
    //     return candidateObject;
    //     console.log(candidateObject);
    //     user.castVote(candidateObject, countMeUp);
    //     showTotalVotes();
    //   });

// this works to extract the previousSibling (candidates name string) of the button clicked to use as a nameKey that my findCandidateObject can use as a search tool to return the candidate object for button clicked
      function nameKey() {
          $('#candidates button').click(function() {
          (this).previousSibling;
          console.log((this).previousSibling);
          });
      };


// takes name string and finds matching candidate object, which can be passed to castVote method and tracked
    function findCandidateObject(nameString, candidateList) {
          for (var i = 0; i < candidateList.length; i++)  {
            if (candidateList[i].name === nameString) {
          return candidateList[i];
        }
      }
    };


})
