export const home = (() => {

    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

    const headline = 'We make ze best pizza there is!';
    const info = "Pizza, was first created by a very famous chef back in the 90s. The man's name is slim shady. He is not only the rap god, but also the pizza god. When everyone was eating spaghetti, he thought of the most delicous food creation in existence, and that is why we are called Shady Pizza"
    return {
        img,
        headline,
        info
    }
})() 




