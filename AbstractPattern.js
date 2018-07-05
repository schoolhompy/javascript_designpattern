var NpcFactory = (function(){
    var npcList = [];
    return {
        addType : function(npcElement) {
            if (npcList.indexOf(npcElement) > -1) {
                console.log("duplicated");
                return;
            }
            npcList.push(npcElement);
        },
        createNpc : function(npcElement, options) {
            var Npc = npcList[npcList.indexOf(npcElement)];
            return (Npc ? new Npc.npcElement(options) : null)
        }
    }
})();

var enermyMagician = (function(){
   function enermyMagician(options){
       this.name = options.name;
   }
   enermyMagician.prototype.attack = function(target) {
        console.log("big macic");
    }
   
   return enermyMagician;

})();

var enermySword = (function(){
   function enermySword(options){
       this.name = options.name;
   }
   enermySword.prototype.attack = function(target) {
        console.log("swing");
    }
   return enermySword;

})();

const npcOfMagician = {
    npcType : 'magician',
    npcElement : enermyMagician
};
const npcOfSword = {
    npcType : 'sword',
    npcElement : enermySword
};

NpcFactory.addType(npcOfMagician);
NpcFactory.addType(npcOfSword);
var magic1 = NpcFactory.createNpc(npcOfMagician, { name: 'magic_1' });
var magic2 = NpcFactory.createNpc(npcOfMagician, { name: 'magic_2' });
var sword1 = NpcFactory.createNpc(npcOfSword, { name: 'sword_1' });

console.log(magic1.attack());
console.log(magic2.name);
