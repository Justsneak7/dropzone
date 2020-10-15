class Dropzone{
    constructor(){
        var options = {
            'density':1.0
        }
        this.body = Bodies.rectangle(width,height,options);
        this.width = 20;
        this.height = 7;

        World.add(world,this.body);
    }
    display(){
        strokeWeight(4);
        stroke("black");
        fill("red");
     }
}