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
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellOneTopLeft.innerHTML = x;
  }else{
    const o = "o";
    cellOneTopLeft.innerHTML = o;
  }
}

function secondTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellTwoTopCenter.innerHTML = x;
  }else{
    const o = "o";
    cellTwoTopCenter.innerHTML = o;
  }
}

function thirdTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellThreeTopRight.innerHTML = x;
  }else{
    const o = "o";
    cellThreeTopRight.innerHTML = o;
  }
}

function fourthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellFourCntrLeft.innerHTML = x;
  }else{
    const o = "o";
    cellFourCntrLeft.innerHTML = o;
  }
}

function fifthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellFiveCntrCenter.innerHTML = x;
  }else{
    const o = "o";
    cellFiveCntrCenter.innerHTML = o;
  }
}

function sixthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellSixCntrRight.innerHTML = x;
  }else{
    const o = "o";
    cellSixCntrRight.innerHTML = o;
  }
}

function seventhTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellSevenBottomLeft.innerHTML = x;
  }else{
    const o = "o";
    cellSevenBottomLeft.innerHTML = o;
  }
}

function eighthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellEightBottomCenter.innerHTML = x;
  }else{
    const o = "o";
    cellEightBottomCenter.innerHTML = o;
  }
}

function ninthTurn(){
  const turn = prompt("whose turn is it");
  if(turn === "player1" || turn === "player one"){
  const x = "x";
  cellNineBottomRight.innerHTML = x;
  }else{
    const o = "o";
    cellNineBottomRight.innerHTML = o;
  }
}
