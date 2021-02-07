import { homepage } from './home.js'
// import { homeTest } from './data.js'
import { aboutTest } from './about.js'
import { contactTest } from './contact.js'
import { menuTest } from './menu.js'

const header = document.querySelector('#header');
const content = document.querySelector('#content');

const title = document.createElement('h1');
title.innerHTML = 'Shady Pizza';


const nav = document.createElement('div');

const homeBtn = document.createElement('button');
homeBtn.innerHTML = 'Home';
const menuBtn = document.createElement('button');
menuBtn.innerHTML = 'Menu';
const aboutBtn = document.createElement('button');
aboutBtn.innerHTML = 'About';
const contactBtn = document.createElement('button');
contactBtn.innerHTML = 'Contact';

header.append(title, nav);
nav.classList.add('nav')
nav.append(homeBtn, menuBtn, aboutBtn, contactBtn);






homeBtn.addEventListener('click', (e) => {
    content.append(homepage)
    homepage.classList.add('home')
    // menupage.classList.add('menu')
    // aboutpage.classList.add('about')
    // contactpage.classList.add('contact')
})

function tabHandler(e) {
    let active = homeTest;

    test.innerHTML = active
}




// const test = document.createElement('h3');
// test.innerHTML = 'hello';
// content.append(test)