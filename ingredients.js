const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var i=0;
// Write a while loop that prints out the contents of ingredients:
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for(var k = 0;k < ingredients.length;k++){
  console.log(ingredients[k]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(var k = ingredients.length-1;k >= 0;k--){
  console.log(ingredients[k]);
}