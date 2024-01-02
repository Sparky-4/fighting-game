class Sprite {
    constructor(position, velocity, width, height, moveKeys) {
        this.position = position;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.moveKeys = moveKeys;

        this.forwardHitbox = new Hitbox(100, 50, 50);
        this.backwardHitbox = new Hitbox(100, 50, 50);
        this.downwardHitbox = new Hitbox(100, 50, 50);
        
        this.facing = false; // where left is false and right is true
        // needed if sprite crouching is done
        // this.standingHeight = height;
        // this.crouchedHeight = height / 2;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        if(this.forwardHitbox.isAttacking){   
            ctx.fillStyle = 'blue';
            if(this.facing)
                ctx.fillRect(this.position.x, this.position.y + 50, this.forwardHitbox.width - this.forwardHitbox.timer, this.forwardHitbox.height);
            else
                ctx.fillRect(this.position.x + this.width, this.position.y + 50, -(this.forwardHitbox.width - this.forwardHitbox.timer), this.forwardHitbox.height);
            this.forwardHitbox.timer -= 3;
        }else{
            this.forwardHitbox.timer = 50;
        }
    }

    update() {

        // started on possible crouching?
        // if(keys[this.moveKeys.down])
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

        // changes in x position, which is looking for 'left' and 'right' presses
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

        // facing updating
        if(this.velocity.x != 0)
            this.facing = this.velocity.x > 0;
        
        // Attack updating
        this.forwardHitbox.isAttacking = keys[this.moveKeys.attack] && this.forwardHitbox.timer == 50 || this.forwardHitbox.timer < 50 && this.forwardHitbox.timer >= 0;


    }
}