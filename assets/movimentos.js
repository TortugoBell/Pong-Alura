let colisoes=0;
let multiplicadorColisao=1.5;

function comeca(){
    if (botão>0){
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(canvas.width/2,canvas.height/2,50,50);
      fill(0);
      triangle(canvas.width/2-5,canvas.height/2-10,canvas.width/2+10,canvas.height/2,canvas.width/2-5,canvas.height/2+10);
    }
    if (mouseIsPressed){
      vBolaY=5;
      vBolaX=5;
      botão=0;
    }
}

function movimentoBola(){ 
    xBola+=vBolaX;
    yBola+=vBolaY;
    xBola=constrain(xBola,0,width-10);
}
function movimentoRival(){
    vRival=(yBola-yRival)/multiplicadorColisao;
    yRival+= vRival;
    yRival=constrain(yRival,75,height-75);
}
function movimentoPlayer(){
    yPlayer=mouseY;
    yPlayer=constrain(yPlayer,75,height-75);
}
function colisao(){
    if (yBola-10<0 || yBola+10>height){vBolaY*=-1}
}

function goalPlayer(){
  if (xBola+10>width-2){
    xBola=canvas.width/2;
    yBola=canvas.height/2;
    vBolaY=0;
    vBolaX=0;
    botão=1;
    pontosPlayer++
  }
}

function goalRival(){
  if (xBola-10<2){
    xBola=canvas.width/2;
    yBola=canvas.height/2;
    vBolaY=0;
    vBolaX=0;
    botão=1;
    pontosRival++
  } 
}

function hit(){
    colidiuPlayer=collideRectCircle(xPlayer+1,yPlayer-75,larguraPlayer,alturaPlayer,xBola,yBola,raio);
    colidiuRival=collideRectCircle(xRival-1,yRival-75,larguraRival,alturaRival,xBola,yBola,raio);
    if (colidiuPlayer||colidiuRival){
      vBolaX*=-1
      colisoes++
      multiplicadorColisao+=colisoes/10
    }
}