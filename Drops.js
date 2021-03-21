class Drops{
        constructor(x,y){

               var options={
                   
                   friction:0.1,
                   restitution:0.1
               }
                this.radius=2;
                this.body=Bodies.circle(x,y,this.radius,options);
                World.add(world,this.body);
        }

        updateDrop(){
            if(this.body.position.y>height){
                Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,500)})
            }
        }

        display(){
            //push();
            ellipseMode(RADIUS);
            fill("lightblue");
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
            //pop();
        }



    
}