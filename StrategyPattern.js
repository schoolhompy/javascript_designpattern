function Bus(whos) {
    this.whosType = whos;
    this.baseCharge = 2000;
}

Bus.prototype.discount = function() {
    return this.whosType(this.baseCharge);
}

function child(charge) {
   return charge - 1000;
}
function adult(charge) {
   return charge;
}
function grandAdult(charge) {
   return 0;
}

var bus = new Bus(child);
console.log(bus.discount());

var bus = new Bus(adult);
console.log(bus.discount());

var bus = new Bus(grandAdult);
console.log(bus.discount());
