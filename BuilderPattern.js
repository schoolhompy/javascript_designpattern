function Delivery() {
    this.address = '';
    this.post = '';
    this.ordername = '';
}

function DeliveryBuilder() {
    this.delivery = new Delivery();
    
    this.Address = function(address) {
        this.delivery.address = address;
        return this;
    };
    
    this.Post = function(post) {
        this.delivery.post = post;
        return this;
    };
    
    this.OrderName = function(name) {
        this.delivery.ordername = name;
        return this;
    };
    
    this.build = function() {
        return this.delivery;
    }
}

var deliBuilder = new DeliveryBuilder();
var delivery = deliBuilder
               .Address("korea Incheon")
               .Post("114-0000")
               .OrderName("KIM TAE HO")
               .build();
               
console.log("NEW DELIVERY :" + delivery.address + delivery.post + delivery.ordername);
