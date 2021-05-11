canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width= 100;
car1_height= 90;
car1_x= 10;
car1_y= 10;
car1_image= "Car1.png";

car2_width= 100;
car2_height= 90;
car2_x= 10;
car2_y= 100;
car2_image= "Car2.png";

background_image= "CanvasBG.jpg";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src= car1_image;

    car2_imgTag= new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src= car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyEntered= e.keyCode;
    console.log(keyEntered);

    if (keyEntered==38){
        car1up();
        console.log("up");
    }
    if (keyEntered==40){
        car1down();
        console.log("down");
    }
    if(keyEntered==37){
        car1left();
        console.log("left");
    }
    if(keyEntered==39){
        car1right();
        console.log("right");
    }

    if(keyEntered==87){
        car2up();
        console.log("w-up");
    }
    if(keyEntered==83){
        car2down();
        console.log("s-down");
    }
    if(keyEntered==65){
        car2left();
        console.log("a-left");
    }
    if(keyEntered==68){
        car2right();
        console.log("d-right");
    }

    if(car1_x>700){
        console.log("White Car Won!!")
        document.getElementById("game_stats").innerHTML= "Game Status- White Car Won!!"
    }
    
    if(car2_x>700){
        console.log("Pink Car Won!!")
        document.getElementById("game_stats").innerHTML= "Game Status- Pink Car Won!!"
    }
}

function car1up(){
    if(car1_y>=0){
        car1_y= car1_y-10;
        console.log("y "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2up(){
    if(car2_y>=0){
        car2_y= car2_y-10;
        console.log("y "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1down(){
    if(car1_y<=500){
        car1_y= car1_y+10;
        console.log("y "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2down(){
    if(car2_y<=500){
        car2_y= car2_y+10;
        console.log("y "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1left(){
    if(car1_x>=0){
        car1_x= car1_x-10;
        console.log("x "+car1_x);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2left(){
    if(car2_x>=0){
        car2_x= car2_x-10;
        console.log("x "+car2_x);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1right(){
    if(car1_x<=700){
        car1_x= car1_x+10;
        console.log("x "+car1_x);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2right(){
    if(car2_x<=700){
        car2_x= car2_x+10;
        console.log("x "+car2_x);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}