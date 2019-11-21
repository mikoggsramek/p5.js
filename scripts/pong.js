function Pong() {
  this.paddleHeight = 70;
  this.paddleWidth = 15;
  this.paddleSpeed = 5;
  this.paddleXOffset = 50;

  this.paddleOne = {
    x: this.paddleXOffset,
    y: height/2,
    points: 0
  }
  this.paddleTwo = {
    x: width - this.paddleXOffset,
    y: height/2,
    points: 0
  }
  
  this.ball = {
    x: width/2,
    y: height/2,
    xDir: -1,
    yDir: -1,
    radius: 40,
    speed: 2,
    reset: function(dir){
      this.x = width/2,
      this.y = height/2,
      this.xDir = dir,
      this.yDir = -1,
      this.speed++;
      if(this.speed > 5){
        this.speed = 5;
      }
    },
    update: function(){
      this.x += this.xDir * this.speed;
      this.y += this.yDir * this.speed;
      //Left side = right paddle scores
      if (this.x <= 0 + this.radius/2){
        pong.paddleTwo.points++;
        this.reset(-1);
      }else if(this.x >= windowWidth - this.radius/2){
        pong.paddleOne.points++;
        this.reset(1);
      }
      if (this.y <= 0 + this.radius/2 || this.y >= height - this.radius/2){
        this.yDir *= -1; 
      }

      // if it hits the right side of paddle 1, then change xDir *= -1
      // if this x is less than the (x + width) of the paddle AND
      // if this y is less than (y + height) of the paddle AND
      // if this y is greater than (y - height) of the paddle
      if(this.x - this.radius / 2 <= pong.paddleOne.x + pong.paddleWidth / 2){
        if(this.y >= pong.paddleOne.y - pong.paddleHeight / 2){
          if(this.y <= pong.paddleOne.y + pong.paddleHeight / 2){
            this.xDir *= -1;
            if(keyIsDown(87)){
              this.yDir -= pong.paddleSpeed * 0.25;
              this.xDir += 0.1;
            }
            if(keyIsDown(83)){
              this.yDir += pong.paddleSpeed * 0.25;
              this.xDir += 0.1;
            }
          }
        }
      }

      if(this.x + this.radius / 2 >= pong.paddleTwo.x - pong.paddleWidth / 2){
        if(this.y >= pong.paddleTwo.y - pong.paddleHeight / 2){
          if(this.y <= pong.paddleTwo.y + pong.paddleHeight / 2){
            this.xDir *= -1;
            if(keyIsDown(UP_ARROW)){
              this.yDir -= pong.paddleSpeed * 0.25;
              this.xDir -= 0.1;
            }
            if(keyIsDown(DOWN_ARROW)){
              this.yDir += pong.paddleSpeed * 0.25;
              this.xDir -= 0.1;
            }
          }
        }
      }
    }
  }

  this.update = function(){
    background(255);

    //Right Paddle
    if(keyIsDown(UP_ARROW)){
      if(this.paddleTwo.y - this.paddleHeight/2 > 0){
        this.paddleTwo.y-=this.paddleSpeed;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      if(this.paddleTwo.y + this.paddleHeight/2 < height){
        this.paddleTwo.y+=this.paddleSpeed;
      }
    }

    //Left Paddle
    //87 (W) & 83 (S) refer to javascrip keycodes http://keycode.info/ has access to them
    if(keyIsDown(87)){
      if(this.paddleOne.y - this.paddleHeight/2 > 0){
        this.paddleOne.y-=this.paddleSpeed;
      }
    }
    if(keyIsDown(83)){
      if(this.paddleOne.y + this.paddleHeight/2 < height){
        this.paddleOne.y+=this.paddleSpeed;
      }
    }

    //update the BALL
    this.ball.update();

    //Make sure the paddles stay within the bounds of the screen
    this.paddleTwo.x = width - this.paddleXOffset;

    rectMode(CENTER);
    //Colour them JUNO
    fill(234,89,62);
    noStroke();
    //Draw them
    rect(this.paddleOne.x, this.paddleOne.y, this.paddleWidth, this.paddleHeight);
    rect(this.paddleTwo.x, this.paddleTwo.y, this.paddleWidth, this.paddleHeight);

    ellipseMode(CENTER);
    fill (74,69,92);
    ellipse(this.ball.x, this.ball.y, this.ball.radius);
    //Score text
    text(this.paddleOne.points + " | " + this.paddleTwo.points, width/2, 20);
  }
}