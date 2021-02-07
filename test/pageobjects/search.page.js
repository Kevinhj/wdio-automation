const Page = require('./page');

class SearchPage extends Page {

    therapistNameLocator = '//h3[text()[contains(.,\'[name]\')]]'

    get linkFisica () {return $('a=Física')}
    get linkLenguaje () {return $('a=Lenguaje')}
    get linkOcupacional () {return $('a=Ocupacional')}
    get inputSearch () { return $('//div/input[@class=\'form-control\']') }
    get btnSearch () { return $('//div/input[@value=\'Buscar\']') }
    get iconMap () { return $('.icon-map-1') }
    get map () { return $('#map') }
    get linkProfile () { return $('=Ver Perfil Completo')}


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

    therapistNameResult(name){
        return $(this.therapistNameLocator.replace('[name]', name))
    }

    doSearch(term){
        this.inputSearch.setValue(term);
        this.btnSearch.click();
    }

    doHideMap(){
       this.iconMap.click();
    }

    displayCompleteProfile(){
        this.linkProfile.click();
    }

    open () {
        return super.open('/#/search');
    }

}

module.exports = new SearchPage();