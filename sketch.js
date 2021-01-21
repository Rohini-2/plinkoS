const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var divisionHeight = 300;
var particles = []
var plinkos = []
var divisions = []


function setup() {
  engine = Engine.create()
  world = engine.world;
  createCanvas(480, 800);
  ground = new Ground(600, height, 1200, 20)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight))
  }
   for (var j = 40; j <= width; j = j + 50) {
    particles.push(new Particles(j, 75,10,10))
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    particles.push(new Particles(j, 175,10,10))
  }
  for (var j = 40; j <= width; j = j + 50) {
    particles.push(new Particles(j, 275,10,10))
  }
  for (var j = 40; j <= width; j = j + 50) {
    particles.push(new Particles(j, 375,10,10))
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j, 240,10))
  }
  for (var j = 15; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j, 240,10))
  }

}

function draw() {
  background(0);
  Engine.update(engine)
  ground.display();
  fill("white")
    textSize(20)
    text("SCORE : "+score, 200,50)
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }

  drawSprites();
}
function keyPressed() {
  if (gameState == "end") {
      partical=new Particles(mousex,10,10,10)
  }
}

