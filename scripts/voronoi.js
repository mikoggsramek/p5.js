function Voronoi() {
  this.points = [];
  this.colours = [];
  this.n;
  this.range = 30;

  this.generate = function (numberOfPoints){
    this.points = [];
    this.colours = [];
    this.n = numberOfPoints;
    for(let i = 0; i < this.n; i++){
      this.points[i] = createVector(random(width), random(height));
      let base =  random(175, 225);
      this.colours[i] = color(base, base + random(-this.range, this.range), base + random(-this.range, this.range));
    }
  }
  this.addPoint = function (x, y) {
    this.points.push(createVector(x,y));
    let base = random(175, 225);
    this.colours.push(color(base, base + random(-this.range, this.range), base + random(-this.range, this.range)));
    this.n++;
    this.draw();
  }


  this.draw = function () {
    background(255);
    let p;
    let scale = 5;
    let closest;
    let d;
    let cD
    for(let x = 0; x < width; x+=scale){
      for (let y = 0; y < height; y += scale){
        p = createVector(x,y);
        d = width*2;
        for (let i = 0; i < this.n; i++) {
          cD = this.points[i].dist(p);
          if(cD <= d){
            d = cD;
            closest = i;
          }
        }
        fill(this.colours[closest]);
        noStroke();
        rect(x, y, scale, scale);
      }
    }
    for (let i = 0; i < this.n; i++) {
      fill(0);
      noStroke();
      ellipse(this.points[i].x, this.points[i].y, 4, 4);
    }
  }

}