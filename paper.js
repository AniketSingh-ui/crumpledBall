class paper
{
	constructor(x,y,r)
	{
		this.x=x; 
		this.y=y;
        this.r=r;
	
		
		
        var options ={
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,
            'friction':0            
        }
		this.Body=Bodies.circle(this.x, this.y, this.r,options)
		this.image=loadImage("paper.png");
		
		

	  World.add(world, this.Body)
	

	}
	display()
	{
			var p=this.Body.position;
			

			

			push()
			translate(p.x, p.y);
			imageMode(CENTER);
			
			
	
			
	        image(this.image,0,0,this.r,this.r);
			
			pop()

    }

}