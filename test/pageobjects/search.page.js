const Page = require('./page');

class SearchPage extends Page {

    get linkFisica () {return $('a=Física')}
    get linkLenguaje () {return $('a=Lenguaje')}
    get linkOcupacional () {return $('a=Ocupacional')}

    doSwitchSpecialities(speciality){
        switch (speciality){
            case 'Física':
                this.linkFisica.waitForClickable();
                this.linkFisica.click();
                break;
            case 'Lenguaje':
                this.linkLenguaje.waitForClickable();
                this.linkLenguaje.click();
                break;
            case 'Ocupacional':
                this.linkOcupacional.waitForClickable();
                this.linkOcupacional.click();
                break
            default:
                console.log('Invalid speciality');
        }
    }

    open () {
        return super.open('/#/search');
    }

}

module.exports = new SearchPage();