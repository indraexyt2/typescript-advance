import { sayHello } from '../../src/basic/say-hello';

describe('sayHello', function(): void {
    it('should return Hello Indra', function(): void {
        expect(sayHello('Indra')).toBe('Hello Indra')
    })
})