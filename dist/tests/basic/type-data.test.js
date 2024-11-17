import { isEven, concatStrings, toggleBoolean, calculateAverage } from "../../src/basic/type-data";
describe('Operations primitive data', function () {
    it('isEven', function () {
        expect(isEven(10)).toBe(true);
    });
    it('concarStrings', function () {
        expect(concatStrings('Indra', 'wansyah')).toBe('Indrawansyah');
    });
    it('toggleBoolean', function () {
        expect(toggleBoolean(true)).toBe(false);
    });
});
describe('Data Array', function () {
    it('Average', function () {
        expect(calculateAverage([10, 20, 50])).toBe(26);
    });
});
