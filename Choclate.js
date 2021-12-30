class Choclate {
  constructor(name, p, id, color, calories, ingridents) {
    this.name = name;
    if (!isNaN(p)) {
      this.price = p;
    } else {
      this.price = "Invalid price";
    }
    this.id = id;
    this.color = color;
    this.calories = calories;
    this.ingridents = ingridents;
  }

  convertToUsd = () => {
    this.price = this.price * 0.3;
  };

  printChoclatePretty = (username) => {
    console.log(
      `the name is : ${this.name} and its price is ${this.price} and ${username} asked for it`
    );
  };
  changeChoclateName = (newName) => {
    this.name = newName;
  };

  searchForIngrediant = (ingridentName) => {
    return this.ingridents.some((element) => element === ingridentName);
  };
}

const choclate1 = new Choclate("kitkat", "g", 1, "red", 100, [
  "coco",
  "milk",
  "biscut",
]);
const choclat2 = new Choclate("snickersPro", 10.0, 2, "blue", 300, [
  "penuts",
  "caremel",
]);

console.log(choclate1.searchForIngrediant("coco"));
// choclate1.convertToUsd();
// choclat2.convertToUsd();
// choclate1.changeChoclateName("new kitkat");
// console.log(choclate1);
//choclate1.printChoclatePretty("Zainab");
