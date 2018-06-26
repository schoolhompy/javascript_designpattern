//Module Pattern
//access unable to OutClass._contents ( return to undefined)

var OutClass = (function() {
    var _contents = 'private contents';

    var changeContents = function(argNewContents) {
        _contents = argNewContents;
    }
    
    return {
        getContents: function() {
           return _contents;
        },
        setContents: function(theNewID) {
            changeContents(theNewID);
        }
    };
})();

console.log(OutClass.getContents());
OutClass.setContents('New Contents');
console.log(OutClass.getContents());

/*
or
var myClass = OutClass(); 
myClass.getContents();
myClass.setContents('New Contents');
*/