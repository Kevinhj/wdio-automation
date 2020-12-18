const { defaultSpecialityList } = require('../helpers/data.helper');

const SearchPage = require('../pageobjects/search.page');

describe('The Search Result Functionality', () => {

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

});