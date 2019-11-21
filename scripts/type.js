function Typed() {
  this.time = 0;
  this.indexTimer = 0;
  this.index = 0;
  this.fontSize = 30;
  this.draw = function(words, x, y, blinkTime, typeTime) {
    this.time++;
    this.indexTimer++;

    let splitWords = split(words, '');

    let newWord ='';
    

    for(let i = 0; i < this.index; i++){
      newWord += splitWords[i];
    }


    background(255);
    textSize(this.fontSize);
    const c = color(234, 89, 62);
    fill(c);
    stroke(c);
    let sWidth = textWidth(newWord);
    text(newWord, x, y);
    
    
    this.time %= (blinkTime * 2);
    if(this.time < blinkTime ){
      line(x + sWidth + 5, y - this.fontSize, x + sWidth + 5, y + 10);
    }
    if(this.indexTimer % (typeTime) == 0){
      if(this.index < splitWords.length){
        this.index++;
      }
    }

    if(keyIsDown(UP_ARROW)){
      this.increaseFontSize();
    }
    if(keyIsDown(DOWN_ARROW)){
      this.decreaseFontSize();
    }
  }

  this.increaseFontSize = function() {
    if(this.fontSize < 50){
      this.fontSize+=2;
    }
  }
  this.decreaseFontSize = function() {
    if(this.fontSize > 18){
      this.fontSize-=2;
    }
  }  

}