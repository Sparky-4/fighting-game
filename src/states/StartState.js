class StartState{

    constructor(){
        this.highlighted = 1;
		this.cooldown = 0;
		this.counter = 10;
    }

    enter(){}

    /*
    * updates the start state and manages buttons on screen - called every frame
    */
    update(){
        if((keys[38] || keys[40]) && this.cooldown <= 0){
			if(this.highlighted == 1)
				this.highlighted = 2;
			else
				this.highlighted = 1;
			gSounds.empty.play();
			this.cooldown = 10;
		}
        if(keys[13] && this.counter <= 0){
			if(this.highlighted == 1)
				gStateMachine.change('play', {});
			else 
				gStateMachine.change('select');
			gSounds.pickup.play();
		}
        this.cooldown--;
		this.counter--;
    }

    /*
    * renders the start page
    */
    render(){   
        ctx.font = gFonts.large;
		ctx.fillStyle = 'white';
		ctx.textAlign = 'center';
		ctx.fillText("Super Yash Bros.", VIRTUAL_WIDTH/2*SCALE_FACTOR_WIDTH, VIRTUAL_HEIGHT/3*SCALE_FACTOR_HEIGHT);    

        ctx.font = gFonts.medium;		
		if(this.highlighted == 1)
			ctx.fillStyle = '#67ffff';
		ctx.fillText("Start", VIRTUAL_WIDTH/2*SCALE_FACTOR_WIDTH, VIRTUAL_HEIGHT/2*SCALE_FACTOR_HEIGHT + 16*SCALE_FACTOR_HEIGHT);
		ctx.fillStyle = 'white';
		
		if(this.highlighted == 2)
			ctx.fillStyle = '#67ffff';
		ctx.fillText("Levels", VIRTUAL_WIDTH/2*SCALE_FACTOR_WIDTH, VIRTUAL_HEIGHT/2*SCALE_FACTOR_HEIGHT + 32*SCALE_FACTOR_HEIGHT);  

    }

}