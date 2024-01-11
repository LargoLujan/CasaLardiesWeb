//language_selector.js
function changeFlag(selectElement) {
    var flagImage = '';
    switch(selectElement.value) {
        case 'es':
            flagImage = '/static/media/images/base/spain_flag.png';
            break;
        case 'en':
            flagImage = '/static/media/images/base/england_flag.png';
            break;
        case 'fr':
            flagImage = '/static/media/images/base/france_flag.png';
            break;
    }
    selectElement.style.backgroundImage = 'url(' + flagImage + ')';
    selectElement.form.submit();
}
