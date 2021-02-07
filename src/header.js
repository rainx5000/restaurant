import { home } from "./data";

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


nav.classList.add('nav');
nav.append(homeBtn, menuBtn, aboutBtn, contactBtn);
homeBtn.classList.add('active')

export {
 title,
 nav
}