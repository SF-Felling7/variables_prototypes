console.log( 'JS' );


//VARIABLE
var prime = 6;

console.log(prime);

//ARRAYS
var things = ["sidewalk", "ground", "wall", "clock", "lamp", "garlic press"];



//USING A VARIABLE IN A FUNCTION

  function addPrime() {
    console.log(prime + 3);
    return prime + 3;
  }
  addPrime();


//REQUIRES
// var express = require( 'express' );
// var app = express();


//PROTOTYPES
function Book(title, author, pages, color) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.color = color;
}
var book1 = new Book("title", "author", "pages", "color");




 //GROUP PROJECT

function Dessert(name,  physique, temperature){
  this.name = name;
  this.physique =physique;
  this.temperature = temperature;
}

Dessert.prototype.whatKind = function(){
  console.log("Yum! I am " + this.name);
};

Dessert.prototype.howCold = function(){
  console.log("This dessert is " + this.temperature);
};

Dessert.prototype.whatPhysique = function(){
  console.log("My physique is...."+ this.physique);
};

function Cake(name, physique, temperature){
  this.name = name;
  this.physique = physique;
  this.temperature = temperature;
}

Cake.prototype = new Dessert();


function Gelato(name, physique, temperature){
  this.name = name;
  this.physique = physique;
  this.temperature = temperature;
}

Gelato.prototype = new Dessert();


function Pie(name, physique, temperature){
  this.name = name;
  this.physique = physique;
  this.temperature = temperature;
}

Pie.prototype = new Dessert();


var tresLeches = new Cake('Tres Leches', 'Cream, brown on the inside, chocolate on inner inside', 'around 12 degrees');
var pistachioGelato = new Gelato('Pistachio Gelato', 'Green and nutty', 'pretty cold');
var strawberryrhubarb = new Pie('Strawberry Rhubarb', 'squishy, circular, rhubarbish', 'mildly warm' );

tresLeches.whatKind();
tresLeches.howCold();
tresLeches.whatPhysique();

pistachioGelato.whatKind();
pistachioGelato.howCold();
pistachioGelato.whatPhysique();

strawberryrhubarb.whatKind();
strawberryrhubarb.howCold();
strawberryrhubarb.whatPhysique();
