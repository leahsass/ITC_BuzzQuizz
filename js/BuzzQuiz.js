"useStrict";
var selectedImage = 0;

function getCharScore() {
  var charScore = 0;
  var userChar = document.getElementsByClassName("char");

  for(var i = 0; i < userChar.length; i++) {
          if(userChar[i].checked) {
              var charValue = userChar[i].value;
              break;
          }
      }
      if(charValue === "oscarTheGrouch") {
        charScore = 1;
      }
      if(charValue === "bert") {
        charScore = 2;
      }
      if(charValue === "theCount") {
        charScore = 3;
      }
      if(charValue === "elmo") {
        charScore = 4;
      }
      if(charValue === "bigBird") {
        charScore = 5;
      }
      if(charValue === "cookieMonster") {
        charScore = 6;
      }
      return charScore;
  }

function getHobbyScore() {
  var hobbyScore = 0;
  var addHobbyScore = 0;
  var userHobby = document.getElementsByClassName("faveHobby");
  var count = 0;

  for(var i = 0; i < userHobby.length; i++) {
    if(userHobby[i].checked) {
      count++
    var hobbyValue = userHobby[i].value;
      if(hobbyValue === "oscarTheGrouch") {
        addHobbyScore = 1;
      }
      if(hobbyValue === "bert") {
        addHobbyScore = 2;
      }
      if(hobbyValue === "theCount") {
        addHobbyScore = 3;
      }
      if(hobbyValue === "elmo") {
        addHobbyScore = 4;
      }
      if(hobbyValue === "bigBird") {
        addHobbyScore = 5;
      }
      if(hobbyValue === "cookieMonster") {
        addHobbyScore = 6;
      }
      var hobbyScore = addHobbyScore + hobbyScore;
    }
  }
var avgHobbyScore = hobbyScore/count;
return avgHobbyScore;
}

function getImageScore() {
  var getImage = document.getElementById("imageSelection");
  getImage.addEventListener("click", selectImage);
}
// //   var imgScore = 0;
    // if(imageSelect === "oscarTheGrouch") {
    //   imageSelect = 1;
// //     // else if(document.getElementById("bert")===true) {
// //     //   imgScore = 2;
// //     // }
// //     // else if(document.getElementById("theCount")===true) {
// //     //   imgScore = 3;
// //     // }
// //     // else if(document.getElementById("elmo")===true) {
// //     //   imgScore = 4;
// //     // }
// //     // else if(document.getElementById("bigBird")===true) {
// //     //   imgScore = 5;
// //     // }
// //     // else if(document.getElementById("cookieMonster")===true) {
// //     //   imgScore = 6;
// //     // }
//   return getImage;


// var imgScore = 0;

  // if(selectedImage === "oscarTheGrouch") {
  //   imgScore = 1;
  // }
  // return imgScore;

function selectImage(e) {
  selectedImage = e.target.id;
  console.log("this is e", e.target.id); 
}

function getSeasonScore() {
  var userInput = document.getElementById("faveSeason").value;
  var seasonScore = 0;
  if(userInput==="spring") {
    seasonScore = 3;
  }
  else if(userInput==="summer") {
    seasonScore = 6;
  }
  else if(userInput==="fall") {
    seasonScore = 5;
  }
  else if(userInput==="autumn") {
    seasonScore = 5;
  }
  else if(userInput==="winter") {
    seasonScore = 1;
  }
  else {
    console.log("Not a valid season.");
    seasonScore = 0;
  }
  return seasonScore;
}

function getColorScore() {
  var color = document.getElementById("faveColor").value;
  var colorScore = 0;
  if(color==="Red") {
    colorScore = 4;
  }
  if(color==="Orange") {
    colorScore = 2;
  }
  if(color==="Yellow") {
    colorScore = 5;
  }
  if(color==="Green") {
    colorScore = 1;
  }
  if(color==="Blue") {
    colorScore = 6;
  }
  if(color==="Purple") {
    colorScore = 3;
  }
  return colorScore;
}

function calculateAnswer() {
  document.getElementById("btnFindOut").style.display = 'block';
  var quizAnswer = (getCharScore() + getHobbyScore() + getImageScore() + getSeasonScore() + getColorScore())/5;
  var youAre = 0;
  if(quizAnswer >= 1 && quizAnswer < 2) {
    youAre = "Oscar The Grouch";
    //you're oscarTheGrouch
  }
  if(quizAnswer >= 2 && quizAnswer < 3) {
    youAre = "Bert";
    //you're bert
  }
  if(quizAnswer >= 3 && quizAnswer < 4) {
    youAre = "Count von Count";
    //you're theCount
  }
  if(quizAnswer >= 4 && quizAnswer < 5) {
    youAre = "Elmo";
    //you're elmo
  }
  if(quizAnswer >= 5 && quizAnswer < 6) {
    youAre = "Big Bird";
    //you're bigBird
  }
  if(quizAnswer >= 6 && quizAnswer < 7) {
    youAre = "Cookie Monster";
    //you're cookieMonster
  }
  return youAre;
}

function hide() {
    document.getElementById("btnFindOut").style.display = 'none';
    return;
  }

  // function show() {
  //   document.getElementById("btnFindOut").style.display = 'block';
  //   return;
  // }
