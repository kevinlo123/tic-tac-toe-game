let cellOneTopLeft = document.getElementById("blocks_one");
let cellTwoTopCenter = document.getElementById("blocks_two");
let cellThreeTopRight = document.getElementById("blocks_three");
let cellFourCntrLeft = document.getElementById("blocks_four");
let cellFiveCntrCenter = document.getElementById("blocks_five");
let cellSixCntrRight = document.getElementById("blocks_six");
let cellSevenBottomLeft = document.getElementById("blocks_seven");
let cellEightBottomCenter = document.getElementById("blocks_eight");
let cellNineBottomRight = document.getElementById("blocks_nine");


cellOneTopLeft.onclick = firstTurn;
cellTwoTopCenter.onclick = secondTurn;
cellThreeTopRight.onclick = thirdTurn;
cellFourCntrLeft.onclick = fourthTurn;
cellFiveCntrCenter.onclick = fifthTurn;
cellSixCntrRight.onclick = sixthTurn;
cellSevenBottomLeft.onclick = seventhTurn;
cellEightBottomCenter.onclick = eighthTurn;
cellNineBottomRight.onclick = ninthTurn;


function firstTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellOneTopLeft.innerHTML = x;
  cellOneTopLeft.value = true;
  }else{
    const o = "o";
    cellOneTopLeft.innerHTML = o;
    cellOneTopLeft.value = false;
  }
  checkWhoWon();
}

function secondTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellTwoTopCenter.innerHTML = x;
  cellTwoTopCenter.value = true;
  }else{
    const o = "o";
    cellTwoTopCenter.innerHTML = o;
    cellTwoCenter.value = false;
  }
  checkWhoWon();
}

function thirdTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellThreeTopRight.innerHTML = x;
  cellThreeTopRight.value = true;
  }else{
    const o = "o";
    cellThreeTopRight.innerHTML = o;
    cellThreeTopRight.value = false
  }
  checkWhoWon();
}

function fourthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellFourCntrLeft.innerHTML = x;
  }else{
    const o = "o";
    cellFourCntrLeft.innerHTML = o;
  }
  checkWhoWon();
}

function fifthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellFiveCntrCenter.innerHTML = x;
  }else{
    const o = "o";
    cellFiveCntrCenter.innerHTML = o;
  }
  checkWhoWon();
}

function sixthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellSixCntrRight.innerHTML = x;
  }else{
    const o = "o";
    cellSixCntrRight.innerHTML = o;
  }
  checkWhoWon();
}

function seventhTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellSevenBottomLeft.innerHTML = x;
  }else{
    const o = "o";
    cellSevenBottomLeft.innerHTML = o;
  }
  checkWhoWon();
}

function eighthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellEightBottomCenter.innerHTML = x;
  }else{
    const o = "o";
    cellEightBottomCenter.innerHTML = o;
  }
  checkWhoWon();
}

function ninthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "1" || turn === "player1" || turn === "player one"){
  const x = "x";
  cellNineBottomRight.innerHTML = x;
  }else{
    const o = "o";
    cellNineBottomRight.innerHTML = o;
  }
  checkWhoWon();
}

function checkWhoWon(){
    if(cellOneTopLeft.value === true &&
        cellTwoTopCenter.value === true &&
        cellThreeTopRight.value === true){
        alert("you win");
    }else{
        console.log("you lose");
    }
}
