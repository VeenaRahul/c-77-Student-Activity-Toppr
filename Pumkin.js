class Pumpkin extends BaseClass{
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.image = loadImage('sprites/pumpkin.png');        
    }

    // display(){
    //     var pos = this.body.position;
    //     pos.x = mouseX;
    //     pos.y = mouseY;

    //     super.display();
    // }
}