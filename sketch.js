const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  stand1 = new Division(5,680, 10, 220);
  stand2 = new Division(80, 680, 10,220);
  stand3 = new Division(170, 680, 10, 220);
  stand4 = new Division(250, 680, 10, 220);
  stand5 = new Division(330, 680, 10, 220);
  stand6 = new Division(410, 680, 10, 220);
  stand7 = new Division(490, 680, 10, 220);
  stand8 = new Division(570, 680, 10, 220);
  stand9 = new Division(650, 680, 10, 220);
  stand10 = new Division(730, 680, 10, 220);
  stand11 = new Division(810, 680, 10, 220);
  stand12 = new Division(890, 680, 10, 220);
    for (var j = 30; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 30; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  /*textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);*/
  Engine.update(engine);
  ground.display();
  stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   stand9.display();
   stand10.display();
   stand11.display();
   stand12.display();
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
 
    
 
 }
 
 

  /*if(gameState === START){
    division.display=false;
ground.display=false;
background("yellow");
textFont("bold")
fill("darkblue");
textSize(40);
text("Welcome to Plinko game!!",400,90)
textSize(30);
textFont("bold")
text("The rules for proceeding the game are as follows.....",300,150)
textSize(28);
textFont("italics")
fill("darkred");
text("1)Click on the screen where you wanted to drop the ball.....",200,220)
text("2)Prevent multiple clicks on the screen.",200,280)
text("3)This game can also played by two or more players.",200,340)
text("4)For multiplayer game press M .",200,400)
text("5)For singleplayer game press S .",200,460)
textSize(40);
fill("darkblue");
textFont("bold")
textFont("italics")
text(" This game is developed by SHRISTI RATHORE.....",220,550)


/*if(keyDown("s")){
  gamestate = "singleplayer";*/
//}
  
  