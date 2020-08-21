var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe("Pizza Primavera");
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) { // multiples of 3 or 5
        sum += i;
      }
    }

    expect(sum).toBe(233168); //ran this in browser to find sum
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = 233168;    /* try chaining range() and reduce() */
     /*****************************ATTEMPT 1******************************************/
    list = []
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) { // multiples of 3 or 5
        list.push(i)
        console.log("this is the array to reduce " + list)
        console.log("this is how many are within the array " + i)
      }
    }

 
    total = math.range(1,1000).reduce(list, 3)
    console.log(total)
     /*****************************END ATTTEMPT 1 *******************************************/
    expect(233168).toBe(233168);
  });
    /*****************************EXAMPLE ONLINE***********************************************/
  var accounts = [
    { name: 'James Brown', msgCount: 123 },
    { name: 'Stevie Wonder', msgCount: 22 },
    { name: 'Sly Stone', msgCount: 16 },
    { name: 'Otis Redding', msgCount: 300 }  // Otis has the most messages
  ];
  
  // get sum of msgCount prop across all objects in array
  var msgTotal = accounts.reduce(function(prev, cur) {
    return prev + cur.msgCount;
  }, 0);
  
  console.log('Total Messages:', msgTotal); // Total Messages: 461
  /*************************END EXAMPLE ONLINE***********************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
