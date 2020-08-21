function Muppet(age, hobby) {
  this.age = age; //for this instance of muppet, what is the age?
  this.hobby = hobby;

  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) { //every swedishChef IS A MUPPET but not viceversa
  Muppet.call(this, age, hobby); //when you call this - bring in EVERYTHING from Muppet, but that means it gets overridden
  this.mood = mood; //MUPPET IS BASE OBJ, swedish chef is derived obj

  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet(); //making an instance of a Muppet

describe("About inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding"); //made a muppet age:2, hobby: coding
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual("cooking");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual("chillin");
  });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  //the author uses an empty Function object simply because it can be used as a constructor. Objects cannot. He then changes the constructor's prototype, so that it will return objects of that type. source; https://stackoverflow.com/questions/6799642/beget-function-in-javascript-the-good-parts
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby); //inheriting everything from Muppet, but age and hobby from Gonzo take PRECENDENT
  this.trick = trick; //add a trick
  //anytime you call a f(x) it's part of the syntax, it's like self in python, so anytime you call a class, you must use 'self' so here you must

  this.doTrick = function() { //if you do it, return it
    return this.trick;
  }
}

//no longer need to call the Muppet (base type) constructor
Gonzo.prototype = Muppet.prototype.beget(); //not creating a new instance, but doing a new prototype -- same thing

describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual("eat a tire");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(3);
    expect(this.gonzo.hobby).toEqual("daredevil performer");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual("eat a tire");

    //hallelujah, finished 21 Aug - no mistakes!
  });
});
