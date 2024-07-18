# Arkanoid

    
## Introdution
The project is interpretation of classical NES game [Arkanoid](https://en.wikipedia.org/wiki/Arkanoid).
Built using JavaScript to render graphics on canvas element. 

[You can play online game here](https://practicalDeveloper.github.io/Arkanoid_JavaScript)

![Image alt](https://github.com/practicalDeveloper/Arkanoid_JavaScript/blob/main/images/Main.png)

___

## Game features

- Bricks with different strength:
    - __Light blue__ : one hit to destroy
    - __Yellow__ : two hits to destroy
    - __Green__ : three hits to destroy
    - __Green__ : four hits to destroy
    - __Blue__ : five hits to destroy
- Different power-ups:
    - __Lengthen__ : lengthens width of bat
    - __Shrink__ : shrinks width of bat
    - __Faster__ : increases ball speed
    - __Slower__ : decreases ball speed
- Increasing level after destroying all bricks
- Increasing score for hit bricks
## HTML
Left of side of the HTML page contains main area with HTML5 canvas to draw on it, which is placed inside cell of main HTML table.

```HTML
<canvas id="Canvas"></canvas>
```
Into the main HTML table is placed div for floating message with Help contents.
```
<div id="floatingMessage" class="contentHelp">
</div>
```

```HTML
.contentHelp {
    display: flex;
    align-items: center;
    width: 400px;
    padding: 0.5em;
  }
 ```
 
Right of side of the HTML page contains area with information labels and buttons to react with the game.
  
```HTML
<div class="right">
    <div class="flex-container center borderedText">
    <div class="flex-item color1">Level:<br><span id="levelLabel">1</span></div>
    <div class="flex-item color2">Score:<br><span id="scoreLabel">0</span></div>
    <div class="flex-item color3">Lives:<br><span id="livesLabel">5</span></div>
       ...       
</div>
 ```
 
## JavaScript code

main.ts is the main file for the game. It contains the class App with link to the classs game, which is responsible for rendering, drawing of objects on the canvas.

```JavaScript
class App {
    constructor(game) {
  ...
 }
 
(function () {
    function init() {
        CanvasLayout.stretchCanvas("divCanvas");
        let app = new App(new Game());
        app.initGame();
    }
    window.addEventListener('DOMContentLoaded', init, false);
})();
 ```
 
 ```JavaScript
export default class Game {
    constructor() {
        this.bat = new Bat();
        this.ball = new Ball();
  ...
 }
 ```
 ## The classes for game elements
 A bat element with properties like width, height, position and image of it.
 
  ```JavaScript
export default class Bat {
    constructor() {
        this.batImage = new Image();
        this.size = new Size(0,0);
      ...
  }
 ```
 A ball element with properties like width, height, move speed and image of it.
 
```JavaScript
export default class Ball {
    constructor() {
        this.position = new Position(0,0);
        this.size = new Size(0,0);
        this.moveSpeedX = 0;
        this.moveSpeedY = 0;
  ...
}
 ```
 
 A brick element with properties like width, height, strength, position and image of it.
 
 ```JavaScript
export default class Brick {
    constructor() {
        this.brickImage = new Image();
        this.size = Application.brickSize();
        this.position = new Position(0,0);
        this.brickImage.src = "./images/brick_lblue.png";
        this.brickStrength = 1;
  ...
}
 ```
 
  A power-up element with properties like width, height, position and image of it.
  
```JavaScript
export default class Asset {
    constructor() {
        this.assetImage = new Image();
        this.position = new Position(0,0);
        this.size = new Size(0,0);
        this.fallSpeed = 0;
  ...
}

```
___
