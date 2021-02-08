const home = (() => {

    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    img.alt = 'picture of a pizza';

    const headline = 'We make ze best pizza there is!';
    const info = "Pizza, was first created by a very famous chef back in the 90s. The man's name is slim shady. He is not only the rap god, but also the pizza god. When everyone was eating spaghetti, he thought of the most delicous food creation in existence, and that is why we are called Shady Pizza"
    return {
        img,
        headline,
        info
    }
})() 

const about = (() => {

    const img = document.createElement('img');
    img.src = "../img/slim.jpg"
    img.alt = 'picture of slim shady(right) and Dr. Crust (left)';

    const info = "This restaurant first opened up in Feb, 23, 1999. Yes that is right, when Slim Shady released his Slim Shady LP. Our founder Dr. Crust (on the left) is a good friend of the rapper/chef Slim Shady. With his permission Crust released the pizza to the world. Not only was Slim Shady LP a hit, but so was Shady Pizza. We had customers pouring into our restaurant, and not a day passed where it stopped. We value our customers and work hard to deliver the best pizza!"

    return {
        img,
        info
    }

})()

const menu = {
    "chicken": {
        img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2014_garlic-chicken-pizza_600x600.jpg?ext=.jpg",
        name: "Chicken Pizza",
        small: "15.99",
        medium: "19.49",
        large: "23.99"
    },
    "hawaiian": {
        img: "https://i.guim.co.uk/img/media/5c235055a8b803a634b5d1eb6649a42c03393b8a/0_182_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b0e73a4fe0d4803537c85d9e9eac6072",
        name: "Hawaiin Pizza",
        small: "16.99",
        medium: "20.49",
        large: "24.99"
    },
    "pepperoni": {
        img: "https://cdn.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?w=600&h=450",
        name: "Pepperoni Pizza",
        small: "13.99",
        medium: "17.49",
        large: "21.99"
    },
    "sicilian": {
        img: "https://www.mangiabedda.com/wp-content/uploads/2018/01/IMG_9402-1024x673.jpg",
        name: "Sicilian Pizza",
        small: "18.99",
        medium: "21.49",
        large: "25.99"
    },
    "neapolitian": {
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        name: "Neapolitian Pizza",
        small: "16.99",
        medium: "20.49",
        large: "24.99"
    },
    "Greek": {
        img: "https://clubfoody.com/wp-content/uploads/2019/03/Greek-Pizza-1_Fotor-2nd.jpg",
        name: "Greek Pizza",
        small: "15.99",
        medium: "19.49",
        large: "23.99"
    },
}

export {
    home,
    about,
    menu
}




