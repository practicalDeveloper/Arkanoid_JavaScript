import CanvasLayout from "../code/canvasLayout.js";
import Position from "../code/position.js";
import Size from "../code/size.js";

export default class Bat {
    
    constructor() {

        this.batImage = new Image();
        this.size = new Size(0,0);
        this.position = new Position(0,0);
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.moveSpeed = 0;

        this.resetBatSize();
        this.resetPosition();
    }
    resetPosition() {
        // this.resetBatSize();
        this.position.setPosition(295, CanvasLayout.canvas.height - this.size.h * 2);
        this.batImage.src = "./images/bat.png";
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.moveSpeed = 7;
    }
    resetBatSize() {
        this.size.setSize(100, 20);
    }
    /**  Changes the bat position according to the pressed key */
    changeBatPosition() {
        if (this.isMovingLeft) {
            this.position.x = this.position.x - this.moveSpeed;
        }
        if (this.isMovingRight) {
            this.position.x = this.position.x + this.moveSpeed;
        }
    }
    /**  Moves and draws the bat according to pressed key */
    moveBat() {
        if ((this.isMovingLeft && this.position.x > 0) ||
            (this.isMovingRight &&
                this.position.x < CanvasLayout.canvas.width - this.size.w)) {
            this.changeBatPosition();
        }
        this.drawBat();
    }
    keyUp(e) {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
            this.isMovingLeft = false;
        }
        if (e.code === "ArrowRight" || e.key === "ArrowRight") {
            this.isMovingRight = false;
        }
    }
    keyDown(e) {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
            this.isMovingLeft = true;
        }
        if (e.code === "ArrowRight" || e.key === "ArrowRight") {
            this.isMovingRight = true;
        }
    }
    drawBat() {
        CanvasLayout.drawImage(this.batImage.src, this.position, this.size);
    }
}
