//variable for save icon
var saveEl = document.querySelector(".far")

//variable to access the textarea
var textEl = $(".description");


//If I click Save icon, whate I've typed should save
saveEl.addEventListener('click', function(event) {
    event.preventDefault();

    //set variable to get access to textarea value
    var textValue = $(".description").value

    //Store the textarea value
    localStorage.setItem("text", textValue);
    //Get Text New function
    displayMessage()
    
});
//Now display the message that was store by getting it back
function displayMessage () {

    // locally declare value so you can use it put it back into textarea element
    var textValue = localStorage.getItem("text");
    textEl.text(textValue);
}
