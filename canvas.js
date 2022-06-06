let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(200, 200, 300, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(600, 300, 100, 400);
c.fillStyle = 'rgba(245, 4, 255, 0.5)';
c.fillRect(650, 230, 400, 40);
c.fillStyle = 'rgba(0, 234, 255, 0.5)';
c.fillRect(50, 40, 110, 40);
// c.fillRect(800, 800, 200, 50);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = 'black';
c.stroke();

// Arc
// c.beginPath();
// c.arc(450, 450, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.fillStyle = 'rgba(0, 234, 255, 0.5)';
// c.stroke();

for (let i = 0; i < 3; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'red';
  c.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 0.9)';
  c.stroke();
}

// c.beginPath();
// c.moveTo(75, 25);
// c.quadraticCurveTo(25, 25, 25, 62.5);
// c.quadraticCurveTo(25, 100, 50, 100);
// c.quadraticCurveTo(50, 120, 30, 125);
// c.quadraticCurveTo(60, 120, 65, 100);
// c.quadraticCurveTo(125, 100, 125, 62.5);
// c.quadraticCurveTo(125, 25, 75, 25);
// c.stroke();

// c.beginPath();
// c.moveTo(75, 40);
// c.bezierCurveTo(75, 37, 70, 25, 50, 25);
// c.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// c.bezierCurveTo(20, 80, 40, 102, 75, 120);
// c.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// c.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// c.bezierCurveTo(85, 25, 75, 37, 75, 40);
// c.fill();

// function draw() {
//   var canvas = document.querySelector('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');

//     for (var i = 0; i < 4; i++) {
//       for (var j = 0; j < 3; j++) {
//         ctx.beginPath();
//         var x = 25 + j * 50; // x coordinate
//         var y = 25 + i * 50; // y coordinate
//         var radius = 20; // Arc radius
//         var startAngle = 0; // Starting point on circle
//         var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
//         var counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

//         ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

//         if (i > 1) {
//           ctx.fill();
//         } else {
//           ctx.stroke();
//         }
//       }
//     }
//   }
// }
// draw();
