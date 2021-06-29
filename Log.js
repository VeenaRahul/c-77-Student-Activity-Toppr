class Log extends BaseClass{
    constructor(x, y, h, angle){
        super(x, y, 20, h);
        this.image = loadImage('sprites/log.png');
        Matter.Body.setAngle(this.body, angle)
    }
}