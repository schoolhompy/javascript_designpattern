function AgreementStep1() {
    console.log("AgreementStep1");
    this.state = new AgreementStep2();
    this.nextState = function() {
         this.state = this.state.nextState();
    }
}
function AgreementStep2() {
    console.log("AgreementStep2");
    this.nextState = function() {
         return new AgreementStep3();
    }
}
function AgreementStep3() {
    console.log("AgreementStep3");
    this.nextState = function() {
         return new AgreementStep4();
    }
}
function AgreementStep4() {
    console.log("AgreementStep4");
    this.nextState = function() {
         return this;
    }
}
var agreement = new AgreementStep1();
agreement.nextState();
agreement.nextState();
