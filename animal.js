class Animals {
  constructor(x, y,r) {

      var options ={
          restitution:0.4
      }
      this.r=20;
    
      this.body = Bodies.circle(x, y, this.r,options);       
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      this.image = loadImage("crab.png")
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //imageMode(CENTER);
      noStroke();
      fill(this.color)
      imageMode(RADIUS);
      image(this.image,0, 0, this.r,this.r);
      pop();
  }

};