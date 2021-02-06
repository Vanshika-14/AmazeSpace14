//Database Variable
var database;

//.js File Variables
var form, game, player;

//Variables To Be Included In The Database
var gameState = 0;
var playerCount = 0;

//Going to Be Created in Database!
var allPlayers;

//Normal Variables for Each User and The User Array Too!
var user1, user2, user3, users;

function preload(){
   //Preloading User's Images!
    user1IMG = loadImage("images/1.png");
    user2IMG = loadImage("images/2.png");
    user3IMG = loadImage("images/3.png");
    //Preloading BGs!
    bgName = loadImage("images/bg1.png");
    bgHello = loadImage("images/bg.png");
    bgEnd = loadImage("images/bgEnd.png");
}

function setup(){

   //Database
   database = firebase.database();

   //Canvas
   createCanvas(displayWidth - 20, displayHeight - 30);
}

function draw(){

   //Displaying The Sprites!
   drawSprites();

}

