class Plinko {
    constructor(x,y){
        var options={
            restitution:1, 
            isStatic:true
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);

        World.add(world,this.body);
    }
    display(){
         
    var pos=this.body.position;
    var angle=this.body.angle

    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("white");
    ellipseMode(RADIUS);
    ellipse(00,this.radius,this.radius);
    pop ();
    }
}