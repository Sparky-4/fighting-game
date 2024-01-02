class StartState{

    constructor(){

        // Player keys are standard WASD and X to attack
        this.player = new Sprite({x:150, y:(WINDOW_HEIGHT - 150)}, {x:0, y:0}, 50, 150, {up:87, down:83, left:65, right:68, attack: 88});
        // enemay is IJKL with N to attack
        this.enemy = new Sprite({x:750, y:(WINDOW_HEIGHT - 150)}, {x:0, y:0}, 50, 150, {up:73, down:75, left:74, right:76, attack: 78});
        //{up:38, down:40, left:37, right:39, attack: 191} alternate controls, the arrow keys and slash
    }

    enter(){}

    /*
    * updates the start state and manages buttons on screen - called every frame
    */
    update(){
		  this.player.update();
		  this.enemy.update();
    }

    /*
    * renders the start page
    */
    render(){  
		  // ctx.fillStyle = "red";  
      // ctx.fillRect(100, 100, -10, 100);
		  this.player.draw();
		  this.enemy.draw();
    }

}