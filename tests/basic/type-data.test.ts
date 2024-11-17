import { 
    isEven, 
    concatStrings, 
    toggleBoolean,
    calculateAverage,
    typesData
} from "../../src/basic/type-data";

// primitive data
describe('Operations primitive data', function() {
    it('isEven', function() {
        expect(isEven(10)).toBe(true);
    });
    it('concarStrings', function() {
        expect(concatStrings('Indra', 'wansyah')).toBe('Indrawansyah');
    });
    it('toggleBoolean', function() {
        expect(toggleBoolean(true)).toBe(false);
    });
});

// array
describe('Data Array', function() {
    it('Average', function() {
        expect(calculateAverage([10, 20, 50])).toBe(26);
    });
});

// any
describe('Any', function() {
    it('should support in typescript', function() {
        const person: any = {
            id: 1,
            name: 'Indra',
            age: 23
        };

        person.age = 24;
        person.address = 'Indonesia';

        console.log(person);
    });

    it('what the types of data', function() {
        expect(typesData(5)).toBe("5 adalah Number");
        expect(typesData(true)).toBe("true adalah Boolean");
        expect(typesData("Indra")).toBe("Indra adalah String");
        expect(typesData(null)).toBe("Gak tau ah!")
    })
});