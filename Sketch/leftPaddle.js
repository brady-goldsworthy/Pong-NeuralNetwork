class LeftPaddle {
  constructor() {
    this.w = 10;
    this.h = 100;
    this.y = height/2;
    this.y_dist = 0;
    this.x = this.w;
    this.points = 0;
    this.score = 0; //Neural network scored
    this.fitness = 0;
  }

  update() {
    this.y += this.y_dist;
    this.y = constrain(this.y, this.h/2, height-this.h/2);
  }

  move(dist) {
    this.y_dist = dist;
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  addPoints() {
    this.points++;
  }


}
