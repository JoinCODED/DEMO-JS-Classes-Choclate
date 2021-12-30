class Product {
  constructor(name, price, brand, stock) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.stock = stock;
  }

  addStock = (shipment) => {
    this.stock = this.stock + shipment;
  };

  sale = (salePercent) => {
    this.price = this.price * salePercent;
  };
}

const p1 = new Product("Macbook", 1000, "apple", 24);

class Cloth extends Product {
  constructor(name, price, brand, stock, color, size) {
    super(name, price, brand, stock);
    this.color = color;
    this.size = size;
  }

  sale = (sale) => {
    this.price = sale;
  };
}

const dress = new Cloth("dress", 25, "Zara", 30, "black", "M");

dress.sale(0.5);
p1.sale(0.5);
console.log(dress);
console.log(p1);
