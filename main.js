class Store {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.stocks = {};
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

  sellItem(name, quantity) {
    let available = this.stocks[name];
    if (available < quantity) {
      console.log("Sorry we do not have enough.");
    } else {
      let itemPrice = this.getPrice(name, quantity);
      let currentSale = itemPrice * quantity;
      this.totalSales = this.totalSales + currentSale;
      let remaining = available - quantity;
      this.stocks[name] = remaining;
      console.log("Thanks for your purchase.");
    }
  }
  addItem(name, quantity, price) {
    let isExisting = this.isItemAvailable(name);
    if (isExisting == true) {
      let available = this.stocks[name];
      this.stocks[name] = available + quantity;
    } else {
      this.items.push(name);
      this.prices[name] = price;
      this.stocks[name] = quantity;
    }
  }
}

let habluStore = new Store("Hablu Fashion Store");
habluStore.addItem("shirt", 40, 300);
habluStore.addItem("pant", 30, 500);
