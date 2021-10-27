class Ball {

    constructor(xpos, ypos) {

        var opts = {
            restitution: 0.8
        }

        this.body = Matter.Bodies.rectangle(xpos  , ypos , 30, 30, opts);
        World.add(world, this.body);

    }

    display() {

        circle(this.body.position.x, 
            this.body.position.y + 40, 
            50, 50);

    }

}