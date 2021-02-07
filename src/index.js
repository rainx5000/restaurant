import { message } from './home.js'

const header = document.querySelector('#Header');

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
nav.append(home, menu, about, contact);

home.addEventListener('click', (e) => {
    message()
})


