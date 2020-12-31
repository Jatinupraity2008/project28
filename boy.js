class Boy {
    constructor(x,y,width,heigth){

        var options={
            isStatic: true,
            restitution: 0,
            fricton: 1
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("Image/boy.png");
        this.body = Bodies.rectangle(this.x,this.y,this.width,heigth,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
         translate(pos.x, pos.y);
         imageMode(CENTER);
         image(this.image,0,0,200,200);
        pop();
    }
}