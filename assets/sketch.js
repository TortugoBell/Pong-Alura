let canvas;

let xBola;
let yBola;
let vBolaY;
let vBolaX;
let raio=20;

let xRival;
let yRival;
let vRival;
let larguraRival=10;
let alturaRival=150;

let xPlayer;
let yPlayer;
let larguraPlayer=10;
let alturaPlayer=150;

function setup() {
  canvas=createCanvas(window.innerWidth, window.innerHeight);

  xBola=width/2;
  yBola=height/2;
  vBolaY=0;
  vBolaX=0;

  xRival=width-10;
  yRival=height/2;
  vRival=0;

  xPlayer=10;
  yPlayer=height/2;

  window.addEventListener('resize', windowResized);
}

function draw() {
  objetos();
  movimentoBola();
  colisao();
  movimentoRival();
  movimentoPlayer();
  goalPlayer();
  goalRival();
  hit();
  placar();
  comeca();
  fim();
}

function objetos(){
  background(0);
  circle(xBola, yBola, raio);
  rectMode(CENTER);
  rect(xRival,yRival,larguraRival,alturaRival);
  rect(xPlayer,yPlayer,larguraPlayer,alturaPlayer);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);

  xBola=width/2;
  yBola=height/2;

  xRival=width-10;
  yRival=height/2;

  xPlayer=10;
  yPlayer=height/2;
}