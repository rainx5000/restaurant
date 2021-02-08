import { homepage } from './home.js'
import { menu } from './data.js'
import { aboutPage } from './about.js'
import { contactPage } from './contact.js'
import { menuPage } from './menu.js'
import { title, nav } from './header.js';

const header = document.querySelector('#header');
const content = document.querySelector('#content');

header.append(title, nav);

console.log(menuPage);


const tabs = (() => {
    content.append(homepage);
    homepage.classList.add('home')
    nav.addEventListener('click', tabHandler)
})()

function active(clickedBtn) {
    const btns = Array.from(nav.children)
    btns.forEach(btn => {
        const name = btn.textContent
        if (name == clickedBtn) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active');
        }
    })
}



// let active = homepage;


function tabHandler(e) {
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











//console.log(e.target.innerHTML.toLowerCase() + 'page') 

// const test = document.createElement('h3');
// test.innerHTML = 'hello';
// content.append(test)

    // menupage.classList.add('menu')
    // aboutpage.classList.add('about')
    // contactpage.classList.add('contact')

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
    
    