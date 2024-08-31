import {
    Branch
} from "./branch.js";

export class Tree {
    constructor(context, posX, posY) {
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.branches = [];
        this.depth = 3;


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

        if(this.branches[depth] == null){
            this.branches[depth] = []
        }
        this.branches[depth].push(new Branch(startX, startY, endX, endY, this.depth - depth));

        this.createBranches(endX, endY, angle - this.random(15, 23), depth + 1);
        this.createBranches(endX, endY, angle + this.random(15, 23), depth + 1);
    }

    draw() {
        let isEnd = false
        for (let d = 0; d < this.depth; d++) {
            // for (let i = 0; i < this.branches[d].length; i++) {
            for (let i = 0; !isEnd; i++) {
                console.log(d,i)
                console.log('1',this.branches)
                console.log('2',this.branches[d])
                console.log('3',this.branches[d][i])
                isEnd = this.branches[d][i].draw(this.context);
            }
        }
        // let i = 0
        // this.branches.forEach(branch => {
        //     console.log('i', i++)
        //     isEnd = branch.draw(this.context)
        // })
        if (!isEnd) {
            // requestAnimationFrame(this.draw.bind(this))
        }
        // requestAnimationFrame(this.draw.bind(this))
        console.log('end')
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