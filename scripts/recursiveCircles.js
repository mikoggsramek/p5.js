function RecursiveCircles (n, s) {
  this.numberOfCircles = n;
  this.startingSize = s;


  this.Draw = function () {
    fill(0);
    this.DrawRecursive(this.numberOfCircles, this.startingSize);
  }

  this.DrawRecursive = function (n, s){
    if(n == 0) {
      ellipse(10,10,s,s);
    }else {
      this.DrawRecursive(--n, --s);
      ellipse(width * n/this.numberOfCircles,10,s,s);
      return;
    }
  }

}