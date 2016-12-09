export default class InspectorStage {
    setup() {

    }

    draw() {
        inspector.background(255);
        inspector.strokeWeight(4);
        inspector.stroke('#d3e0e9');
        inspector.fill(255, 255, 255);
        inspector.rect(0, 0, inspector.width - 1, inspector.height - 1)
        inspector.noStroke()
        inspector.noFill();

        inspector.push()
        inspector.translate(0, 60);
        inspector.stroke('#d3e0e9');
        inspector.strokeWeight(1);
        inspector.rect(0, 0, 120, 60)
        inspector.line(0, 0, inspector.width, 0);
        inspector.line(0, 60, inspector.width, 60);
        inspector.fill('black');
        inspector.textSize(12);
        inspector.textStyle(inspector.NORMAL);
        inspector.textAlign(inspector.CENTER);
        inspector.text('Left Athlete', 5, 24, 110, 12);
        inspector.pop()

        inspector.push()
        inspector.translate(0, 120);
        inspector.stroke('#d3e0e9');
        inspector.strokeWeight(1);
        inspector.rect(0, 0, 120, 60);
        inspector.line(0, 60, inspector.width, 60);
        inspector.fill('black');
        inspector.textSize(12);
        inspector.textStyle(inspector.NORMAL);
        inspector.textAlign(inspector.CENTER);
        inspector.text('Right Athlete', 5, 24, 110, 12);
        inspector.pop()
    }
}