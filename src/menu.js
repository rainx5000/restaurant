import { menu } from './data.js'

const menuPage = document.createElement('div');


const item = (img, name, small, medium, large) => {
    const itemContainer = document.createElement('div');
    menuPage.append(itemContainer);
    itemContainer.classList.add('item-container');
    const itemImg = document.createElement('img');
    itemImg.src = img;
    const itemName = document.createElement('h3')
    itemName.textContent = name;
    const itemSmall = document.createElement('p')
    itemSmall.textContent = 'S - $' + small;
    const itemMedium = document.createElement('p')
    itemMedium.textContent = 'M - $' + medium;
    const itemLarge = document.createElement('p')
    itemLarge.textContent = 'L - $' + large;
    itemContainer.append(itemImg, itemName, itemSmall, itemMedium, itemLarge);

    return {
        itemContainer
    }
}

function createList (menu) {
    
    for (let el in menu) {
        let x = [];
   

        const img = menu[el].img;
        const name = menu[el].name;
        const small = menu[el].small;
        const medium = menu[el].medium;
        const large = menu[el].large;

        const foodItem = item(img, name, small, medium, large)
        menuPage.append(foodItem.itemContainer);
    }
}

createList(menu);
console.log(menu);
console.log(menuPage);

export {
    menuPage
}