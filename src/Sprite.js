class Sprite {
    constructor(position, velocity, width, height) {
        this.position = position;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.velocity.y += GRAVITY;
        if (this.position.y + this.height > WINDOW_HEIGHT) {
            this.velocity.y = 0;
            if (keys[32])
                this.velocity.y = -10;
        }


        if (keys[68]) {
            this.velocity.x = 5;
            if (keys[65])
                this.velocity.x = 0;
        } else if (keys[65])
            this.velocity.x = -5;
        else
            this.velocity.x = 0;

            
        this.position.y += this.velocity.y;

        if (this.position.x + this.velocity.x + this.width <= WINDOW_WIDTH
            && this.position.x + this.velocity.x > 0)
            this.position.x += this.velocity.x;

    }
}