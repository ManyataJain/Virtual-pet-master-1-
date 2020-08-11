//Create variables here
var dog, dogIMG;
var happyDog, happyDogIMG;
var database;
var foodS,foodStock;




function preload()
{
  //load images here
  dogIMG=loadImage("Dog.png");
  happyDogIMG=loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
 createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogIMG);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
   dog.addImage(happyDogIMG);}


//  foodStock.update('Food')
  drawSprites();
  //add styles here
 fill(255,255,254);
 stroke("black");
 text("Food remaining:"+foodS,170,200);
 textSize(13);
 text("Note:Press UP_ARROW Key to feed Drago milk",130,10,300,20);
 
  


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
   x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}





