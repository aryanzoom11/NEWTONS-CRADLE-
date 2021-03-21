class Bobs {
    constructor(x, y) {
        var option = {
           isStatic:false,
           density:7.8,
           restitution:1,
           friction:0,
        
           
            
        }
        this.body = Bodies.circle(x,y,25,option)
        World.add(world, this.body)
    }
    display() {
      
        
        push()
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,25,25)
        pop()

    }
}

