var dog_image, dog
var database
var Store

function preload(){
  dog_image=loadImage("dog.png")
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);
  dog= createSprite(500,350)
  dog.addImage("dog",dog_image)
  dog.scale=0.5
 var reffood= database.ref("Food")
 reffood.on("value", function(data){
 Store=data.val()
 console.log(Store)
 })
  

  
}

// function to display UI
function draw() {
  background("green");
 
  if(keyDown("S")){
     writeFood()
  }
  

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  
  text(Store,1300,300)
}
 function writeFood() {
     database.ref("/").update({
       Food:Store-1
     })
 }

