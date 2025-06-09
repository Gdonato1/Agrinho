let tractorX = 150; // Posição inicial do trator
let tractorSpeed = 4; // Velocidade do trator
let cloudX = 0; // Posição inicial da nuvem
let cloudSpeed = 0.5; // Velocidade da nuvem
let treePositions = [100, 200, 300, 350, 50]; // Posições das árvores no campo

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul claro

  // Divisão do campo e cidade
  drawField(0, 0, width / 2, height);
  drawCity(width / 2, 0, width / 2, height);
  drawRoad();
  drawTractor(tractorX, 300);
  drawCloud(cloudX, 50); // Nuvem
  drawTrees(); // Árvores

  // Atualiza a posição da nuvem
  cloudX += cloudSpeed;

  // Reseta a posição da nuvem quando ela sai da tela
  if (cloudX > width) {
    cloudX = -200;
  }
}

function keyPressed() {
  // Move o trator para a direita
  if (keyCode === RIGHT_ARROW) {
    tractorX += tractorSpeed;
  }

  // Move o trator para a esquerda
  if (keyCode === LEFT_ARROW) {
    tractorX -= tractorSpeed;
  }

  // Previne que o trator saia da tela pela esquerda
  if (tractorX < 0) {
    tractorX = 0;
  }

  // Previne que o trator saia da tela pela direita
  if (tractorX > width - 60) {
    tractorX = width - 60;
  }
}

function drawField(x, y, w, h) {
  // Campo verde
  noStroke();
  fill(60, 179, 113);
  rect(x, h / 2, w, h / 2);
}

function drawCity(x, y, w, h) {
  // Asfalto escuro
  fill(200);
  rect(x ,h / 2, w, h / 2);
 
  // Prédios
  for (let i = 0; i < 5; i++) {
    let bx = x + 50 + i * 60;
    let by = h / 2 - (100, 200);
    let bw = 40;
    let bh = h - by;
    fill(100);
    rect(bx, by, bw, bh);
  }
}

function drawRoad() {
  // Estrada horizontal
  fill(50);
  rect(0, height - 100, width, 60);

  // Faixas amarelas
  stroke(255, 215, 0);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, height - 70, i + 20, height - 70);
  }
}

function drawTractor(x, y) {
  // Corpo
  fill(0, 128, 0);
  rect(x, y - 20, 60, 30);
 
  // Cabine
  fill(0, 200, 0);
  rect(x + 15, y - 50, 30, 30);
 
  // Rodas
  fill(0);
  ellipse(x + 10, y + 10, 20);
  ellipse(x + 50, y + 10, 20);
}

function drawCloud(x, y) {
  // Nuvem flutuante
  fill(255, 255, 255, 200); // Cor branca e semi-transparente
  noStroke();
  ellipse(x, y, 100, 60);
  ellipse(x + 40, y - 20, 120, 80);
  ellipse(x - 40, y - 20, 120, 80);
  ellipse(x + 80, y + 20, 100, 60);
}

function drawTrees() {
  for (let i = 0; i < treePositions.length; i++) {
    let treeX = treePositions[i];
    let treeY = height / 2 + 30;
    drawTree(treeX, treeY);
  }
}

function drawTree(x, y) {
  // Tronco da árvore
  fill(139, 69, 39); // Cor do tronco
  rect(x - 10, y,20,40 );
 
  // Folhas
  fill(34, 139, 19); // Cor das folhas
  ellipse(x, y - 20, 50, 50);
  ellipse(x + 20, y - 10, 50, 50);
  ellipse(x - 20, y - 10, 50, 50);
}