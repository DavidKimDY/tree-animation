export class Branch {
    constructor(startX, startY, endX, endY, lineWidth) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = '#000';
        this.lineWidth = lineWidth;
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        if (this.lineWidth < 3) {
            context.lineWidth = 0.9;
          } else if (this.lineWidth < 7) {
            context.lineWidth = this.lineWidth * 0.7;
          } else if (this.lineWidth < 10) {
            context.lineWidth = this.lineWidth * 0.8;
          } else {
            context.lineWidth = this.lineWidth * 0.9;
          }       

        context.fillStyle = this.color;
        context.strokeStyle = this.color;

        context.stroke();
        context.closePath();

    }
}