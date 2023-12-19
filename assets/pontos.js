let botão=1;
let pontosPlayer=0;
let pontosRival=0; 

function placar (){
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text(pontosPlayer,canvas.width/2-100,30);
    text(pontosRival,canvas.width/2+100,30);
    if(xBola+11>width) {pontosPlayer+=1}
    if(xBola-11<0) {pontosRival+=1}
}
  function fim(){
    if(pontosPlayer>9){
      botão=1;
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("YOU WIN!",canvas.width/2,100);
    }
    if(pontosRival>9){
      botão=1;
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("GAME OVER!",canvas.width/2,100);
    }
}