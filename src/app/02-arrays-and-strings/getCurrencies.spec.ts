import {getCurrencies} from './getCurrencies';

describe('Shannon Viney S00186271 - Currency',()=>{
    it('it should contain the currencies - USD - GDP - EUR',()=>{
        let currencyName = getCurrencies();
        expect(currencyName).toContain('USD');
        expect(currencyName).toContain('GDP');
        expect(currencyName).toContain('EUR');
    });
});

