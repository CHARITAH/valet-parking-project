canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_hieght = 100

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carx = 5;
cary = 225;

function add() {
		background_imgtag = new Image();
		background_imgtag.onload =uploadBackground;
		background_imgtag.src = background_image;
	
		greencar_imgtag = new Image();
		greencar_imgtag.onload = uploadgreencar;
		greencar_imgtag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag, carx, cary, greencar_width, greencar_hieght);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{  if (cary>=0) {
	cary = cary -10;
	console.log ("When up is clicked x = " + carx + "y = " + cary);
	uploadBackground();
	uploadgreencar();
}
	
}

function down()
{
	 if (cary<=500) {
        cary = cary +10;
        console.log ("When down is clicked x = " + carx + "y = " + cary);
        uploadBackground();
		uploadgreencar();
    }
}

function left()
{
	if (carx>=0) {
        carx = carx -10;
        console.log ("When left is clicked x = " + carx + "y = " + cary);
        uploadBackground();
		uploadgreencar();
    }
}

function right()
{
	 if (carx<=700) {
        carx = carx +10;
        console.log ("When right is clicked x = " + carx + "y = " + cary);
        uploadBackground();
		uploadgreencar();
    }
}
