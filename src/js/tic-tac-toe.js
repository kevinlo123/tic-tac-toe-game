document.addEventListener("DOMContentLoaded", () => {
  const cells = document.getElementsByClassName("blocks");
  const resetButton = document.getElementById("reset");
  const chooseOther = "this spot has already been chosen";
  let player = "x";
  let clickCounter = 0;
  //board
  let board = [
    0,1,2,
    3,4,5,
    6,7,8,
  ];

  const turnLogic = () => {
   return player === "x" ? player = "o" : player = "x";
  }

  const winLogic = (currentGame) => {
    switch(true){
      case currentGame[0] === currentGame[1] && currentGame[0] === currentGame[2]:
        clickCounter = 0;
        alert("There has been a winner!");
        resetBoard();
        break;
      case currentGame[0] === currentGame[3] && currentGame[0] === currentGame[6]:
        clickCounter = 0;      
        alert("There has been a winner!");
        resetBoard();        
        break;
      case currentGame[0] === currentGame[4] && currentGame[0] === currentGame[8]:
        clickCounter = 0;      
        alert("There has been a winner!");
        resetBoard();        
        break;
      case currentGame[1] === currentGame[4] && currentGame[1] === currentGame[7]:
        clickCounter = 0;      
        alert("There has been a winner!");
        resetBoard();        
        break;
      case currentGame[2] === currentGame[5] && currentGame[2] === currentGame[8]:
        clickCounter = 0;
        alert("There has been a winner!");
        resetBoard();        
        break;
      case currentGame[3] === currentGame[4] && currentGame[3] === currentGame[5]:
        clickCounter = 0;      
        alert("There has been a winner!");
        resetBoard();        
        break;
      case currentGame[6] === currentGame[7] && currentGame[6] === currentGame[8]:
        clickCounter = 0;      
        alert("There has been a winner!");
        resetBoard();        
        break;
      case currentGame[2] === currentGame[4] && currentGame[2] === currentGame[6]:
        clickCounter = 0;
        alert("There has been a winner!");
        resetBoard();        
        break;
    }
  }

  const resetBoard = () => {
    clickCounter = 0;
    board = [
      0,1,2,
      3,4,5,
      6,7,8,
    ];
    console.log(board);
    for(let i = 0; i < cells.length; i++){
      cells[i].innerHTML = "";
    }
  }

  for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", () => {
      switch(true){
        case cells[i].innerHTML === "" && player === "x":
          player = "x";
          cells[i].innerHTML = player;
          cells[i].style.color = "#EEDA76";
          board[i] = player;
          console.log(board);        
          clickCounter += 1;
          break;
        case cells[i].innerHTML !== "x": 
          player = "o";
          cells[i].innerHTML = player;
          cells[i].style.color = "#39ABD9";        
          board[i] = player;
          console.log(board);
          clickCounter += 1;
          break;
      }
      winLogic(board);
      turnLogic();
      if(clickCounter >= 9){
        alert("Tie Game! No winner.");
        resetBoard();
      }       
    });
  } 
  resetButton.addEventListener("click" , resetBoard); 
});