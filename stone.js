class Stone{
  constructor(x,y,r){
    var options={
      isStatic: true,
      restitution: 0.8,
      fricton: 1
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("Image/stone.png");
    this.body = Bodies.circle(this.x,this.y,this.r,options);
    
      World.add(world,this.body);
    
  }

  display() {
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop();
  }
} 