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