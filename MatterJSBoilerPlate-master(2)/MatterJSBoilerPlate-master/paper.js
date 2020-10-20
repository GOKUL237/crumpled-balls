class paper {
constructor(x,y,r){
var option={
 'restitution':0.8,
 'friction':1.0,
'density': 1.4
}
this.body=Bodies.circle(x,y,r,option);
this.r=r;
World.add(world,this.body);

    
}
 display() {
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(CENTER);
ellipse(0,0,this.r,this.r);
 
pop()
}


}