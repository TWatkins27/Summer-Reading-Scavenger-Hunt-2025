let message = ""; // Declare globally
let listener = null;
function setup() {
createCanvas(1000, 50);
checkAnswer1();
}
function draw() {
  clear();
  textAlign(CENTER, CENTER);
  textSize(12);
  text(message, width / 2, height / 2); // Display stored message
}
function checkAnswer1() {
  let answerToCheck = "The";
  console.log("Assigned answerToCheck");
  
  // Get the input element.
  let answerInput = document.getElementById("Answer1");
  
  // Define a listener as a named function (so you can remove it later if needed).
  message = "The first clue is \"Bold and bright, find me where the PLAYERS fight\"";
  function listener(event) {
    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      let input = answerInput.value;
      if (input.includes(answerToCheck)) {
        // Display the correct answer text on the canvas.
       message = "That is the correct answer!  The next clue is \"This summer you might vacation in the sunshine state - where this fruit is common. Travel to 917.59 to find the answer.\"";

        if (listener) {
        answerInput.removeEventListener('keypress', listener);
        }
        checkAnswer2();
      } else {
        message = "That is not the correct answer";
      }
    }
  };
  answerInput.addEventListener('keypress', listener)
}
function checkAnswer2() {
  let answerToCheck = "clue";
  console.log("Assigned answerToCheck");
  
  // Get the input element.
  let answerInput = document.getElementById("Answer1");
  
  // Define a listener as a named function (so you can remove it later if needed).
  function listener(event) {
    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      let input = answerInput.value;
      if (input.includes(answerToCheck)) {
        // Display the correct answer text on the canvas.
        message = "That is the correct answer!  The next clue is \"From Alaska to Nebraska to Chicago to Santiago you will find Yellow.\"";

                if (listener) {
        answerInput.removeEventListener('keypress', listener);
        }

        checkAnswer3();
      } else {
        
        message = "That is not the correct answer";
      }
    }
  };
  answerInput.addEventListener('keypress', listener)
}
function checkAnswer3() {
  let answerToCheck = "is";
  console.log("Assigned answerToCheck");
  
  // Get the input element.
  let answerInput = document.getElementById("Answer1");
  
  // Define a listener as a named function (so you can remove it later if needed).
  function listener(event) {
    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      let input = answerInput.value;
      
      if (input.includes(answerToCheck)) {
        // Display the correct answer text on the canvas.
        message = "That is the correct answer!  The next clue is \"There\'s a bunch of splatters in the library, below the green is where you will find me.\"";

                if (listener) {
        answerInput.removeEventListener('keypress', listener);
        }

        checkAnswer4();
      } else {
        
        message = "That is not the correct answer";
      }
    }
  };
  answerInput.addEventListener('keypress', listener)
}
function checkAnswer4() {
  let answerToCheck = "by";
  console.log("Assigned answerToCheck");
  
  // Get the input element.
  let answerInput = document.getElementById("Answer1");
  
  // Define a listener as a named function (so you can remove it later if needed).
  function listener(event) {
    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      let input = answerInput.value;
      
      if (input.includes(answerToCheck)) {
        // Display the correct answer text on the canvas.
         message = "That is the correct answer!  The next clue is \"In between the cushions of our comfy couch is where you will find me.\"";

                if (listener) {
        answerInput.removeEventListener('keypress', listener);
        }

        checkAnswer5();
      } else {
        
        message = "That is not the correct answer";
      }
    }
  };
  answerInput.addEventListener('keypress', listener)
}
function checkAnswer5() {
  let answerToCheck = "the";
  console.log("Assigned answerToCheck");
  
  // Get the input element.
  let answerInput = document.getElementById("Answer1");
  
  // Define a listener as a named function (so you can remove it later if needed).
  function listener(event) {
    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      let input = answerInput.value;
      
      if (input.includes(answerToCheck)) {
        // Display the correct answer text on the canvas.
       message = "That is the correct answer!  The next clue is \"Par, jar, lar, next to the star is where you will find me.\"";

                if (listener) {
        answerInput.removeEventListener('keypress', listener);
        }

        checkAnswer6();
      } else {
        
        message = "That is not the correct answer";
      }
    }
  };
  answerInput.addEventListener('keypress', listener)
}
function checkAnswer6() {
  let answerToCheck = "rainbow.";
  console.log("Assigned answerToCheck");
  
  // Get the input element.
  let answerInput = document.getElementById("Answer1");
  
  // Define a listener as a named function (so you can remove it later if needed).
  function listener(event) {
    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      let input = answerInput.value;
      
      if (input.includes(answerToCheck)) {
        // Display the correct answer text on the canvas.
 

                if (listener) {
        answerInput.removeEventListener('keypress', listener);
        }
        message = "You have found all the words, now use the clue to find the rainbow case."
      } else {
        
        message = "That is not the correct answer";
      }
    }
  };
  answerInput.addEventListener('keypress', listener)
}