/* Classes & Functions
============================================================================ */

class FormValidator {
  constructor() {
    this.errorCount = 0;
  }

  scan(){
    document.querySelectorAll('form[data-js-validate=true]').forEach((form) => {

    });
  };

  checkForm(form){
    const fields = form.querySelectorAll("[required]");

    /* Hier bitte die Validierung einfügen
    
    …
    …
    …
 
    */
  };
}

class ViewSwitcher {
  constructor() {
    this.switcherComponent = document.querySelector('#viewSwitcher');
    this.overviewContainer = document.querySelector('#overview');
  }

  init(){

    /* Gibt es überhaupt einen Overview Container?
       Denn auf den Detailseiten gibt es ja keinen :) */
    if (this.overviewContainer === null) {
      document.getElementById('viewSwitcher').remove();
      return;
    }

    /* Default aktivieren */
    this.switcherComponent.querySelector('[data-view=card-view]').classList.add('is-active');

    /* Hier bitte den restlichen Code für den ViewSwitcher einfügen.
       Für den Switcher Button gibt es schon die CSS-Klassen
       card-view: für den Card View (default)
       list-view: für den List View

       …
       …
       …

    */
  };

  changeView(ele){
  };
}
class NavToNeighbours {

  createNavigation(prevItem, nextItem) {

    const navSnippet = `
      <div class="nav-wrap">
      </div>`;
    
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', navSnippet);
  }

  init() {
    if (typeof prevItem === 'undefined') return;
    if (typeof nextItem === 'undefined') return;
    this.createNavigation(prevItem, nextItem);
  };


}

class Accordian { 
  constructor() {
    this.elements = document.querySelectorAll("[data-target]");
  } 

  init() {
    this.elements.forEach((ele) => {

    });
  } 
}




/* Main
============================================================================ */


document.addEventListener("DOMContentLoaded", function (event) {

  /* Form Validator */
  const validator = new FormValidator();
  validator.scan();

  /* View Switcher */
  const switcher = new ViewSwitcher();
  switcher.init();

  /* Accordion */
  const accordian = new Accordian();
  accordian.init();
});

