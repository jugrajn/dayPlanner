//variable for save icon
var saveEl = $('.far')

//variable to access the textarea
var textEl = $('.description');

    //If I click Save icon, whate I've typed should save
    $('.saveBtn').on('click', function() {
        console.log("im here")
    
        //set variable to get access to textarea value
       
        var textValue = $(this).siblings('.description').val();
        var storageValue = $(this).parent().attr('id');
        
        //Store the textarea value
        localStorage.setItem(storageValue, textValue);
    });

    function displayMessage() {
        // locally declare value so you can use it put it back into FOR EACH textarea element
         $('#am9 .description').val(localStorage.getItem('am9'));
         $('#am10 .description').val(localStorage.getItem('am10'));
         $('#am11 .description').val(localStorage.getItem('am11'));
         $('#pm12 .description').val(localStorage.getItem('pm12'));
         $('#pm1 .description').val(localStorage.getItem('pm1'));
         $('#pm2 .description').val(localStorage.getItem('pm2'));
         $('#pm3 .description').val(localStorage.getItem('pm3'));
         $('#pm4 .description').val(localStorage.getItem('pm4'));
         $('#pm5 .description').val(localStorage.getItem('pm5'));
    
    }
    displayMessage();





