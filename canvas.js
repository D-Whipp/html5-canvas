let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 300, 100);
c.fillRect(600, 300, 100, 400);
c.fillRect(800, 800, 200, 50);