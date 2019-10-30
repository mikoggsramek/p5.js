

function Bokeh(n) {
  this.amount = n;
  this.bokehs = [];
  this.create = function(){
    for(let i = 0; i < this.amount; i++){
      let x = random(width);
      let y = random(height);
      this.bokehs.push(new individualBokeh(x,y));
    }
  }
  this.update = function() {
    //background(230);
    for(let i = 0; i <this.bokehs.length; i++){
      this.bokehs[i].draw();
    }
  }

}

function individualBokeh(x,y){
  this.point = createVector(x,y)
  this.scale = random(20,90);
  this.maxScale = this.scale+random(10,20);
  this.minScale = this.scale-random(10,20);
  this.scaleDir = 1;
  this.scaleSpeed = 0.1;
  this.d;
  this.target = createVector(x,y);
  this.possibleDistance = 25;

  this.draw = function(){
    if(this.point.dist(this.target) < 0.2){
      let v2 = this.point.copy();
      this.target = v2.add(createVector(random(-this.possibleDistance, this.possibleDistance), random(-this.possibleDistance, this.possibleDistance)));
      if(this.target.x > width){this.target.x = width;}
      if(this.target.x < 0){this.target.x = 0;}
      if(this.target.y > height){this.target.y=height}
      if(this.target.y < 0){this.target.y=0;}
    }else{
      this.point = p5.Vector.lerp(this.point, this.target, 0.01);
    }
    
    if(this.scaleDir == 1){
      this.scale += this.scaleSpeed;
      if(this.scale >= this.maxScale){
        this.scaleDir*=-1;
      }
    }else {
      this.scale -= this.scaleSpeed;
      if (this.scale <= this.minScale) {
        this.scaleDir *= -1;
      }
    }

    this.d = this.point.dist(createVector(mouseX,mouseY));
    fill(252, 170, 43, 255 - this.d);
    noStroke();
    ellipse(this.point.x  , this.point.y, this.scale, this.scale);
    //this.drawLine();
  }
  this.drawLine = function(){
    stroke(255, 0, 0);
    fill(255, 0, 0);
    line(this.point.x, this.point.y, this.target.x, this.target.y);
  }
}