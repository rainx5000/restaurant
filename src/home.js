// we will create our contents for home and it will all be appended into one div called home
//we will export it, and in index.js will will create a function that would append to div.content

import { home } from './data.js'

const homepage = document.createElement('div');
const headline = document.createElement('h3');
headline.textContent = home.headline
const info = document.createElement('p');
info.textContent = home.info;
homepage.append(home.img, headline, info);
export {
    homepage
}