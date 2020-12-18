const Page = require('./page');

class HomePage extends Page {

    get inputSearch () { return $('#search-input') }
    get btnSearch () { return $('.btn_search') }
    get lblInfo () { return $('.col-lg-6 h3')}
    get lblOcupacional () {return $('label=Ocupacional')}
    get lblTherapistName () {return $('//div/h3')}

    doSearch(name){
        this.inputSearch.setValue(name);
        this.btnSearch.click();
    }

    waitForSearchResults(name){
        browser.waitUntil(
            () => this.lblTherapistName.getText().includes(name),
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
    }

    open () {
        return super.open('/');
    }

}

module.exports = new HomePage();