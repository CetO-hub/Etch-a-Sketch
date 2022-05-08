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
