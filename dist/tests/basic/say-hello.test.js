import { sayHello } from '../../src/basic/say-hello';
describe('sayHello', function () {
    it('should return Hello Indra', function () {
        expect(sayHello('Indra')).toBe('Hello Indra');
    });
});
