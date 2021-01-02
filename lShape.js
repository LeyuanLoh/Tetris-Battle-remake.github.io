import { tetris } from './tetris.js'

export class LShape extends tetris {
    constructor(lastRenderedTime) {
        let shape = [{ x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 0 }]
        super(shape, lastRenderedTime, "legoLShape")
    }
}