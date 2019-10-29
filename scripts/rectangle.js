function Rectangle(x, y) {
  this.x = x;
  this.y = y;
  this.c = color(219, 112, 147);
  this.update = function(){
    fill(this.c);
    stroke(this.c);
    rect(this.x,this.y,10,10);
    this.x++;
    // this.y++; 
    // this.y %= 250;
    this.x %= windowWidth;
  }
}