class dustbin{
constructor (x,y,width,height){

    var options = {
        isStatic: true,
        
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.image = loadImage("dustbingreen.png");
    this.width = width;
    this.height = height;

}

display(){

    var pos = this.body.position;
    fill ("white");
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);

}
}