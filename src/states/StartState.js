class StartState{

    constructor(){
        // Player keys are standard WASD and X to attack
        this.player = new Sprite(
          {x:150, y:(WINDOW_HEIGHT - 150)}, 
          {x:0, y:0},
          100, 150, 
          {up:87, down:83, left:65, right:68, attack: 83},
          1, gFrames.mackRight,
          {
            idle: new Animation([0, 1, 2, 3, 4, 5, 6, 7], 5),
            run: new Animation([8, 9, 10, 11, 12, 13, 14, 15], 5),
            jump: new Animation([16, 17], 60),
            fall: new Animation([18, 19], 60),
            attack1: new Animation([20, 21, 22, 23, 24, 25], 5),
            attack2: new Animation([26, 27, 28, 29, 30, 31], 10),
            death: new Animation([32, 33, 34, 35, 36, 37], 7),
            hit: new Animation([38, 39, 40, 41], 7),
          });

        // enemy is IJKL with N to attack
        this.enemy = new Sprite(
          {x:750, y:(WINDOW_HEIGHT - 150)},
          {x:0, y:0},
          100, 150,
          {up:38, down:40, left:37, right:39, attack: 40},
          2, gFrames.kenjiRight,
          {
            idle: new Animation([0, 1, 2, 3], 7),
            run: new Animation([11, 10, 9, 8, 7, 6, 5, 4], 5),
            jump: new Animation([12, 13], 60),
            fall: new Animation([14, 15], 60),
            attack1: new Animation([19, 18, 17, 16], 5),
            attack2: new Animation([23, 22, 21, 20], 10),
            death: new Animation([24, 25, 26, 27, 28, 29, 30], 7),
            hit: new Animation([31, 32, 33, 34], 7),
          });
        //{up:38, down:40, left:37, right:39, attack: 191} alternate controls, the arrow keys and slash

        this.shopAnim = new Animation([0, 1, 2, 3, 4, 5], 6);
    }

    enter(){
      this.time = 60;
      this.count();
    }

    count(){
      this.time--;
      if(this.time == 0)
        return;
      let temp = this;
      setTimeout(function () {
        temp.count();
      }, 1000);
    }

    /*
    * updates the start state and manages buttons on screen - called every frame
    */
    update(){
		  this.player.update();
		  this.enemy.update();

      this.player.handleDamage(this.enemy);
      this.enemy.handleDamage(this.player);

      this.shopAnim.update();

      if(this.player.health == 0){
        this.player.end('lost');
        this.enemy.end('win');
        gStateMachine.change('win', [this.player, this.enemy, 'Player 2', this.time]);
      }
      else if(this.enemy.health == 0){
        this.player.end('win');
        this.enemy.end('lost');
        gStateMachine.change('win', [this.player, this.enemy, 'Player 1', this.time]);
      }
      else if(this.time == 0){
        this.player.end('timed');
        this.enemy.end('timed');
        gStateMachine.change('win', this.player.health>this.enemy.health?
        [this.player, this.enemy, 'Player 1', this.time]:this.player.health==this.enemy.health?[this.player, this.enemy, 'Nobody', this.time]:
        [this.player, this.enemy, 'Player 2', this.time]);
      }
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
    }

}