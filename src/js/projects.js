// Using document.lastModified property
console.log(document.lastModified);
let last_modified = document.lastModified;
let date = new Date(last_modified);
// Last modified year
document.querySelector("#last_updated").innerHTML = date.getFullYear();

// Including Contact me information in the footer

let contact_me = document.querySelector('#contact_me');
// content
let email = 'man22007@byui.edu';
let phone = '+17657301406';
// create new nodes/elements
const email_element = document.createElement('span');
// insert new content or elements
email_element.innerHTML = email;
const phone_element = document.createElement('span');
phone_element.innerHTML = phone;
// append new elements
contact_me.appendChild(email_element); // add new child at the end
contact_me.appendChild(phone_element);

// Take an input an check if it's par o impar
document.getElementById("check_button").addEventListener("click", () => {
    let number = document.getElementById("numeric_input").value;
    if (((number%2) != 0) && (number != null)) {
        alert("The number " + number + " is odd")
    } else if ((number == null) || (typeof number != 'number')){
        alert("Sorry, that's not a valid number")
    }
    else{
        alert("The number " + number + " is even")
    }
})

// Check programming language
const programming_languages_learned = ["python", "c", "html","html5", "css", "css3","js", "javascript", "node", 
    "node.js","node javascript", "react", "react javascript"
]
document.getElementById("check_language_button").addEventListener("click", function(){
    let language = document.getElementById("programming").value.toLowerCase();
    if (language in programming_languages_learned) {
        let result = createElement('p');
        result.innerHTML = "I already know that language!"
        document.getElementById("number_checking_button").appendChild(result);
    } else{
        let result = createElement('p');
        result.innerHTML = "I haven't learned that language yet!";
        document.getElementById("number_checking_button").appendChild(result);
    }
} )

