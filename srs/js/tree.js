import {
    Branch
} from "./branch.js";
import {
    Leaf
} from "./leaf.js";

export class Tree {
    constructor(context, posX, posY, height) {
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.branches = [];
        this.leaves = [];
        this.depth = 9;
        this.currentDepth = 0;
        this.height = height;

        this.flag = false;
        this.isDrwaingBranchesDone = false;
        this.leafColor = this.randomColor();

        this.init();
    }

    init() {
        this.createBranches(this.posX, this.posY, -90, 0, this.height);
        this.drawBranches();
        this.drawLeaves();
    }

    createBranches(startX, startY, angle, depth) {
        if (this.depth === depth) {
            this.leaves.push(new Leaf(startX, startY, 1, 6, 0, this.leafColor));
            this.leaves.push(new Leaf(startX, startY, 1, 6, Math.PI / 3, this.leafColor));
            this.leaves.push(new Leaf(startX, startY, 1, 6, 2 * Math.PI / 3, this.leafColor));
            // this.leaves.push(new Leaf(startX, startY, 3, 1, 0));
            return;
        }
        const len = depth === 0 ? this.random(10, 12) : this.random(0, 11);
        const endX = startX + this.cos(angle) * len * (this.depth - depth);
        const endY = depth === 0 ? this.height : startY + this.sin(angle) * len * (this.depth - depth);

        if (this.branches[depth] == null) {
            this.branches[depth] = []
        }
        this.branches[depth].push(new Branch(startX, startY, endX, endY, this.depth - depth));

        this.createBranches(endX, endY, angle - this.random(15, 23), depth + 1);
        this.createBranches(endX, endY, angle + this.random(15, 23), depth + 1);
    }

    drawBranches() {
        let isEnd = false

        for (let i = 0; i < this.branches[this.currentDepth].length; i++) {
            isEnd = this.branches[this.currentDepth][i].draw(this.context)
        }

        if (isEnd) {
            this.currentDepth++;
        }

        if (isEnd && this.currentDepth === this.depth) {
            this.isDrwaingBranchesDone = true;
            return;
        } else {
            requestAnimationFrame(this.drawBranches.bind(this))
        }
    }

    drawLeaves() {
        if (this.isDrwaingBranchesDone === true) {
            for (let i = 0; i < this.leaves.length; i++) {
                this.leaves[i].draw(this.context);
            }
        } else {
            requestAnimationFrame(this.drawLeaves.bind(this))
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

    randomColor() {
        const randomNum = Math.random();
        if(randomNum < 0.2) {
            return 'pink';
        }
        else if (randomNum > 0.3 && randomNum < 0.6) {
            return 'green';
        } else if (randomNum < 0.3) {
            return 'red';
        } else {
            return 'yellow';
        }
    }

}