
function WorldCard(pay) {
   var basePay = pay;
   return {
       yourPaymeny : function(payArea) {
           return payArea.getAmount(basePay);
       }
   }
};

// old interface
function PaymentFromAsia() {
   this.tax = 100;
   this.getAmount = function(pay) {
       return pay + this.tax;
   }
};

// new interface
function PaymentFromAmerica() {
   this.getHighTax = function() {
       return 100000;
   }
};

// new new interface
function PaymentFromEurope() {
   this.getHighTax = function() {
       return 200;
   }
};

//adaptor
function TaxAdaptor(newPayment) {
   var payment = newPayment;
   return {
       getAmount : function(pay) {
           return pay + payment.getHighTax();
       }
   }
}

var cardHell = new WorldCard(5000);

var payToAsia = new PaymentFromAsia();
console.log("Asia Price : " + cardHell.yourPaymeny(payToAsia));

//if change country 
var TaxAdaptorEurope = new TaxAdaptor(new PaymentFromEurope());
console.log("Europe Price : " + cardHell.yourPaymeny(TaxAdaptorEurope));

//if change country too
var TaxAdaptorAmerica = new TaxAdaptor(new PaymentFromAmerica());
console.log("America Price : " + cardHell.yourPaymeny(TaxAdaptorAmerica));
