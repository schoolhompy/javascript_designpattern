//Observer Pattern
//Messaging to publisher/subscriber

var Observer = function(argName) {
    var _myName = argName;
    return {
        notify : function(argMsg) {
            console.log(argMsg + " to " + _myName );
        }
    }
};

var Subject = function(argMsg) {
  var _msg =   argMsg;
  var observers = [];

  return {
    subscribeObserver: function(observer) {
      observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
      var index = observers.indexOf(observer);
      if(index > -1) {
        observers.splice(index, 1);
      }
    },
    notifyObserver: function(observer) {
      var index = observers.indexOf(observer);
      if(index > -1) {
       observers[index].notify(_msg);
      }
    },
    notifyAllObservers: function() {
      for(var i = 0; i < observers.length; i++){
        observers[i].notify(_msg);
      };
    }
  };
};

var observer1 = new Observer("GRANDMOTHER");
var observer2 = new Observer("MOTHER");
var observer3 = new Observer("FATHER");
var observer4 = new Observer("CHILD");

var subject = new Subject("EarthQuake Alert");
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

//single notify
subject.notifyObserver(observer2);

//all notify
subject.notifyAllObservers();