console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

//Question 1
var prices = items.map(function(element) {
  return element.price
});
var sum =0;
prices.forEach(function(element) {
 sum += element;
 return sum;
var average = sum / prices.length;
return Math.round(average);
});
$('#answer1').append(average);


//question 2
var filteredPriceObjects = items.filter(function(element) {
  return element.price > 14 && element.price < 18;
});
var price = filteredPriceObjects.map(function(element){
  return {
    title: element.title,
    price: element.price
  }
});



//question 3
var currency = items.filter(function(element){
  return element.currency_code === "GBP";
});
var name = currency.map(function(element) {
  return{
    title: element.title,
    price: element.price,
  }
});


//question 4
var itemMadeOfWood = items.filter(function(element, index) {
  return element.materials, "wood";
});
var list = itemMadeOfWood.map(function(element) {
  return {
    title: element.title
  }
});



//question 5
var eightOrMore = items.filter(function(element) {
  return element.materials < 8;
});
var name = eightOrMore.map(function(element) {
  return  {
  title: element.title,

  }
})



//question 6
var whoMadeIt = items.filter(function(element){
  return element.who_made === "i_did";
})
var sum = whoMadeIt.length;
return sum;
