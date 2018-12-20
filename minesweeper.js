document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:
    [
    {row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 0, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 1, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 2, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 2, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}
    ]
  }
// Alternate board definition
// var board = { cells: generateBoard(3)}  
//   function generateBoard(size) {
//     var cells = []
//     for (i= 0; i< size; i++) {
//       for (j=0; j< size; j++) {
//       cell = {
//         row: i,
//         col: j, 
//         isMine: Math.random()<0.20,0:1,
//         hidden: true,
//         isMarked: false,
//         }
//       cells.push(cell)
//     }
//   }   
//   return cells
// }

function startGame () {
  for (var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  } 
  function countSurroundingMines (cell) {
    var surrounding = lib.getSurroundingCells(cell.row, cell.col)
    var count = 0
    for (var i = 0; i < surrounding.length; i++){
      if (surrounding[i].isMine === true) {
        count++
        }
        else console.log("peanuts?")
      }
    return count
  }
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++){
    var check = board.cells[i]
    if(!check.isMine && check.isMarked) {
      return 
    }


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
