export default class Stage {
    setup() {

    }

    draw() {
        p.background(255);
        p.strokeWeight(4);
        p.stroke('#d3e0e9');
        p.fill(255, 255, 255);
        p.rect(0, 0, p.width - 1, p.height - 1)
        p.noStroke()
        p.noFill();
    }
}