class StartState{

    constructor(){

        this.player = new Sprite({x:150, y:(WINDOW_HEIGHT - 150)}, {x:0, y:0}, 50, 150, {up:87, down:83, left:65, right:68});
        this.enemy = new Sprite({x:750, y:150}, {x:0, y:0}, 50, 150, {up:38, down:40, left:37, right:39});
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
        // ctx.fillRect(10, 0, 150, 100);
		this.player.draw();
		this.enemy.draw();
    }

}