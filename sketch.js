var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var World = Matter.World;
var Composite = Matter.Composite;

var ground,platform, platform1, box1, box2;
var engine, world;
var backgroundImage;

function preload(){
    backgroundImage = loadImage('sprites/bg7.jpg');
}

function setup(){
    var canvas = createCanvas(900,600);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height, width, 20);
    //platform = new Ground(100, 500, 200, 200);

    pumpkin = new Pumpkin(100, 100, 100, 100);

    ghost1 = new Ghost(600, 500, 50, 50);
    ghost2 = new Ghost(800, 500, 50, 50);
    bear1 = new Bear(700, 500, 40, 40);
    log1 = new Log(700, 480, 300, PI/2);

    ghost3 = new Ghost(600, 400, 50, 50);
    ghost4 = new Ghost(800, 400, 50, 50);
    bear2 = new Bear(700, 400, 40, 40);
    log2 = new Log(700, 380, 300, PI/2);

    bear3 = new Bear(700, 300, 50, 50);
    log3 = new Log(650, 300, 100, PI/7);
    log4 = new Log(750, 300, 100, -PI/7);

    sling = new Slingshot({x: 300, y: 300}, pumpkin.body);
}

function draw(){
    background(0);
    imageMode(CENTER);
    image (backgroundImage, width/2, height/2, width, height)
    Engine.update(engine);

    ground.display();
    //platform.display();
    pumpkin.display();

    ghost1.display();
    ghost2.display();
    bear1.display();
    log1.display();

    ghost3.display();
    ghost4.display();
    bear2.display();
    log2.display();

    bear3.display();
    log3.display();
    log4.display();

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pumpkin.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    sling.fly();
}