document.addEventListener("DOMContentLoaded", () => {
  const cells = document.getElementsByClassName("blocks");
  const resetButton = document.getElementById("reset");
  const chooseOther = "this spot has already been chosen";
  let player = "x";
  
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
        alert("there has been a winner!");
        break;
      case currentGame[0] === currentGame[3] && currentGame[0] === currentGame[6]:
        alert("there has been a winner!");
        break;
      case currentGame[0] === currentGame[4] && currentGame[0] === currentGame[8]:
        alert("there has been a winner!");
        break;
      case currentGame[1] === currentGame[4] && currentGame[1] === currentGame[7]:
        alert("there has been a winner!");
        break;
      case currentGame[2] === currentGame[5] && currentGame[2] === currentGame[8]:
        alert("there has been a winner!");
        break;
      case currentGame[3] === currentGame[4] && currentGame[3] === currentGame[5]:
        alert("there has been a winner!");
        break;
      case currentGame[6] === currentGame[7] && currentGame[6] === currentGame[8]:
        alert("there has been a winner!");
        break;
      case currentGame[2] === currentGame[4] && currentGame[2] === currentGame[6]:
        alert("there has been a winner!");
        break;
    }
  }

  for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", () => {
      if(cells[i].innerHTML === "" && player === "x"){
        player = "x";
        cells[i].innerHTML = player;
        board[i] = player;
        console.log(board);
      }else if(cells[i].innerHTML !== "x"){
        player = "o";
        cells[i].innerHTML = player;
        board[i] = player;
        console.log(board);
      }
      winLogic(board);
      turnLogic();
    });
  }

  resetButton.addEventListener("click" , () => {
    board = [
      0,1,2,
      3,4,5,
      6,7,8,
    ];
    console.log(board);
    for(let i = 0; i < cells.length; i++){
      cells[i].innerHTML = "";
    }
  }); 
});