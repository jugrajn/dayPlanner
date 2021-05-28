//variable for save icon
var saveEl = $('.far')

//variable to access the textarea
var textEl = $('.description');


//If I click Save icon, whate I've typed should save
saveEl.on('click', function(event) {
    event.preventDefault();

    //set variable to get access to textarea value
    var textValue = $(this).closest('.description').val();

    //Store the textarea value
    localStorage.setItem('textValue', textValue);
    //Get Text New function
    displayMessage()
    console.log(textValue);
});
//Now display the message that was store by getting it back
function displayMessage() {

    // locally declare value so you can use it put it back into FOR EACH textarea element
     $('#am9 .description').val(localStorage.getItem('textValue'));
     $('#am10 .description').val(localStorage.getItem('textValue'));
     $('#am11 .description').val(localStorage.getItem('textValue'));
     $('#pm12 .description').val(localStorage.getItem('textValue'));
     $('#pm1 .description').val(localStorage.getItem('textValue'));
     $('#pm2 .description').val(localStorage.getItem('textValue'));
     $('#pm3 .description').val(localStorage.getItem('textValue'));
     $('#pm4 .description').val(localStorage.getItem('textValue'));
     $('#pm5 .description').val(localStorage.getItem('textValue'));

}
