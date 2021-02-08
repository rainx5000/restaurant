const contactPage = document.createElement('div');

const contacts = document.createElement('div');
contactPage.append(contacts)
contacts.classList.add('list');
const phone = document.createElement('p');
phone.textContent = 'Phone: 423-544-1001';
const address = document.createElement('p');
address.textContent = 'Address: 654 Tailor st. New Haven CT, 67704'
const email = document.createElement('p');
email.textContent = 'Email: shady.pizza@aol.com'

contacts.append(address, phone, email);



export {
    contactPage
}