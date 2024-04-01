let score=JSON.parse(localStorage.getItem('score'))||
{
  wins:0,
  losses:0,
  ties:0
};

updateScoreElem();

function makeMove(userMove){
const computerMove=pickComputerMove();
let result='';

if(userMove==='rock'){
  if(computerMove==='rock'){
    result='Tie.';
  }
  else if(computerMove==='paper'){
    result='You lose.';
  }
  else if(computerMove==='scissors'){
    result='You win.';
  }
}

if(userMove==='paper'){
  if(computerMove==='rock'){
    result='You win.';}
  else if(computerMove==='paper'){
    result='Tie.';
  }
  else if(computerMove==='scissors'){
    result='You lose.';
  }
}

if(userMove==='scissors'){
  if(computerMove==='rock'){
    result='You lose.';}
  else if(computerMove==='paper'){
    result='You win.';
  }
  else if(computerMove==='scissors'){
    result='Tie.';
  }
}

if(result==='You win.'){
  score.wins++;
}
else if(result==='You lose.'){
  score.losses++;
}
else if(result==='Tie.'){
  score.ties++;
}

document.querySelector('.js-result').innerHTML=result;
console.log(userMove);
console.log(computerMove);

document.querySelector('.js-moves').innerHTML=`You <img src="images/${userMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
// document.querySelector('.js-moves').innerHTML='<img src="images/rock-emoji.png" class="move-icon">';
localStorage.setItem('score',JSON.stringify(score));

updateScoreElem();

}

function updateScoreElem(){
document.querySelector('.js-score')
  .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove(){
let randomNumber=Math.random();
if(randomNumber>=0 &&randomNumber<1/3){
  computerMove='rock';
}
else if(randomNumber<2/3){
  computerMove='paper';
}
else{
  computerMove='scissors';
}
return computerMove;
}