class Chocolate {
  constructor(name, p, id, color, calories, ingredients) {
    this.name = name;
    if (!isNaN(p)) {
      this.price = p;
    } else {
      this.price = "Invalid price";
    }
    this.id = id;
    this.color = color;
    this.calories = calories;
    this.ingredients = ingredients;
  }

  convertToUsd = () => {
    this.price = this.price * 0.3;
  };

  printChocolatePretty = (username) => {
    console.log(
      `the name is : ${this.name} and its price is ${this.price} and ${username} asked for it`
    );
  };
  changeChocolateName = (newName) => {
    this.name = newName;
  };

  searchForIngrediant = (ingridentName) => {
    return this.ingredients.some((element) => element === ingridentName);
  };
}

const chocolate1 = new Chocolate("kitkat", "g", 1, "red", 100, [
  "coco",
  "milk",
  "biscut",
]);
const choclat2 = new Chocolate("snickersPro", 10.0, 2, "blue", 300, [
  "penuts",
  "caremel",
]);

console.log(chocolate1.searchForIngrediant("coco"));
// chocolate1.convertToUsd();
// choclat2.convertToUsd();
// chocolate1.changeChocolateName("new kitkat");
// console.log(chocolate1);
//chocolate1.printChocolatePretty("Zainab");
