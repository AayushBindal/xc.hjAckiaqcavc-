class Particle {
    constructor(x, y, radius) {
        var options ={
            restitution:0.4
        }
        this.radius = radius;
      
        this.body = Bodies.circle(x, y, this.r,options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255))
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }

}