var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5ilter(value){
  return value > 5;
}
filteredNumberArray = numberArray.filter(above5ilter);
console.log("Filtered Number Array: ", filteredNumberArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var searchValue = "Bismol";

function containsFilter(value){
  return value.indexOf(searchValue)!==-1;
}

var searchShoppingList = shoppingList.filter(containsFilter);
console.log("Filtered Shopping List: ", searchShoppingList);
