var Game = require('gameloop');
var Mouse = require('./index');

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

var game = new Game({
  renderer: canvas.getContext('2d')
});

game.width = canvas.width = 800;
game.height = canvas.height = 400;

var mouse = new Mouse(game, canvas);

mouse.on('click', function(loc){
	console.log('click at: ', loc);
});

mouse.on('mousedown', function(loc){
  console.log('mousedown at: ', loc);
});

mouse.on('mouseup', function(loc){
  console.log('mouseup at: ', loc);
});

mouse.on('mousemove', function(loc){
  console.log('mousemove at: ', loc);
});