import { homepage } from './home.js';
import { aboutPage } from './about.js';
import { contactPage } from './contact.js';
import { menuPage } from './menu.js';
import { title, nav } from './header.js';

const header = document.querySelector('#header');
const content = document.querySelector('#content');

header.append(title, nav);
content.append(homepage); //home is loaded automatically first
homepage.classList.add('home');
nav.addEventListener('click', tabHandler);


function active(clickedBtn) { //on click on any of the buttons on the header would turn the btn to active
    const btns = Array.from(nav.children);
    btns.forEach(btn => {
        const name = btn.textContent;
        if (name == clickedBtn) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active');
        }
    })
}

function tabHandler(e) { //handles what is shown on each tab btn when clicked
    removeAllChildNodes(content);
    switch (e.target.textContent) {
        case 'Home' :
            content.append(homepage);
            content.firstChild.classList.add(`${e.target.textContent.toLowerCase()}`)
            break;
        case 'Menu' :
            content.append(menuPage);
            content.firstChild.classList.add(`${e.target.textContent.toLowerCase()}`)
            break;
        case 'About' :
            content.append(aboutPage);
            content.firstChild.classList.add(`${e.target.textContent.toLowerCase()}`)
            break;
        case 'Contact' :
            content.append(contactPage);
            content.firstChild.classList.add(`${e.target.textContent.toLowerCase()}`)
            break;
    }
    active(e.target.textContent);
}



function removeAllChildNodes(parent) { //clears the previous content after clicking another btn
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

