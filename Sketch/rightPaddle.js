class RightPaddle {
  constructor(brain) {
    this.w = 10;
    this.h = 100;
    this.x = width - this.w;
    this.y = height/2;
    this.y_dist = 0;
    this.points = 0;
    this.score = 0;
    this.fitness = 0;

    if (brain) {
      this.brain = brain.copy();
      brain.mutate(0.1);
    }
    else {
      this.brain = new NeuralNetwork(3, 8, 3);
    }
  }

  think(ball) {
    let inputs = [];
    inputs[0] = this.y;
    inputs[1] = ball.x;
    inputs[2] = ball.y;

    let output = this.brain.predict(inputs);
    if(output[0] > output[1] && output[0] > output[2]) {
      this.up();
    }
    else if (output[1] > output[0] && output[1] > output[2]) {
      this.down();
    }
    else {
      this.stay();
    }
  }

  mutate() {
    this.brain.mutate(.3)
  }

  update() {
    this.y += this.y_dist;
    this.y = constrain(this.y, this.h/2, height-this.h/2);
  }

  move(dist) {
    this.y_dist = dist;
  }

  up() {
    this.move(-10);
  }

  down() {
    this.move(10);
  }

  stay() {
    this.move(0);
  }

  show() {
    stroke(255);
    fill(255, 100);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  addPoints() {
    this.points++;
  }


}
