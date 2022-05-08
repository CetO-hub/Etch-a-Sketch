// FIlter for user's input
function submitUserInput() {
  isUserInput = document.querySelector(".userInput");
  let isGridSize = Math.floor(document.querySelector(".userInput").value);
  return createGrid(isGridSize);
}

// Clear old grid (if existing) and draw a new one
function createGrid(userInput) {
  if (userInput > 0 && userInput <= 100) {
    let isSmallSquares = document.querySelectorAll(".smallSquare");
    isSmallSquares.forEach((isSmallSquare) => isSmallSquare.remove());
    let isNumberSquares = userInput * userInput;
    let isSmallSquareWidth = 960 / userInput;
    let isSmallSquareHeight = 760 / userInput;
    for (let i = 0; i < isNumberSquares; i++) {
      let isSmallSquare = document.createElement("div");
      isSmallSquare.classList.add("smallSquare");
      isSmallSquare.setAttribute(
        "style",
        "min-width: " +
          isSmallSquareWidth +
          "px; min-height: " +
          isSmallSquareHeight +
          "px"
      );
      isBigSquare.append(isSmallSquare);
    }
    return listenForHover();
  } else if (userInput < 0 || userInput >= 100) {
    alert("Only integer between 1 and 100 allowed!");
    return;
  }
  return alert("Only integer between 1 and 100 allowed!");
}

//Listen for mouse hover event
function listenForHover() {
  let isSmallSquares = document.querySelectorAll(".smallSquare");

  isSmallSquares.forEach((smallSquare) =>
    smallSquare.addEventListener("mouseover", paintBlack)
  );
}

//Paint the squares black when hovering over
function paintBlack() {
  if (colorMode === "default") {
    this.classList.add("smallSquareColored");
  } else if (colorMode === "randomColor" && !this.style.backgroundColor) {
    this.style.backgroundColor = generateColor();
  }
}

//Generate random color
function generateColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rgba = `rgba(${red}, ${green}, ${blue}, 1.0)`;
  console.log(rgba);
  return rgba;
}

//Switching between color modes and saving in global variable
function setColorOption(e) {
  colorMode = e.target[`value`];
  return colorMode;
}

// Create UI
let isBigSquare = document.createElement("div");
let isChoiceColor = document.createElement("div");
let isSubmitGridSizeBar = document.createElement("div");
let isUserInput = document.createElement("input");
let isSubmitButton = document.createElement("input");
let isLevelBlack = document.createElement("button");
let isRandomColor = document.createElement("button");

isBigSquare.classList.add("bigSquare");
isChoiceColor.classList.add("colorChoice");
isLevelBlack.classList.add("colorOption");
isRandomColor.classList.add("colorOption");
isLevelBlack.setAttribute("value", "levelBlack");
isLevelBlack.setAttribute("type", "submit");
isLevelBlack.innerHTML = "Level of black";
isRandomColor.setAttribute("value", "randomColor");
isRandomColor.setAttribute("type", "submit");
isRandomColor.innerHTML = "Random Color";
isSubmitGridSizeBar.classList.add("submitGridSizeBar");
isUserInput.classList.add("userInput");
isSubmitButton.classList.add("submitButton");

isUserInput.setAttribute("autofocus", "true");
isUserInput.setAttribute("type", "text");
isUserInput.setAttribute(
  "placeholder",
  "Please enter the desired integer (1-100) for grid size"
);
isUserInput.setAttribute(
  "size",
  isUserInput.getAttribute(`placeholder`).length
);
isSubmitButton.setAttribute("type", "button");
isSubmitButton.setAttribute("value", "Create");

document.body.append(isSubmitGridSizeBar);
document.body.append(isBigSquare);
isSubmitGridSizeBar.append(isChoiceColor);
isChoiceColor.append(isLevelBlack);
isChoiceColor.append(isRandomColor);
isSubmitGridSizeBar.append(isUserInput);
isSubmitGridSizeBar.append(isSubmitButton);

// Listening for user input
isSubmitButton = document.querySelector(".submitButton");
isSubmitButton.addEventListener("click", submitUserInput);

let colorMode = "default";

let isChoiceColors = document.querySelectorAll(".colorOption");
isChoiceColors.forEach((colorOption) =>
  colorOption.addEventListener("click", setColorOption)
);
