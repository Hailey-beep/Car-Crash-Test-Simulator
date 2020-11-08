var car, wall;

var weight, speed;

var severity;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  //wall sprite
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80,80,80);

  //car sprite
  car = createSprite(100, 200, 50, 50);
  car.velocityX = speed; 
}

function draw() {
  background("black");

  textSize(30);
  fill("white");
  text("Crashes deformation", 450, 30);

  console.log("Speed: " + speed);
  console.log("Weight: " + weight);

  if(wall.x - car.x < (wall.width + car.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed / 22500;
    console.log("deformation: " + deformation);

    //green = good deformation / non sever crash
    if(deformation < 100) {
      car.shapeColor = "green";
      severity = "Okay";
    }

    //Yellow = average deformation / somewhat sever crash
    if(deformation >= 100 && deformation <= 180 ) {
      car.shapeColor = "yellow";
      severity = "Average";
    }

    //Red = lethal deformation / very sever crash
    if(deformation > 180) {
      car.shapeColor = "red";
      severity = "Deadly";
    }

    textSize(25);
    fill("white");
    text("Lethality: " + severity, 450, 75);
  }

  drawSprites();
}