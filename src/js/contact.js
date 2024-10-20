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

// Add contact information
let personal_info = document.querySelector('#personal_info');

let email_info = document.createElement('p');
email_info.innerHTML = 'Email me:' + email;

let phone_info = document.createElement('p');
phone_info.innerHTML = 'Phone: ' + phone;

let address_info = document.createElement('p');
address_info.innerHTML = 'Located in Muncie, IN, USA'
// append all the nodes
personal_info.appendChild(email_info);
personal_info.appendChild(phone_info);
personal_info.appendChild(address_info);






