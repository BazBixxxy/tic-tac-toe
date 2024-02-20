const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cellElements = document.querySelectorAll("[data-cell]");
const boardElement = document.querySelector(".board");
const messageElement = document.querySelector(".message");
const restartButton = document.getElementById("restartButton");
const WINNING_COMBINATION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; // the winning combinations on the board
let circleTurn; // this variable checks whose turn it is

startGame();
restartButton.addEventListener("click", startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(CIRCLE_CLASS);
    cell.classList.remove(X_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverEffect();
  document.querySelector(".result").classList.remove("show");
}

function handleClick(e) {
  const cell = e.target; // the target property returns the element where the event occurred
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS; // if its circle's turn then we return the circle class otherwise we return the x class
  placeMark(cell, currentClass); // function adds a mark by adding a class to the cell
  if (checkWin(currentClass)) {
    endGame(false);
  }
  else if (isDraw()) {
    endGame(true);
  } else {
    toggleClass(); // this swaps the turns between circle and x
    setBoardHoverEffect(); // this function sets the board class hover effect to whoever is playing
  }
}

function endGame(draw) {
  if (draw) {
    messageElement.innerHTML = `It's a draw🤝`;
  } else {
    messageElement.innerHTML = `${circleTurn ? "O wins 😱" : "X wins 😏"}`;
  } // if it's O's turn, then O wins, if its X's turn then X wins
  document.querySelector(".result").classList.add("show");
}

function isDraw() {
  // we destructure the cell elements into an array
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  // function adds a mark by adding a class to the cell
  cell.classList.add(currentClass);
}

function toggleClass() {
  // this swaps the turns between circle and x
  circleTurn = !circleTurn;
}

function setBoardHoverEffect() {
  // this function sets the board class hover effect to whoever is playing
  boardElement.classList.remove(X_CLASS);
  boardElement.classList.remove(CIRCLE_CLASS);
  if (circleTurn) boardElement.classList.add(CIRCLE_CLASS);
  else boardElement.classList.add(X_CLASS);
}

function checkWin(currentClass) {
  // in the function below, the some function checks if atleast one class meets the criteria in our winning combinations, and the every function returns true if one class list meets one of the combinations
  return WINNING_COMBINATION.some((combinations) => {
    return combinations.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
