var Rival, wall, spikes, lava;
var RivalImg, WallImg, LavaImg;

function preload() {
    var RivalImg = loadImage("../tick-tock-t-main/g/Rival.png")
}

function setup() {
    createCanvas(600,600)
    //Rival = createSprite(200, 200, 10, 10)
    image(RivalImg, 0, 0)

}

function draw() {
    background("red")
    drawSprites()
}