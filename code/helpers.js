import CanvasLayout from "./canvasLayout.js";
import Size from "../code/size.js";
import Position from "../code/position.js";

export const Application = {
    //** Returns count of elements in two dimensional array */
    arrayElemCount: (array) => {
        var length = array.reduce(function (totalLength, subarr) {
            let length = subarr.length;
            if (length > 0) {
                for (var b = 0; b < length; b++) {
                    let elem = subarr[b];
                    if (elem != undefined) {
                        totalLength++;
                    }
                }
            }
            return totalLength;
        }, 0);
        return length;
    }, //arrayElemCount

    //** Returns count of elements in two dimensional array */
    zeroElemCount: (array) => {
        var length = array.reduce(function (totalLength, subarr) {
            let length = subarr.length;
            if (length > 0) {
                for (var b = 0; b < length; b++) {
                    let elem = subarr[b];
                    if (elem != undefined) {
                        totalLength++;
                    }
                }
            }
            return totalLength;
        }, 0);
        return length;
    }, //zeroElemCount

    brickSize: () => {
        let w = CanvasLayout.canvas.width / 10;
        let h = CanvasLayout.canvas.width / 30;
        let size = new Size(w, h);
        return size;
    }, //brickSize
};


