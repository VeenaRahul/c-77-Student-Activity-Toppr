class BaseClass{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h, {friction: 1});
        this.width = w;
        this.height = h;
        this.image = loadImage('sprites/base.png');
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);

        push ();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        image(this.image, 0,0, this.width, this.height);
        pop ();
    }
}