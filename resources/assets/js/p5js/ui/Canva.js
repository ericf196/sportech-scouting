export default class Canva {
    constructor(canvasWidth, canvasHeight, zoomFactor) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.zoomFactor = zoomFactor;
    }

    setup() {
        var menu = p.select('#toolbar');
        var menuEl = p.createDiv(menu.html());
        var canvaContainer = p.select('#timeline');
        canvaContainer.child(menuEl);
        menuEl.position(canvaContainer.position().x, canvaContainer.position().y);
        menuEl.size(p.width, 30)
    }

    draw() {
        p.background(255);
        p.strokeWeight(1);
        p.stroke('#d3e0e9');
        p.fill(255, 255, 255);
        p.rect(0, 0, this.canvasWidth - 1, this.canvasHeight - 1)
        p.noStroke()
        p.noFill();
    }
}