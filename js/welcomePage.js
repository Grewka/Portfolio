let welcomeMessage = "Hello, I'm Ewa. I'm a front-end developer.";
let welcomeMessageContainer = document.getElementById(
  "welcomeMessageContainer"
);
let welcomeButton = document.querySelector(".hideWelcomeButton");

function printLetterByLetter(messageContainer, message, speed) {
  var i = 0;
  var interval = setInterval(function () {
    messageContainer.innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, speed);
}

setTimeout(function () {
  welcomeButton.className = "visibleWelcomeButton";
}, 4500);

printLetterByLetter(welcomeMessageContainer, welcomeMessage, 100);
