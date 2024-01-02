class Sprite {
    constructor(position, velocity, width, height, moveKeys) {
        this.position = position;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.moveKeys = moveKeys;

        // needed if sprite crouching is done
        // this.standingHeight = height;
        // this.crouchedHeight = height / 2;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {

        // started on possible crouching?
        // if(keys[83])
        //     this.height = this.crouchedHeight;
        // else
        //     this.height = this.standingHeight;

        // Change in y velocity, includes gravity and checks for space bar input
        this.velocity.y += GRAVITY;
        if (this.position.y + this.height > WINDOW_HEIGHT) {
            this.velocity.y = 0;
            if (keys[this.moveKeys.up]){
                this.velocity.y = -5;
                // more crouching things, 
                // if player is crouched, jump height reduced
                // if(keys[83])
                //     this.velocity.y = -5;
            }
        }

        // changes in x position, which is looking for 'a' and 'd' presses
        if (keys[this.moveKeys.right]) {
            this.velocity.x = 5;
            if (keys[this.moveKeys.left])
                this.velocity.x = 0;
        } else if (keys[this.moveKeys.left])
            this.velocity.x = -5;
        else
            this.velocity.x = 0;

        // Changes y position according to accumulated y velocity
        this.position.y += this.velocity.y;

        // Checks if sprite has hit either side of the window
        if (this.position.x + this.velocity.x + this.width <= WINDOW_WIDTH
            && this.position.x + this.velocity.x > 0)
            // Changes x position according to accumulated x velocity
            this.position.x += this.velocity.x;

    }
}