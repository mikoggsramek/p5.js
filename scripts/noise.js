function noiseObject(x,y, color, scale) {
  this.noiseScale = scale;
  this.mx = x;
  this.my = y;
  this.c = color;

  this.update = function () {
    //background(255);

    //let c = color(255, 0, 0, 80);




    if (winMouseX <= 0 || winMouseY > height) {
      this.mx++;
      this.my++;
    } else {
      this.mx = mouseX;
      this.my = mouseY;
    }

    beginShape();
    let noiseVal;
    for (let x = 0; x < width; x++) {
      noiseVal = noise((this.mx + x) * this.noiseScale, this.my * this.noiseScale);
      stroke(noiseVal * 200);
      vertex(x, noiseVal * height / 2);
      // vertex(x / 2, noiseVal * height / 2);
    }
    // vertex(width/2, noiseVal*height / 2);
    // vertex(width, height / 2);
    vertex(width, height);
    vertex(0, height);

    stroke(this.c);
    fill(this.c);
    endShape(CLOSE);
  }
}