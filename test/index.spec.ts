import { Index } from '../src/index';

describe("multiply", function () {
    var index : Index;

    beforeEach(function () {
        index = new Index();
    });

    it("should multiply 2 and 3 to 6", function () {
        expect(index.Multiply(2, 3)).toBe(6);
    });

    it("should multiply 0 and 3 to 0", function () {
        expect(index.Multiply(0, 3)).toBe(0);
    });
});