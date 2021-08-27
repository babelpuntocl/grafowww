let b = document.getElementById("celda");
let w = b.clientWidth;
let h = b.clientHeight;




const c1 = ( canvas1 ) => {
  canvas1.setup = () => {
    canvas1.createCanvas(w,h);
  };
  canvas1.draw = () => {
    canvas1.background(0);
    canvas1.ellipse(w/2,h/2,100,100);
  };
};

let myp5c1 = new p5(c1,document.getElementById('p5Canvas0'));




let x = 1;
let y = 1;
let easing = 0.2;

const c2 = ( canvas2 ) => {
  canvas2.setup = () => {
    canvas2.createCanvas(w,h);
    canvas2.fill(0)
  };
  canvas2.draw = () => {
    canvas2.background(255);
    let targetX = canvas2.mouseX;
    let dx = targetX - x;
    x += dx * easing;
    let targetY = canvas2.mouseY;
    let dy = targetY - y;
    y += dy * easing;
    canvas2.ellipse(x, y, 50,50);
  };
};

let myp5c2 = new p5(c2,document.getElementById('p5Canvas1'));
