class StartState{

    constructor(){

        this.sprite = new Sprite({x:150, y:150}, {x:0, y:0}, 150);
    }

    enter(){}

    /*
    * updates the start state and manages buttons on screen - called every frame
    */
    update(){
		this.sprite.update();
    }

    /*
    * renders the start page
    */
    render(){  
		// ctx.fillStyle = "red";  
        // ctx.fillRect(200, 200, 150, 100);
		this.sprite.draw();
    }

}