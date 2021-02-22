class Stone {
    constructor() {
        
            var options = {
                'isStatic' : false,
                'density':1.2,
                'friction': 1,
                'restitution':0
              };
      
      this.body = Bodies.rectangle(245, 410, 5, 5,options);
      this.image=loadImage("images/stone.png");
      this.body.scale = 0.25;
      this.body.debug = true;
      World.add(world, this.body);


    };
    display(){
      var pos = this.body.position;

      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image, 0, 0, 50,50);
      pop();
    };
  };