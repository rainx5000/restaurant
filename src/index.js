import { homepage } from './home.js'
// import { homeTest } from './data.js'
import { aboutPage } from './about.js'
import { contactTest } from './contact.js'
import { menuTest } from './menu.js'
import { title, nav } from './header.js';

const header = document.querySelector('#header');
const content = document.querySelector('#content');

header.append(title, nav);


const tabs = (() => {
    // let active = active();
    content.append(homepage);
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
            break;
        case 'Menu' :
            content.append(menupage);
            break;
        case 'About' :
            content.append(aboutPage);
            break;
        case 'Contact' :
            content.append(contactpage);
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
    
    