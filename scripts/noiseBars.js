function NoiseBars(){
  this.bars = [];

  this.create = function(n, x, y, step, spaceBetween){
    this.bars = [];
    let ind = width/(step+spaceBetween);
    for(let i = 0; i < ind; i++){
      this.bars.push(new Bar(x, y, step));
      x = x + step + spaceBetween;
    }
  }

  this.update = function(){
    background(255);
    for (let i = 0; i < this.bars.length; i++) {
      this.bars[i].draw();
    }
  }
}

function Bar(x, y, thickness){
  this.x = x;
  this.y = y;
  this.thickness = thickness;
  this.h = 50;

  this.mx = 0;

  this.noiseScale = 0.05;

  this.draw = function(){
    fill(199,213,223);
    

    this.h = noise((this.x + this.mx) * this.noiseScale, (this.y + this.mx) * this.noiseScale);
    //text(this.h, 10,10+ this.x);
    this.mx+=0.1;
    this.h *= 250;

    rect(this.x, this.y, this.thickness, this.h-10);
    fill(234, 89, 62);
    rect(this.x, this.h, this.thickness, height-this.h);
  }
}