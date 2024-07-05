import "./extensions.js";
export default class CanvasLayout {

    static canvas = ("Canvas".element());
    static ctx = this.canvas.getContext("2d");
    static height = window.innerHeight;
    static width = window.innerWidth;
    static PI = 3.14;

    constructor() { }
    static getSquare(radius) {
        return this.PI * radius * radius;
    }

    /**  Draws image on the canvas */
    static drawImage(imgPath, position, size) {
        let img = new Image();
        img.src = imgPath;
        CanvasLayout.ctx.drawImage(img, position.x, position.y, size.w, size.h);
    }

    /**  Applies size of the canvas element according to size of element */
    static stretchCanvas(elementName) {
        let div = document.getElementById(elementName);
        this.canvas.width = div.clientWidth;
        this.canvas.height = div.clientHeight;
    }
    
    static clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

