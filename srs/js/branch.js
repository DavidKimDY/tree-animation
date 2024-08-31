export class Branch {
  constructor(startX, startY, endX, endY, lineWidth) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.color = '#000';
    this.lineWidth = lineWidth;
    this.frame = 8
    this.gapX = (endX - startX) / this.frame
    this.gapY = (endY - startY) / this.frame
    this.currentFrame = 0
  }

  draw(context) {
    if (this.currentFrame == this.frame) {
      return true;
    }
    context.beginPath();

    this.endX = this.startX + this.gapX
    this.endY = this.startY + this.gapY

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

    this.startX += this.gapX 
    this.startY += this.gapY 
    this.currentFrame++

    return false
  }
}