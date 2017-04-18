var mic, fft;

function setup() {
   createCanvas(windowWidth,windowHeight);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   mic.start();
}

function draw() {
   background(0);
    micLevel = mic.getLevel();
  
   var spectrum = fft.analyze();

if ((micLevel*190)>30){
  o=0;
}else{
  o=(255,random(255),random(255));

}
   beginShape();
   fill(o);
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i]-60, 0, 255, height, 10) );
   }
   endShape();
   
   text(floor(micLevel*190) ,mouseX,mouseY);
}
