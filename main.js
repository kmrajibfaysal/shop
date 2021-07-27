class Store {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.prices = {};
    this.totalSales = 0;
  }
  isItemAvailable(name) {
    let itemIndex = this.items.indexOf(name);
    if (itemIndex == -1) {
      return false;
    } else {
      return true;
    }
  }
  getPrice(name) {
    let isAvailable = this.isItemAvailable(name);
    if (isAvailable == true) {
      let itemPrice = this.prices[name];
      return itemPrice;
    } else {
      console.log("Sorry. We do not have the item.");
    }
  }

  getTotalSale() {
    return this.totalSales;
  }
  addItem(name, price) {
    this.items.push(name);
    this.prices[name] = price;
  }
}

let akijStore = new Store("Akij Fashion Ltd.");
akijStore.addItem("shirt", 300);
akijStore.addItem("pant", 500);
