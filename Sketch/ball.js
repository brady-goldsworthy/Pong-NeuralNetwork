class Ball {
  constructor() {
    this.r = 10;
    this.y = height / 2;
    this.x = width / 2;

    this.x_speed = random([-4, 4 ]);
    this.y_speed = random([-4, 4 ]);
  }

//   checkLeft(leftPaddle) {
//     //console.log(leftPaddle);
//     if (((this.x - this.r) <= leftPaddle.x + leftPaddle.w) && ((this.y <= leftPaddle.y + (leftPaddle.h / 2)) && (this.y >= leftPaddle.y - (leftPaddle.h / 2)))) {
//       //console.log("Hit left");
//
//       if (this.x > leftPaddle.x) {
//         console.log("Hit Left");
//         console.log(this.x);
//         console.log(leftPaddle.x);
//         let diff = this.y - (leftPaddle.y - leftPaddle.h/2);
//         let angle = map(diff, 0, leftPaddle.h, radians(-45), radians(45));
//         this.x_speed = 5 * cos(angle);
//         this.y_speed = 5 * sin(angle);
//         this.x = leftPaddle.x + leftPaddle.w/2 + this.r;
//       }
//     }
// }

  checkLeft(leftPaddle) {
    //console.log(leftPaddle);
    if ((this.x - this.r <= leftPaddle.x + leftPaddle.w) && ((this.y <= leftPaddle.y + (leftPaddle.h / 2)) && (this.y >= leftPaddle.y - (leftPaddle.h / 2)))) {
      console.log("Hit Left");
      this.x_speed = -this.x_speed;
    }
  }

  checkRight(rightPaddle) {
    //console.log(leftPaddle);
    if ((this.x + this.r >= rightPaddle.x - rightPaddle.w) && ((this.y <= rightPaddle.y + (rightPaddle.h / 2)) && (this.y >= rightPaddle.y - (rightPaddle.h / 2)))) {
      console.log("Hit Right");
      this.x_speed = -this.x_speed;
    }
  }

  bounce() {
    if (true) {
      console.log("Bounced");
      this.x_speed = -5;
    }
  }

  isRightGoal(rightPaddle) {
      if(this.x > width - 3 && !((this.y <= rightPaddle.y + (rightPaddle.h / 2)) && (this.y >= rightPaddle.y - (rightPaddle.h / 2)))) {
        console.log("goal");
        this.reset();
        return true;
      }
      else {
        return false;
      }
  }

  reset() {
    console.log("reset");
    this.x = width / 2;
    this.y = random(0, height);

    this.x_speed = random([-4, 4 ]);
    this.y_speed = random([-4, 4 ]);
  }

  update() {
    if (this.x <= 3) {
      this.x_speed = -this.x_speed; //point for right paddle
    // }else if (this.x > width - 3) {
    //   this.goal(false); //point for left paddle
    // }
  }
    if (this.y <= 3 || this.y >= height - 3) {
      this.y_speed = -this.y_speed;
    }

    this.x += this.x_speed;
    this.y += this.y_speed;
  }

  show() {
    stroke(255);
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }



}
