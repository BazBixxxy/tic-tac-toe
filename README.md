# tic-tac-toe

This is a project assignment from The Odin Project


Algorithm

# html

> generate the necessary html

# css

> we create the marks using the before and after css pseudo elements

> we create the hover effect using the before and after pseudo elements and the hover pseudo property but this this time using lighter background colors

> note: we add the not() pseudo property to prevent altering of an already existing pseudo class

# javaScript algorithm

> access all the cell elements using querySelectorAll using a cell element variable

> add an event listener to each cell to execute the handleClick function, the event listener should only work once for each cell so consider using { once: true}

> create the handleClick event and in it we are going to execute the following in order:

- we target each cell using the target function on the handleClick argument [const cell = e.target]

1. place either an x mark or a circle mark

- we toggle the currentClass to O, otherwise X [const currentClass = circleTurn ? O_CLASS : X_CLASS]

2. toggle between the circle and x class
3. check for a win or draw
4. swap turns
5. set the board hover effect

> but first we need to create useful variables that we are going to use throughout the project:

- create 2 variable one containing the x class and the other containing the circle class
- create circleTurn variable; what this does is to switch turns between the x and o(circle)

Back to handleClick function:

1.  Place mark function:

    > this function takes 2 arguments (cell, currentClass)
    > in the function we add the currentClass to a cell using classList add

2.  Swap turns(Toggle the classes):

    > this function takes no arguments
    > in this function we set the circleTurn to false [circleTurn = !circleTurn]

3.  set the board hover effect(this will create a swapped hover effect):

    > remove the x and circle class from the board element separately using classList.remove
    > create an if statement to add O class list if it's O's turn else add the X class list

4.  check for win or draw:
    > we start off by defining the winning combinations on our board, in this case we are using a 3x3 board and our array starts from 0, in order to win in tic tac toe the x or circles should either be aligned vertically, horizontally, or diagonally:
    > const WINNING_COMBINATIONS = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
    > we create a function [checkWin(currentClass)] to loop through the cellElement classes to determine which element class satisfies any of the combinations first.
    > we use the some function which returns true if any class satisfies the combination(condition) and we the use the every function which returns true if the value satisfies the given function:
    > [function checkWin(currentClass){
    > return WINNING_COMBINATIONS.some(combinations => {
         return combination.every(index => {
           return cellElement[index].classList.contains(currentClass)
         })
    }) }]

> in the handleClick function we need to write code to do something if a particular play wins:

- we create a new function endGame(draw):

* this function ends the game after execution of the checkWin function
* we use an if statement, if its a draw we return the draw message in the message element html, if its a win we return the winning message to the html element [${circleTurn ? "O's wins": "X's wins"}]
* then make the result panel display on the screen

> > in the handleClick function:

- we use an if statement to check if it's a win or a draw:
  [if(checkWin(currentClass)endGame(false)
  else if(isDraw())endGame(true)
  else{- we swap turns and set the board hover class})]

> we create the draw function which essentially checks if all the cells have classes without having a winner (since the cell element querySelectorAll isn't an actual array we destructure it):
> function isDraw(){
> return [...cellElements].every(cell => {

    return (cell.classList.contains(X_CLASS)||cell.classList.contains(O_CLASS))

})
}

LASTLY:

> we have to create the startGame function and call it which will start the game.

- In the function we set the circleTurn to false in order for X to start
- we move the cell event listener into this function and in it we remove all the cell class lists of X and O
- we set the board hover effect by call its function 
- remove the show class list on the result panel

>>> the final thing is to organise our code.

# the minimax algorithm
