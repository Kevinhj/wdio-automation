const { defaultSpecialityList } = require('../helpers/data.helper');

const SearchPage = require('../pageobjects/search.page');

describe('2. Results: The Search Result Functionality', () => {

    before(()=> {
        SearchPage.open();
    })

    it('should update the URL when flip specialities', () => {

        let testData = defaultSpecialityList();

        SearchPage.doSwitchSpecialities(testData.fisica);
        expect(browser.getUrl()).toEqual('https://develop.terapeutica.digital/#/search?sp=phisical');

        SearchPage.doSwitchSpecialities(testData.lenguaje);
        expect(browser.getUrl()).toEqual('https://develop.terapeutica.digital/#/search?sp=language');

        SearchPage.doSwitchSpecialities(testData.ocupacional);
        expect(browser.getUrl()).toEqual('https://develop.terapeutica.digital/#/search?sp=ocupational');
    });

    it('should display the search result', () => {
        const nameSearch = 'Maria'
        SearchPage.doSearch(nameSearch);

        expect(SearchPage.therapistNameResult(nameSearch).getText()).toContain(nameSearch);
    });

    it('should hide the map from the page', () => {
        SearchPage.doHideMap();
        expect(SearchPage.map).not.toBeDisplayed();
    });

    it('should hit the specialist/ webservice', () => {
        const nameSearch = 'Maria'
        SearchPage.doSearch(nameSearch);
        browser.setupInterceptor();
        SearchPage.displayCompleteProfile();

        browser.pause(1000);
        const request = browser.getRequest(1);
        expect(request.url).toEqual('https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41');
        expect(request.method).toEqual('GET');

    });

});