import {hello} from "../main/hello";

describe('When calling the hello function', function () {
    it('should say "hello"', () => {
        expect(hello()).toEqual('hello');
    })
});