var blob;
var blobs = [];
var score = 0;
function setup() {
  createCanvas(displayWidth, displayHeight);
  blob = new Blob(width/2, height/2, 60);
  for(var i = 0; i < 200; i++) {
    var x = random(-width, width*2);
    var y = random(-height, height*2);
    blobs[i] = new Blob(x, y, 16);
  }
}
function draw() {
  background(0);
  translate(width/2-blob.pos.x, height/2-blob.pos.y);
  for(var i = 0; i < blobs.length; i++) {
    blobs[i].show();
    if(blob.eats(blobs[i])) {
      blobs.splice(i, 1);
      blob.grow();
      score += 1;
    }
  }
  blob.show();
  blob.update();
  translate(blob.pos.x, blob.pos.y);
  textSize(30);
  fill(255,0,0);
  text(score, 0, 0);
}
