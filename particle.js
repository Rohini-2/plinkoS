class Particles {
    constructor(x, y, width, height) {
     var options={
       isStatic:true,
     }
     this.body=Bodies.circle(x,y,width,options);
     this.radius = width
     this.color=color(random(0,255),random(0,255),random(0,255));
     World.add(world,this.body)
    }
    display(){
      push()
      translate(this.body.position.x, this.body.position.y)
      fill(this.color)
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius, this.radius)

      pop()
    }
    
}
