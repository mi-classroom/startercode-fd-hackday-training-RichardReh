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

document.addEventListener("DOMContentLoaded", () => {

  /* Form Validator */
  const validator = new FormValidator();
  validator.scan();

  /* Accordion */
  const accordian = new Accordian();
  accordian.init();
});

