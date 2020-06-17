var sun,
    mercury,
    venus,
    mars,
    earth,
    jupiter,
    saturn,
    uranus,
    neptune;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload() {
    sunImg = loadImage("u.png");
    mercuryImg = loadImage("me.png");
    venusImg = loadImage("ve.png");
    earthImg = loadImage("e.png");
    marsImg = loadImage("m.png");
    jupeterImg = loadImage("ju.png");
    saturnImg = loadImage("s.jpg");
    uranusImg = loadImage("n.jpg");
    neptuneImg = loadImage("ep.png");

}

function setup() {
    createCanvas(800, 800);
    sun = createSprite(0, 0);
    sun.addImage("sun", sunImg);
    sun.scale = 0.2;
    sun.setCollider("circle", -85, -60, 140);
    //sun.debug = true;

    mercury = createSprite(70, 50);
    mercury.addImage("mercury", mercuryImg);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
    //mercury.debug = true;

    venus = createSprite(210, 60);
    venus.addImage("venus", venusImg);
    venus.scale = 0.15;

    earth = createSprite(150, -18);
    earth.addImage("earth", earthImg);
    earth.scale = 0.22;

    mars = createSprite(30, 220);
    mars.addImage("mars", marsImg);
    mars.scale = 0.2;

    jupiter = createSprite(-180, 210);
    jupiter.addImage("jupiter", jupeterImg);
    jupiter.scale = 0.3;

    saturn = createSprite(340, -30);
    saturn.addImage("saturn", saturnImg);
    saturn.scale = 0.3;

    uranus = createSprite(220, 350);
    uranus.addImage("uranus", uranusImg);
    uranus.scale = 0.2;

    neptune = createSprite(-340, -320);
    neptune.addImage("neptune", neptuneImg);
    neptune.scale = 0.1;

}

function draw() {
    background(0);


    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if (sun.collide(mercury)) {
        mercury.destroy();
    }
    if (sun.collide(venus)) {
        venus.destroy();
    }
    if (sun.collide(earth)) {
        earth.destroy();
    }
    if (sun.collide(mars)) {
        mars.destroy();
    }
    if (sun.collide(jupiter)) {
        jupiter.destroy();
    }
    if (sun.collide(saturn)) {
        saturn.destroy();
    }
    if (sun.collide(uranus)) {
        uranus.destroy();
    }
    if (sun.collide(neptune)) {
        neptune.destroy();
    }

    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.01;
    }
    drawSprites();
}