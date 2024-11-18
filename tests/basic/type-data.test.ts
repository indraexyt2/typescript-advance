import { 
    isEven, 
    concatStrings, 
    toggleBoolean,
    calculateAverage,
    typesData,
    unionType,
    Category,
    Product
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
    });
});

// union type
describe('Union data type', function() {
    it('Union', function() {
        let sample: number | string | boolean = "Indra";
        console.info(sample);

        sample = true;
        console.info(sample);
        
        sample = 1000;
        console.info(sample);
    });

    it('Union lagi', function() {
        expect(unionType(5)).toBe(7);
        expect(unionType("indra")).toBe("INDRA");
        expect(unionType(true)).toBe(false);
    });
});

// alias type
describe('Alias Type', function() {
    it('Alias', function() {
        const category: Category = {
            id: "1",
            name: "Handphone"
        };
        const product: Product = {
            id: "1",
            name: "Samsung J12",
            price: 1000,
            category: category
        };

        console.info(category);
        console.info(product);
    })
})

