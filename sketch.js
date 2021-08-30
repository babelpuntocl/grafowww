let b = document.getElementById("celda");
let w = b.clientWidth;
let h = b.clientHeight;


const c1 = ( canvas1 ) => {
  canvas1.setup = () => {
    canvas1.createCanvas(w,h);
    canvas1.noStroke();
    canvas1.fill(255,255,255,50);
    canvas1.background(0);
  };
  canvas1.draw = () => {
    canvas1.ellipse(canvas1.mouseX, canvas1.mouseY, 25, 25);
  };
  canvas1.mousePressed = () => {
  // set canvas background will "clear" the canvas
    canvas1.background(0);
  };
};

let myp5c1 = new p5(c1,document.getElementById('p5Canvas1'));




let x = 1;
let y = 1;
let easing = 0.2;

const c2 = ( canvas2 ) => {
  canvas2.setup = () => {
    canvas2.createCanvas(w,h);
    canvas2.fill(0)
    canvas2.rectMode(canvas2.CENTER)
  };
  canvas2.draw = () => {
    canvas2.background(200);
    let targetX = canvas2.mouseX;
    let dx = targetX - x;
    x += dx * easing;
    let targetY = canvas2.mouseY;
    let dy = targetY - y;
    y += dy * easing;
    canvas2.rect(x, y, 50,50);
  };
};

let myp5c2 = new p5(c2,document.getElementById('p5Canvas2'));








const c3 = ( canvas3 ) => {
  canvas3.setup = () => {
    canvas3.createCanvas(w,h);
    canvas3.fill(0);
    canvas3.background(255);
    canvas3.frameRate(15);
  };
  canvas3.draw = () => {
    let X = canvas3.random(0,canvas3.width);
    let Y = canvas3.random(0, canvas3.height);
    let Z = canvas3.random(15,40);
    canvas3.text("random", X, Y);
    canvas3.textSize(Z);
  };
  canvas3.mousePressed = () => {
  // set canvas background will "clear" the canvas
    canvas3.background(255);
  };
};

let myp5c3 = new p5(c3,document.getElementById('p5Canvas3'));








const c4 = ( canvas4 ) => {
  var startTime = 0;
  var ellipseSize = 50;
  var tiempoBase = 500;
  // canvas4.preload = () => {
  //   img = canvas4.loadImage('pics/image.jpg');
  // };
  canvas4.setup = () => {
    canvas4.createCanvas(w,h);
    canvas4.ellipseMode(canvas4.CORNER);
    canvas4.frameRate(3);
  };
  canvas4.draw = () => {
    canvas4.background(255);
    var randWidth = canvas4.random(0,canvas4.width);
    var randHeight = canvas4.random(0,canvas4.height);
    //canvas4.image(img, canvas4.width/2, canvas4.height/2, img.width, img.height);
    if (canvas4.millis() - startTime > tiempoBase) {
    	 canvas4.ellipse(randWidth, randHeight, ellipseSize, ellipseSize);
    };
    if (canvas4.millis() - startTime  > tiempoBase*2) {
    	 canvas4.ellipse(randWidth, randHeight, ellipseSize, ellipseSize);
    };
    if (canvas4.millis() - startTime  > tiempoBase*3) {
    	 canvas4.ellipse(randWidth, randHeight, ellipseSize, ellipseSize);
    };
    if (canvas4.millis() - startTime > tiempoBase*4) {
    	 startTime = canvas4.millis();
    };
  };
};

let myp5c4 = new p5(c4,document.getElementById('p5Canvas4'));








// const cXX = ( canvasXX ) => {
//   canvasXX.setup = () => {
//     canvasXX.createCanvas(w,h);
//   };
//   canvasXX.draw = () => {
//     canvasXX.background(255,0,0);
//   };
// };
//
// let myp5cXX = new p5(cXX,document.getElementById('p5CanvasXX'));
