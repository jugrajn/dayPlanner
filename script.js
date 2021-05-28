//variable for save icon
var saveEl = document.querySelector(".far")

//variable to access the textarea
var textEl = document.querySelector(".description").


//If I click Save icon, whate I've typed should save
saveEl.addEventListener('click', function(event) {
    event.preventDefault();

    //set variable to get access to textarea value
    var textValue = document.querySelector("description").value

    //Store the textarea value
    localStorage.setItem("text", textValue);
    //Get Text
    localStorage.getItem("text")
});

