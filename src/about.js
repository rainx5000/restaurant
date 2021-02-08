import { about } from "./data.js"

const aboutPage = document.createElement('div');
const info = document.createElement('p');
info.textContent = about.info;


aboutPage.append(about.img, info);

export {
    aboutPage
}