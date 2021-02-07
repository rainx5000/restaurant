import { homeTest } from './home.js'
// import { homeTest } from './data.js'
import { aboutTest } from './about.js'
import { contactTest } from './contact.js'
import { menuTest } from './menu.js'

const header = document.querySelector('#header');
const content = document.querySelector('#content');

const title = document.createElement('h1');
title.innerHTML = 'Pizza';


const nav = document.createElement('div');

const home = document.createElement('button');
home.innerHTML = 'Home';
const menu = document.createElement('button');
menu.innerHTML = 'Menu';
const about = document.createElement('button');
about.innerHTML = 'About';
const contact = document.createElement('button');
contact.innerHTML = 'Contact';

header.append(title, nav);
nav.classList.add('nav')
nav.append(home, menu, about, contact);


console.log(homeTest)



const test = document.createElement('h3');
test.innerHTML = 'hello';
content.append(test)

home.addEventListener('click', (e) => {
    test.innerHTML = homeTest
})

function tabHandler(e) {
    let active = homeTest;

    test.innerHTML = active
}



