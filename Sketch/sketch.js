let leftPaddle;
let numPaddles = 300;
let rightPaddles = [];
let slider;
let bestBrain;


function setup() {
  createCanvas(600,400);
  slider = createSlider(1, 10, 1);

  leftPaddle = new LeftPaddle();
  console.log(numPaddles);
  for (var i = 0; i < numPaddles; i++) {
    rightPaddles[i] = new RightPaddle();
  }
  //rightPaddle = new RightPaddle();
  ball = new Ball();
}

function draw() {

  if (rightPaddles.length === 0) {
    nextGeneration();
  }

  background(0);

  for (var n = 0; n < slider.value(); n++) {

    leftPaddle.update();

    let allMissed = true;
    for (var i = 0; i < rightPaddles.length; i++) {
      //console.log(rightPaddles[i]);
      rightPaddles[i].think(ball);
      rightPaddles[i].update();
      rightPaddles[i].show();
    }

    if ((ball.x + ball.r) >= width - 20) {
        for (var i = 0; i < rightPaddles.length; i++) {
          if ((ball.y > rightPaddles[i].y - (rightPaddles[i].h / 2)) && (ball.y < rightPaddles[i].y + (rightPaddles[i].h / 2))) {
              //console.log("Bounced");
              //console.log(ball.y + " -- " + (rightPaddles[i].y + rightPaddles[i].h / 2));
              ball.bounce();
              rightPaddles[i].score+= 10;
          }
          else {
            //console.log("splice");
            console.log("Died with score: " + rightPaddles[i].score);
            if (rightPaddles.length === 1) {
              bestBrain = rightPaddles[i].brain;
            }
            rightPaddles.splice(i,1);
          }
        }
    }

    // if (!allMissed) {
    //   ball.bounce();
    // }
    // else {
    //   //ball.isRightGoal(rightPaddle);
    // }

    ball.checkLeft(leftPaddle);
    ball.update();



    rect(50,50,0,0);

    leftPaddle.show();
    //rightPaddles[1].show();
    ball.show();

    textSize(40);
    text(leftPaddle.score, width/4, 45);
    //text(rightPaddle.score, (width/4)*3, 45);
  }
}

  function nextGeneration() {
    for (var i = 0; i < numPaddles; i++) {
      rightPaddles[i] = new RightPaddle(bestBrain);
    }
    ball.reset();
  }

function keyReleased() {
  leftPaddle.move(0);
  rightPaddles[0].move(0);
}

function keyPressed() {
  if (key === 'a') {
    leftPaddle.move(-10);
  }
  else if (key === 'z') {
    leftPaddle.move(10);
  }
  else if (key === 'k') {
    rightPaddles[0].move(-10);
  }
  else if (key === 'm') {
    rightPaddles[0].move(10);
  }
}
