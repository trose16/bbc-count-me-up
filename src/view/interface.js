// interface.js is the middle view layer accessing data from backend models to dynamically render frontend index.html page content using jQuery

$(document).ready(function() {

// Calling the functions I need upon page load
  welcomeUser();
  showTotalVotes();
  showCandidate();
  showCandidateVoteButton();


  $('#candidates button').click(function() { // Hardcoded UI voting buttons to test events triggers
      try {
        user.castVote(candidate4, countMeUp); // Dynamic solution in works at bottom of page
        showTotalVotes();
      }
      catch(err) {
        showError(); // Displays error thrown when user votes more than 3 times
      }
  });

  $('#get-percentage').click(function() {
      showPercentage(); // Displays list of candidate percentage of votes
  });

  $('#get-rank').click(function() {
      showRank(); // Displays list of candidate by rank
  });

  $('#get-results').click(function() {
      showResults(); // Accurately and clearly announces the winner
  });


// Function definitions used in the calls above...
  function showError() {
      $("#error-message").html("I'm sorry " + user.name + " you may only vote 3 times.");
  };

  function showPercentage() {
      $("#percentage").html(percentageToHTML());
      $("#percentage").prepend("Candidate vote percentage: "); // make sure this works!
  };

  function showRank() {
      $("#rank").html(rankToHTML());
      $("#rank").prepend("Candidate rank: ");
  };

  function showResults() {
      var winner = $("<h3>");
      $('#results').append(winner);
      $('#results').html("The winner is " + countMeUp.finalResults()
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


// Function definitions used above to convert objects into html for use in UI view building
  function convertToHTML() {
      var array = countMeUp.candidates;
      var html = "<ul>";
      for ( var i = 0; i < array.length; i++ ) {
        html += `<li>  ${ array[i].name }  </li>`;
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

/* Notes on voter buttons: Each candidate has a button rendered by jQuery and added to it's line item.
On click the button needs to identify its candidate and call the 'user.castVote(candidate, countMeUp)'
function, which will update the total votes/candidate votes and throw error if user votes more than 3 times.
Researched A LOT, logic seems sound, yet still not working and would love feedback! */


/* My solution below was for button to find previousSibling, which returns candidate name string.
I then pass that name into a search function 'findCandidateObject(nameString, candidateList)' that will
search my array of objects to find the right candidate object to return as an argument for my user.castVote fx
(works great!). Each bit/fx works when run in manually repl but getting it to dynamically handle in my callback
causes: "Uncaught TypeError: Cannot read property 'receiveVote' of undefined at User.castVote (user.js:13)"
It seems to be that my castVote method remains undefined and is not getting it's candidate object. */

    // $('#candidates button').click(function() {
    //     var nameKey = (this).previousSibling; // exp " Dante Clark "
    //     return nameKey;
    //     console.log(nameKey); // debugging
    //     var candidateObject = findCandidateObject(nameKey, countMeUp.candidates);
    //     return candidateObject;
    //     console.log(candidateObject);
    //     user.castVote(candidateObject, countMeUp);
    //     showTotalVotes();
    //   });


// Basically the reverse of my convertHTML methods. Takes nameKey string to find and return candidate object, used by user.castVote function...
    // function findCandidateObject(nameString, candidateList) {
    //       for (var i = 0; i < candidateList.length; i++)  {
    //         if (candidateList[i].name === nameString) {
    //       return candidateList[i];
    //     }
    //   }
    // };

})
