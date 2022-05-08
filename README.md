# Etch-a-Sketch

Problem
Create a etch-a-sketch like web page with the possiblity to draw up to 100px x 100px squares in a bigger, single 960px x 960px square. The user can enter anytime a new square layout from 1 to 100 squares. By doing so, the old layout should be removed and the new should be loaded without changing the bigger, single square size. Upon creation of the grid a trail in black should be left behind the mouse courser when hover over the single squares.
Except the html core boilerplate no further additions should be added to the html file. The entire page layout should be generated via using DOM manipulation with javascript.

Plan
The single data input by the user is performed via the prompt window.
The entered value is passed over to the script to draw the desired grid. Upon creation the user should be able to use the mouse to hover over the grid. As soon as the mouse pointer touches a square, the respective square should turn black, thus leaving a black trail behind the cursor.

Pseudocode

1. LOAD a single square of 960px x 960px.
2. PROMPT user to define the grid inside the single square from step 1.
3. LOOP OVER the entered grid size to create the desired grid size.
4. HOVER over the grid to paint the squares from step 3 black, by changing the class of the respective squares.
