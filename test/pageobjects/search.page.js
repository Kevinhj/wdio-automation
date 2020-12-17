const Page = require('./page');

class SearchPage extends Page {

    open (term='') {
        return super.open(`/#/search?sp=all&q=${term}`);
    }

}

module.exports = new SearchPage();