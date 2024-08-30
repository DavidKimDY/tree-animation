import {
    Branch
} from "./branch.js";

export class Tree {
    constructor(context, posX, posY) {
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.branches = [];
        this.depth = 11;


        this.init();
    }

    init() {
        this.createBranches(this.posX, this.posY, -90, 0);
        this.draw(this.context);
    }

    createBranches(startX, startY, angle, depth) {
        if (this.depth === depth) {
            return;
        }
        const len = depth === 0 ? this.random(10, 12) : this.random(0, 11);
        const endX = startX + this.cos(angle) * len * (this.depth - depth);
        const endY = startY + this.sin(angle) * len * (this.depth - depth);

        this.branches.push(new Branch(startX, startY, endX, endY, this.depth - depth));

        this.createBranches(endX, endY, angle - this.random(15, 23), depth + 1);
        this.createBranches(endX, endY, angle + this.random(15, 23), depth + 1);
    }

    draw(context) {
        for (let i = 0; i < this.branches.length; i++) {
            this.branches[i].draw(context);
        }
    }

    cos(angle) {
        return Math.cos(this.degToRad(angle));
    }
    sin(angle) {
        return Math.sin(this.degToRad(angle));
    }
    degToRad(angle) {
        return angle * Math.PI / 180;
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

}