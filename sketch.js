const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var base;
var div1,div2,div3,div4,div5,div6,div7,div8,div9,div10;
var particles=[];
var plinkos=[];
var score=0;
var p=null;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  base = new Ground(20,690,10000,20);


	div1 = new Ground(10,690,10,350);
	div2 = new Ground(100,690,10,350);
	div3 = new Ground(190,690,10,350);
	div4 = new Ground(260,690,10,350);
	div5 = new Ground(350,690,10,350);
	div6 = new Ground(440,690,10,350);
	div7 = new Ground(520,690,10,350);
	div8 = new Ground(610,690,10,350);
	div9 = new Ground(700,690,10,350);
  div10 = new Ground(790,690,10,350);
  
  for(var j=40;j<width;j=j+50){
    plinkos.push(new Plinko(j,100,10))
  }
  for(var j=15;j<width-50;j=j+50){
    plinkos.push(new Plinko(j,200,12))
  }
  for(var j=100;j<width-50;j=j+50){
    plinkos.push(new Plinko(j,300,14))
  }
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  base.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();
  div9.display();
  div10.display();
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
    
  }  
  if(p!=null){
    p.display();
    if(p.body.position.y>500){
      if(p.body.position.x<260){
        score=score+50;
        p=null;
      }
      else if(p.body.position.x>260&&p.body.position.x<520){
        score=score+100;
        p=null;
      }
      else if(p.body.position.x>520&&p.body.position.x<790){
        score=score+100;
        p=null;
      }
      

    }
 } 
    
 text("50",50,550);
 text("50",140,550);
 text("50",210,550);
 text("100",300,550);
 text("100",370,550);
 text("100",460,550);
 text("200",550,550);
 text("200",640,550);
 text("200",750,550);
 text("SCORE:"+score,50,350);
}

function mousePressed(){
      p = new Particle(random(100,width-100),10,10);
             
   }


