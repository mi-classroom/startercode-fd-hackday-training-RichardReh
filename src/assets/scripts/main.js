/* Classes & Functions
============================================================================ */

class FormValidator {
  constructor() {
    this.errorCount = 0;
  }

  scan(){
    document.querySelectorAll('form[data-js-validate=true]').forEach((form) => {
    form.addEventListener('submit',(e)=>{
      e.preventDefault()
      this.checkForm(e.currentTarget)
    })
    });
  };

  checkForm(form){
    const fields = form.querySelectorAll("[required]");
    console.log(form)
    fields.forEach((element) => {
      
      let currentValue = element.value
      
      if(currentValue.length < 5){
        element.classList.add('ut-has-error')
        this.errorCount++
      } else{
        element.classList.remove('ut-has-error')
        this.errorCount--
      }
     })

     if(this.errorCount !== 0){
        return false
     }
    form.submit()
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

