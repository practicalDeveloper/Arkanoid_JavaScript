import CanvasLayout from "../code/canvasLayout.js";
import Position from "../code/position.js";
import Size from "../code/size.js";

export default class Ball {
    constructor() {
        this.position = new Position(0,0);
        this.size = new Size(0,0);
        this.ballImage = new Image();
        this.moveSpeedX = 0;
        this.moveSpeedY = 0;
        
        this.resetBallSpeed();
        this.resetBall();
    }
    resetBall() {
        this.size.setSize(18, 18);
        this.ballImage.src = "./images/ball.png";
    }
    resetBallSpeed() {
        this.moveSpeedX = 5;
        this.moveSpeedY = -this.moveSpeedX;
    }
    //** the image of ball drawing on the canvas */
    drawBall() {
        //CanvasLayout.clearCanvas();
        CanvasLayout.drawImage(this.ballImage.src, this.position, this.size);
    }
    reverseYDirection() {
        this.moveSpeedY = -this.moveSpeedY;
    }
    reverseXDirection() {
        this.moveSpeedX = -this.moveSpeedX;
    }
    //** the ball movement on the canvas */
    changeBallPosition() {
        this.position.x += this.moveSpeedX;
        this.position.y += this.moveSpeedY;
    }
}
