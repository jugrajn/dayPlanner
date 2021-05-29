
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
         $('#hr9 .description').val(localStorage.getItem('hr9'));
         $('#hr10 .description').val(localStorage.getItem('hr10'));
         $('#hr11 .description').val(localStorage.getItem('hr11'));
         $('#hr12 .description').val(localStorage.getItem('hr12'));
         $('#hr13 .description').val(localStorage.getItem('hr13'));
         $('#hr14 .description').val(localStorage.getItem('hr14'));
         $('#hr15 .description').val(localStorage.getItem('hr15'));
         $('#hr16 .description').val(localStorage.getItem('hr16'));
         $('#hr17 .description').val(localStorage.getItem('hr17'));    
         //Had to use military time for conditions to work based on consol.log results in line 41. 
    }
    displayMessage();

    // display the current time and day in real time. moment.js
    var today = moment();
    $('#currentDay').text(today.format('MMM Do YYYY, h:mm a'));

    function trackTime() {
        //define the current time in hours with the help of moment.js
        var hourNow = moment().hour();

        //loop through time blocks using jquery syntax
        $('.time-block').each(function () {
            var hourBlock = parseInt($(this).attr('id').split('hr')[1]);
           console.log(hourBlock);
            console.log(hourNow);
            if (hourBlock < hourNow) {
                $(this).addClass('past');
            }
            else if (hourBlock === hourNow) {
                $(this).removeClass('past');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }

        });
    }
    trackTime();
