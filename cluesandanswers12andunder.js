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
  message = "The first clue is \"You\'re here at the library so you probably LOVE books. If you\'re looking for the answer to this clue look no further than LOVE\"";
  function listener(event) {
    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      let input = answerInput.value;
      if (input.includes(answerToCheck)) {
        // Display the correct answer text on the canvas.
       message = "That is the correct answer!  The next clue is \"To find this answer, look by 1 2 3 A B C\"";

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
        message = "That is the correct answer!  The next clue is \"Y is for Yellow and that\'s where you\'ll find it\"";

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
        message = "That is the correct answer!  The next clue is \"In summer the world is green - let\'s keep it that way. Look for this answer where you might learn about protecting our planet\"";

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
         message = "That is the correct answer!  The next clue is \"Like the best boy detectives, you also look for clues\"";

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
       message = "That is the correct answer!  The next clue is \"This clue\'s location will puzzle you.\"";

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

      } else {
        
        message = "That is not the correct answer";
      }
    }
  };
  answerInput.addEventListener('keypress', listener)
}