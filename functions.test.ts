import { createTypeOf } from "typescript"

const {shuffleArray} = require('./utils')

const myShuffleArray = shuffleArray([0,1,2,3,4,5,6,7,8,9])

describe('shuffleArray should', () => {
    test('myShuffleArray should be of size 10', () => {
        expect(myShuffleArray.length).toBe(10)
    })

    test('shuffleArray should be of size 10', () => {
        expect(Array.isArray(myShuffleArray)).toBe(true)
    })

    
})