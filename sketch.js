//Create variables here
 var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
 dog = loadImage("sprites/Dog.png");
  happyDog = loadImage("sprites/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  background((46, 139, 87));  
foodStock=database.ref('food');
foodStock.on("value",readStock);
//dog.addImage(dog);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
} 
  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}
