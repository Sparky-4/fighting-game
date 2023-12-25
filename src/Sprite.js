class Sprite{
    constructor(position, velocity, height){
        this.position = position;
        this.velocity = velocity;
        this.height = height;
    }

    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, 50, this.height);
    }

    update(){
        if(keys[68])
            this.velocity.x = 5;
        else if(keys[65])
            this.velocity.x = -5;
        else
            this.velocity.x = 0;

        this.velocity.y += GRAVITY;
        if(this.position.y + this.height <= WINDOW_HEIGHT)
            this.position.y += this.velocity.y;

        if(keys[87])
            this.velocity.y = -5;
        
        this.position.x += this.velocity.x;
    }
}