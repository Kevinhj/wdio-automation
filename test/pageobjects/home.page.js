const Page = require('./page');

class HomePage extends Page {

    get inputSearch () { return $('#search-input') }
    get btnSearch () { return $('.btn_search') }
    get lblInfo () { return $('.col-lg-6 h3')}
    get lblOcupacional () {return $('label=Ocupacional')}

    doSearch(term){
        this.inputSearch.setValue(term);
        this.btnSearch.click();
    }

    open () {
        return super.open('/');
    }

}

module.exports = new HomePage();