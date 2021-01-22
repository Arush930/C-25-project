class Paper {
  constructor(x,y,width,height) {
    var options = {
      restitution:0.3,
      density:0.5,
      friction:0.5

    }
    this.image=loadImage("paper.png")
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("red");
    image(this.image,pos.x,pos.y,50,50)
  }
};