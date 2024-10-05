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
