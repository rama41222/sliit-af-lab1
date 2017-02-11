'use strict';

class Vehicle {
  constructor(price) {
    this.price = price;
    
  }
}

class Car extends Vehicle {
  constructor(updatePrice) {
    super(updatePrice);
  }

  get getPrice() {
    return this.price;
  }
  set setPrice(newPrice) {
  
	this.price  = newPrice   

  }
}

var car = new Car(200000);
console.log(car.getPrice);
car.setPrice = 37836283
console.log(car.getPrice);
document.getElementById("auto_text").innerHTML = car.getPrice
