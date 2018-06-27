//blackCoffee
function blackCoffee() {
    this._price = 4000;
}

blackCoffee.prototype.getPrice = function() {
  return this._price;  
};

//cafuchinoCoffee
function cafuchino() {
    this._price = 5500;
}
cafuchino.prototype = Object.create(blackCoffee.prototype);


//normal Coffee
function americano(argCoffeeType) {
   this.orderCoffee = argCoffeeType;
}

americano.prototype.getPrice = function () {
    return this.orderCoffee.getPrice();
}


//add Cream 
function decorationCream(argCoffeeType) {
   this.orderCoffee = argCoffeeType;
}

decorationCream.prototype.getPrice = function () {
    return this.orderCoffee.getPrice() +   1000;
}

//add ICE 
function decorationIce(argCoffeeType) {
   this.orderCoffee = argCoffeeType;
}

decorationIce.prototype.getPrice = function () {
    return this.orderCoffee.getPrice() +   200;
}

//-------------------------------------------------//

//Order BlackCoffe
var orderCoffee0 = new blackCoffee();
var payment0 = new americano(orderCoffee0);
console.log(payment0.getPrice());
//4000

//Order BlackCoffe with Cream
var orderCoffee1 = new blackCoffee();
var payment1 = new decorationCream(orderCoffee1);
var payment1_1 = new decorationIce(payment1);
console.log(payment1_1.getPrice());
//5200 = 4000 + 1000 + 200

//Order Cafuchino
var orderCoffee2 = new cafuchino();
var payment2 = new decorationCream(orderCoffee2);
console.log(payment2.getPrice());
//6500 = 5500 + 1000 


