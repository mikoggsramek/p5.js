function Ball(x, y, bounceFX){
  this.x = x;
  this.y = y;
  this.dir =0;//= random(4);
  this.xDir = 0.1 + random(3);
  this.yDir = this.xDir;
  this.c = color(219, 112, 147);
  this.soundfx = bounceFX;

  this.size = 10;
  
  this.update = function(){
    fill(this.c);
    stroke(this.c);
    ellipse(this.x, this.y, this.size, this.size);
    
    this.x += this.xDir;
    this.y += this.yDir;

    if (this.x <= 0 + this.size/2 || this.x >= windowWidth - this.size/2){
     this.xDir *= -1; 
     if(this.soundfx != undefined){
      this.soundfx.play();
     }
    }
    if (this.y <= 0 + this.size/2 || this.y >= 250 - this.size/2){
     this.yDir *= -1; 
      if (this.soundfx != undefined) {
        this.soundfx.play();
      }
    } 
  }
  this.randomize = function(){
    this.x = random(15,windowWidth-15);
    this.y = random(15,235);
  }
}
