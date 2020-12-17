const HomePage = require('../pageobjects/home.page');

describe('My Home application', () => {
    it('should remain on home page after search with blank criteria', () => {

        const infoText = '¿Buscas un Terapeuta?';

        HomePage.open();
        const url = browser.getUrl();
        HomePage.doSearch('');
        expect(HomePage.lblInfo).toHaveText(infoText, {ignoreCase: true});
        expect(url).toEqual('https://develop.terapeutica.digital/#/');
    });
});