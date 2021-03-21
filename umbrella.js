

class Umbrella{
    constructor(x,y,radius){
        this.radius =radius;
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,this.radius,options);
        this.image=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png");
        this.image.scale=0.5;
        World.add(world,this.body);
        
    }

    display(){
        imageMode(CENTER);
       animation(this.image,this.body.position.x,this.body.position.y,150,300)

    }
}