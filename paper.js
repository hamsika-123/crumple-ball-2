class paper{
    constructor(x,y,w){
        var options = {
           'isStatic' :false,
        'restitution':0.3,
        'friction':0.3,
        'density':1.1
        

    }
    
      
    
   this.radious = w;
  this.image=loadImage("paper.png");
   this.body = Bodies.circle(x, y, this.radious, options);

    World.add(world, this.body);
}
display(){
    var paperpos=this.body.position;
        push();
        fill("red");
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radious,this.radious);
        pop();
}
}
