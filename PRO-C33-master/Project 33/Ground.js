class Ground {
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;

    world.add(world,this.body)
}
display(){
    push();
    var pos=this.body.position;
    rectMOde(CENTER);
    file('white');
    rect(pos.x,pos.y,this.width,this.height);
    pop();
  }
}
    
