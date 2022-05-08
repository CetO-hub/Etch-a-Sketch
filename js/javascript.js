function submitUserInput() {
  isUserInput = document.querySelector(".userInput");
  let isGridSize = Math.floor(document.querySelector(".userInput").value);
  return createGrid(isGridSize);
}

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
    return paintBlack();
  } else if (userInput < 0 || userInput >= 100) {
    alert("Only integer between 1 and 100 allowed!");
    return;
  }
  return alert("Only integer between 1 and 100 allowed!");
}

function paintBlack() {
  let isSmallSquares = document.querySelectorAll(".smallSquare");
  console.log(isSmallSquares);

  isSmallSquares.forEach((smallSquare) =>
    smallSquare.addEventListener("mouseover", paintBlack)
  );
  this.classList.add("smallSquareColored");
}

let isBigSquare = document.createElement("div");
let isSubmitGridSizeBar = document.createElement("div");
let isUserInput = document.createElement("input");
let isSubmitButton = document.createElement("input");

isBigSquare.classList.add("bigSquare");
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
isSubmitGridSizeBar.append(isUserInput);
isSubmitGridSizeBar.append(isSubmitButton);

isSubmitButton = document.querySelector(".submitButton");
isSubmitButton.addEventListener("click", submitUserInput);
