const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

describe('The Home Search Functionality', () => {

    before(()=> {
        HomePage.open();
    })

    it('should remain on home page after search with blank criteria', () => {

        const infoText = '¿Buscas un Terapeuta?';
        const url = browser.getUrl();

        HomePage.doSearch('');
        expect(HomePage.lblInfo).toHaveText(infoText, {ignoreCase: true});
        expect(url).toEqual('https://develop.terapeutica.digital/#/');
    });

    it('should update the placeholder and search input get the focus', () => {

        HomePage.lblOcupacional.click();
        const placeHolderValue = '¿Buscas a alguien o algo en específico?';
        expect(HomePage.inputSearch).toBeFocused();
        expect(HomePage.inputSearch).toHaveAttr('placeholder', placeHolderValue);
    });

    it('should search a specialist and display the results', () => {

        const searchTerm = 'Maria'

        HomePage.doSearch(searchTerm);
        HomePage.waitForSearchResults(searchTerm);
        expect(HomePage.lblSpecialistName.getText()).toContain(searchTerm);
    });

});