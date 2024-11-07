import { analyze } from './analyzeArray';

const testData = [
    {
        array: [1, 8, 3, 4, 2, 6],
        description: 'integers',
        result: {
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        },
    },
    {
        array: [1, -5, -45, 5],
        description: 'negative integers',
        result: {
            average: -11,
            min: -45,
            max: 5,
            length: 4,
        },
    },
    {
        array: [4],
        description: 'a single integer',
        result: {
            average: 4,
            min: 4,
            max: 4,
            length: 1,
        },
    },
    {
        array: [],
        description: 'nothing',
        result: {
            average: 0,
            min: null,
            max: null,
            length: 0,
        },
    },
    {
        array: [null, 4, null, 5, null, null, 3],
        description: 'integers and null values',
        result: {
            average: 4,
            min: 3,
            max: 5,
            length: 3,
        },
    },
    {
        array: [null, '4', null, '5', null, null, 3],
        description: 'integers, string integers, and null values',
        result: {
            average: 4,
            min: 3,
            max: 5,
            length: 3,
        },
    },
];

describe('analyze an array', () => {
    describe('that contains', () => {
        for (let data of testData) {
            it(data.description, () => {
                expect(analyze(data.array)).toMatchObject(data.result);
            });
        }
    });
});
