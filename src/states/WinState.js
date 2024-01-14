class WinState{
    constructor(){
        
    }

    enter(params){
        this.player = params[0];
        this.enemy = params[1];
        this.winner = params[2];
        this.time = params[3];
        this.shopAnim = new Animation([0, 1, 2, 3, 4, 5], 6);
        setTimeout(function() {

            if(params[2] == 'Kenji')
                gSounds.kenjiWin.play();
            else if (params[2] == 'Mack')
                gSounds.mackWin.play();
            else{
                if(Math.random() < .1) 
                    gSounds.nobodyWin2.play();
                else
                    gSounds.nobodyWin.play();
            }
        }, 500);

    }

    /*
    * updates the start state and manages buttons on screen - called every frame
    */
    update(){
        if(keys[13])
            location.reload();
        this.shopAnim.update();
    }

    /*
    * renders the start page
    */
    render(){   
        //shop
        gFrames.shop[this.shopAnim.getCurFrame()].draw(600*SCALE_FACTOR_WIDTH, 128*SCALE_FACTOR_HEIGHT);

        //players
        this.player.draw();
		this.enemy.draw();

        //Timer
        ctx.fillStyle = 'white';
        ctx.strokeRect(460.8*SCALE_FACTOR_WIDTH, 23.04*SCALE_FACTOR_HEIGHT, 102.4*SCALE_FACTOR_WIDTH, 40.32*SCALE_FACTOR_HEIGHT);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.font = gFonts.medium;
        ctx.fillText(this.time, 512*SCALE_FACTOR_WIDTH, 55*SCALE_FACTOR_HEIGHT);

        ctx.textBaseline = 'bottom';
        ctx.font = gFonts.large;
        ctx.fillText(this.winner + ' Wins', 512*SCALE_FACTOR_WIDTH, 288*SCALE_FACTOR_HEIGHT);
        ctx.textBaseline = 'top';
        ctx.font = gFonts.medium;
        ctx.fillText('Press Enter', 512*SCALE_FACTOR_WIDTH, 288*SCALE_FACTOR_HEIGHT);

    }
}