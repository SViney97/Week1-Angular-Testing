import {greet} from './greet';

describe('Shannon Viney - S00186271 - Greet',()=>{
    it('it should include the name in the message',()=>{
        expect(greet('frank')).toContain('frank');
    });
});