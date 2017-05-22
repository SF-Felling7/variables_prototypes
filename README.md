

Variables and Prototypes
====

Variables
------

**What is it?**

Creating a variable = capturing a tiny piece of information and naming it.

`var prime = 6;`

**When You Use It**

All the time! Any information you might want to use later should/can be put in a variable.  

`var bunnies = [1,3,4,5,3];`

We can export entire files and functions as variables. In the file you exported to, you can use the variable to source the entire module. Ex:) Requiring Express in server code

`var index = require('./routes/index');`

`app.use('/*', index);`

**Why You Use It**

Variables gives you flexibility and allows you to repeat code less frequently. Variables can change!


*PS: Scope is a thing. You can use variables globally and locally.*


Prototypes
------

**What is it?**

A function creates a prototype for an object.

```
function Animal(name, numLegs){
this.name = name;
this.numLegs = numLegs;
}

Animal.prototype.sayName = function(){
console.log("Hi, my name is " + this.name);
};

function Penguin(name, numLegs) {
this.name = name;
this.numLegs = numLegs;
}

Penguin.prototype = new Animal();

var penguin = newPenguin('Scotty');

//penguin is the prototype of animal

penguin.sayName();

//Scotty can say his name because he IS an animal!
```

```
Notes:
Sean would like to push an animal into another animal.
You could also push a penguin into an array, I guess.
```


**When You Use It**

Prototype key to object oriented programming- prototypes make it easier to create similar objects with the same set of properties.

**Why You Use It**

Prototypes make it easier to organize data.

Prototypes are important to the concept of inheritance. We can assign properties to objects and groups of objects (nested). 
