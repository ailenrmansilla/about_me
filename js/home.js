console.log("Helloo");


// Reveal name in the title after a click on the button
const button_name =  document.querySelector('#reveal_name');
const my_name = document.getElementById('my_name');

button_name.addEventListener("click", function(){
    my_name.innerHTML = "Ailen"; 
    my_name.style.color = "#B3B492";
});

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

// add a picture src to the img element

let picture = document.querySelector("#portrait");
picture.setAttribute('src','images/profile.jpeg');