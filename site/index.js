const { noConflict } = require("underscore");

function formSuccess() {
    jQuery("#contact-form").addClass('form-back__container--hidden');
    jQuery("#contact-succes").removeClass('form-back__succes--hidden');
}

function newletter() {
    questionTitle();
    $("#message").val("");
    jQuery("#contact-form").removeClass('form-back__container--hidden');
    jQuery("#contact-succes").addClass('form-back__succes--hidden');
}

function buy20() {
    buyTitle();
    $("#message").val('Hello! I want to get support according the "Assistent" plan.');
    document.getElementById("contact-form").scrollIntoView();
}

function buy200() {
    buyTitle();
    $("#message").val('Hello! I want to get support according the "Pro Team" plan.');
    document.getElementById("contact-form").scrollIntoView();
}

function buyTitle () {
    document.getElementById("question-title").style.display = 'none';
    document.getElementById("buy-title").style.display = 'block';
  }
  
  function questionTitle () {
    document.getElementById("question-title").style.display = 'block';
    document.getElementById("buy-title").style.display = 'none';
  }