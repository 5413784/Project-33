class Box {
    constructor(x,y,width,height){
      var options ={
          'restitution':0,
          'friction':0.3,
          'density':1.5
  
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
  
      world.add(world,this.body)
  }
  }
  display();{
      push();
      var pos=this.body.position;
      rectMOde(CENTER);
      file(255);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
  }