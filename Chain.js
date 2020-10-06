class Chain {
    constructor(bodyA,bodyB){
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.04,
            length:10
        } 
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointa =this.chain.bodyA.position;
        var pointb =this.chain.bodyB.position;
        strokeWeight(4);
        line(pointa.x,pointa.y,pointb.x,pointb.y);
        
        
    }
}