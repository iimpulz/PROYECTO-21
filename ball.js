class Ball{
    constructor(x,y,r){
     var options ={
         isStatic:false,
         restitution:0.5,
         friction:0,
         density:1.5
     };
     this.body = Bodies.circle(x,y,r,options);
     this.r = r;
     World.add(world,this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("withe");
        ellipse(pos.x,pos.y,this.r);
        pop();
    }
    
}