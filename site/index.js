function formSuccess() {
    jQuery("#contact-form").addClass('form-back__container--hidden');
    jQuery("#contact-succes").removeClass('form-back__succes--hidden');
}

function newletter () {
    jQuery("#contact-form").removeClass('form-back__container--hidden');
    jQuery("#contact-succes").addClass('form-back__succes--hidden');
}