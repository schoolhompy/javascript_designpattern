var npc = (function(){
    function npc(name) {
       this.name = name;
    }
    
   npc.prototype.hp = 50;
   npc.prototype.attack = function(target) {
        console.log("attck");
    }
    
    return npc;
})();

var npc1 = new npc('npc1');
var npc2 = new npc('npc2');

npc1.hp = 100;

console.log(npc1.hp);
console.log(npc2.hp);
