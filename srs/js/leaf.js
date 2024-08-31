export class Leaf {
    constructor(startX, startY, radiusX, radiusY, rotation, color) {
        this.startX = startX;
        this.startY = startY;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.rotation = rotation;
        this.frame = 8;
        this.color = color
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.ellipse(this.startX, this.startY, this.radiusX, this.radiusY, this.rotation, 0, 2 * Math.PI);
        context.fill();
        context.lineWidth = 0.1;
        context.strokeStyle = this.color;
        context.stroke();
    }
}