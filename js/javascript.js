let isBigSquare = document.createElement("div");
isBigSquare.classList.add("bigSquare");
document.body.append(isBigSquare);

let isGridSize = 0;
while (true) {
  isGridSize = prompt("Please enter the desired grid size: ", 10);
  if (isGridSize > 0 && isGridSize <= 100) {
    break;
  }
}
let isNumberSquares = isGridSize * isGridSize;
console.log(isGridSize);
let isSmallSquareWidth = 960 / isGridSize;
let isSmallSquareHeight = 760 / isGridSize;
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

let isSmallSquares = document.querySelectorAll(".smallSquare");
isSmallSquares.forEach((smallSquare) =>
  smallSquare.addEventListener("mouseover", paintBlack)
);

function paintBlack() {
  this.classList.add("smallSquareColored");
}
