// let startbtn = document.querySelector(".startbutton");
// let wellcomepg = document.querySelector("#welcomePage");
// let gamepg = document.querySelector("#gamePage");
// let msg = document.querySelector("#msg");
// let scoreDisplay = document.querySelector("#score");

// let colors = ["red", "blue", "yellow", "green"];
// let balloons = document.querySelectorAll(".balloon");

// let targetColor = "";
// let score = 0;

// // Start button event
// startbtn.addEventListener("click", () => {
//   wellcomepg.style.display = "none";
//   gamepg.style.display = "block";
//   startGame();
// });

// function startGame() {
//   // choose a random target color
//   targetColor = colors[Math.floor(Math.random() * colors.length)];

//   // show target color to user
//   msg.innerText = `🎯 Find the ${targetColor} balloon!`;

//   // assign random colors to balloons
//   balloons.forEach(balloon => {
//     let randomindex = Math.floor(Math.random() * colors.length);
//     balloon.style.backgroundColor = colors[randomindex];

//     // clear old listeners
//     balloon.replaceWith(balloon.cloneNode(true));
//   });

//   // re-select balloons after clone reset
//   balloons = document.querySelectorAll(".balloon");

//   // attach click events
//   balloons.forEach(balloon => {
//     balloon.addEventListener("click", () => {
//       checkSelection(balloon.style.backgroundColor);
//     });
//   });
// }
// function checkSelection(userChoice) {
//   if (userChoice === targetColor) {
//     msg.innerText = "🎉 Hurray! Right guess!";
//     score++;
//     scoreDisplay.innerText = `Score: ${score}`;
//     // restart new round after 1 sec
//     setTimeout(startGame, 1000);
//   } else {
//     msg.innerText = "😢 Wrong! Try again...";
//   }
// }
const Employee={
 calculateTax(){
  console.log("tax is 10x");
 }
}

const karanArjun={
  salary:5000,
};
karanArjun.__proto__= Employee;