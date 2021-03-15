var Rival, wall, spikes, lava, Goku;
 var RivalImg, WallImg, LavaImg, GokuImg,bgImg;
 var WallGroup, Damage;
 function preload() {
       RivalImg = loadImage("../tick-tock-t-main/g/Rival.png");
       WallImg = loadImage("../tick-tock-t-main/g/Wall.png");
       GokuImg = loadImage("../tick-tock-t-main/g/Goku.png");
       bgImg = loadImage("../tick-tock-t-main/g/bg.png");

     } 
function setup() {
     createCanvas(1800,300) 
     //Rival = createSprite(100, 200, 10, 10)
    // Rival.addImage("rival",RivalImg);
     //Rival.scale = 0.3

     WallGroup = new Group()

     Goku = createSprite(100,200,10,10)
     Goku.addImage("Imggoku",GokuImg)
     Goku.scale = 0.3

     Damage = 100
      } 
 function draw() { 
     background(bgImg);

     spawnWall();
     PlayerControl();
     if(Goku.isTouching(WallGroup)) {
         Damage = Damage - 5
         WallGroup.destroyEach()
     }
      drawSprites();
      textSize(20)
      text(Damage,50,50)
      
         }
function spawnWall(){
     if(frameCount%80 === 0){
     var n = Math.round(random(1,2))
    console.log(n)
    if(n == 1){
        y = 10
    }
    else{
        y = 290 }
    wall = createSprite(200,y,300,50)
    wall.lifetime =  60
    wall.addImage("addWall",WallImg)
    wall.scale = 1.4
    WallGroup.add(wall);
    }


}

function PlayerControl(){
    if(keyDown("d")||keyDown("D") ){
        Goku.x = Goku.x+10

    }

    if(keyDown("a")||keyDown("A")) {
        Goku.x = Goku.x-10
    }
}