/**** Context ********/
var context = document.getElementById("my-canvas").getContext("2d");


/******* Create a rectangle and fill with color ************************/
context = drawing.context
context.fillStyle="#FF0000";
context.fillRect(300, 400, 5,5);

/******* Create a colored line ************************/
context.beginPath();
context.moveTo(from.x, from.y);
context.lineTo(to.x, to.x);
context.lineWidth = 10;
context.strokeStyle = '#ff0000';
context.stroke();

