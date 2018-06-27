function action(actor, camera, director) {
   this.actionSpeed = 0;
   
   this.actor = actor;
   this.camera = camera;
   this.director = director;
   
   this.setSpeed = function (speed) {
   	   this.actionSpeed = speed;
   }
};

action.prototype.run = function() {
  console.log("ACTION WALK!");
	this.actor.moving(this.actionSpeed);
	this.camera.moving(this.actionSpeed);
  this.director.moving(this.actionSpeed);
}


action.prototype.stop = function() {
  console.log("ACTION STOP!");
	this.actor.stop();
	this.camera.stop();
  this.director.stop();
}

function actor(){
   this.speed = 0;
}

actor.prototype.moving = function(speed) {
   this.speed = speed;
   console.log("moving : " + this.speed);
}

actor.prototype.stop = function() {
	 this.speed = 0;
   console.log("stoping : " + this.speed);
}

function camera(){
   this.speed = 0;
}
camera.prototype = Object.create(actor.prototype);

function director(){
   this.speed = 0;
}
director.prototype = Object.create(actor.prototype);

var nowActor = new actor();
var nowCamera = new camera();
var nowDirector = new director();

var movieAction = new action(nowActor, nowCamera, nowDirector);

//movie start
for( var i = 1; i < 10; i++)
{
   (function(speed)
   {
      setTimeout(
          function() 
          { 
              movieAction.setSpeed(speed);  
              movieAction.run(); 
              if(speed == 9)  movieAction.stop();
          }, i * 1000
      );
   })(i);
}
