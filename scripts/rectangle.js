function Rectangle(x, y) {
  this.x = x;
  this.y = y;
  this.c = color(234, 89, 62);
  this.update = function(){
    fill(this.c);
    stroke(this.c);
    rect(this.x,this.y,50,50);
    this.x++;
    // this.y++; 
    // this.y %= 250;
    this.x %= windowWidth;
  }
}