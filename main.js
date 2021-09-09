var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;
 block_y_rr = 1;
 block_y_gr = 220;
 block_y_yr = 360;
 block_y_pr = 600;
 block_y_br = 650;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_x,
            left:block_y
        });
        canvas.add(block_image_object);
    });
}

function new_image_rr(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_x,
            left:block_y_rr
        });
        canvas.add(block_image_object);
    });
}

function new_image_gr(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_x,
            left:block_y_gr
        });
        canvas.add(block_image_object);
    });
}

function new_image_yr(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_x,
            left:block_y_yr
        });
        canvas.add(block_image_object);
    });
}

function new_image_pr(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_x,
            left:block_y_pr
        });
        canvas.add(block_image_object);
    });
}

function new_image_br(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_x,
            left:block_y_br
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);


if(keyPressed == '82'){
	new_image_rr('rr1.png');
	console.log("r");
}

if(keyPressed == '71'){
	new_image_gr('gr.png');
	console.log("g");
}

if(keyPressed == '89'){
	new_image_yr('yr.png');
	console.log("y");
}

if(keyPressed == '80'){
	new_image_pr('pr.png');
	console.log("p");
}

if(keyPressed == '66'){
	new_image_br('br.png');
	console.log("b");
}

}

