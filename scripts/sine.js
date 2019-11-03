function Sine (){


  // y = A * sin(w * t + φ)
  // A = Amplitude of the Wave 
  // ω = the angular frequency, specifies how many oscillations occur in a unit time interval, in radians per second 
  // φ, the phase, 
  // t = ?
  this.t = 0;
  this.Draw = function(a, w, p, n, drawLine) {
    background(255);
    this.t++;
    if(drawLine){
      for(let x = 0; x < innerWidth; x++){
        let y = a * Math.sin(w * (x + this.t) + p);
        stroke(50,50,200);
        line(x, y * 50 + 100, x, height);
      }
    }

    for(let i = 0; i < n; i += 1){
      let x = (i * width/n) + (width/n/2);
      let y = a * Math.sin(w * (x + this.t) + p);
      stroke(255,0,0);
      fill(255,0,0);
      ellipse(x, y * 50 + 100, 10, 10);
    }
  }

}