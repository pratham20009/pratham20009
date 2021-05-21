var bgImg,tom,tomImg1,tomImg2,tomImg3;
var jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bgImg=loadImage("images/garden.png");
    tomImg1=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}


function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(870,500);
    tom.addAnimation("tomsleeping",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(200,550);
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale=0.1;
}

function draw() {

    background(bgImg);
    
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomlastImage",tomImg3);
        tom.changeAnimation("tomlastImage");
        tom.scale=0.2;
        jerry.addAnimation("jerrylastImage",jerryImg3);
        jerry.changeAnimation("jerrylastImage");
        jerry.scale=0.1;
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomRunning",tomImg2);
        tom.changeAnimation("tomRunning");
        jerry.addAnimation("jerryTeasing",jerryImg2);
        jerry.frameDelay=25;
        jerry.changeAnimation("jerryTeasing")
    }
}
