//SingleTone Pattern
//Only Allowed one instance

var printer = (function () {

    var printerInstance;
  
    function create () {
  
      function print() {
        console.log("Start print");
      }
  
      function turnOn() {
        console.log("Ready print");
      }
  
      return {
        print: print,
        turnOn: turnOn
      };
    }
  
    return {
      getInstance: function() {
        if(!printerInstance) {
          printerInstance = create();
        }
        return printerInstance;
      }
    };
  
    function Singleton () {
      if(!printerInstance) {
        printerInstance = intialize();
      }
    };
  
  })();

  var officePrinter = printer.getInstance();
  officePrinter.turnOn();
  officePrinter.print();