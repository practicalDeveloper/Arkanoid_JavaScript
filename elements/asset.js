import CanvasLayout from "../code/canvasLayout.js";
import Size from "../code/size.js";
import Position from "../code/position.js";

export default class Asset {

    constructor() {
        this.assetImage = new Image();
        this.position = new Position(0,0);
        this.size = new Size(0,0);
        this.fallSpeed = 0;
        this.assetImage.src = "./images/lengthen.png";

        this.resetAsset();
    }
    resetAsset() {
        this.size.setSize(32, 32);
        this.position.setPosition(50, 50);
        this.fallSpeed = 5;
    }
    //** the image of asset drawing on the canvas */
    drawAsset() {
        CanvasLayout.drawImage(this.assetImage.src, this.position, this.size);
    }
    //** the asset falling  movement on the canvas */
    changeAssetPosition() {
        this.position.y += this.fallSpeed;
    }
}
