export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
   // const title = document.getElementById('title');
      window.document.title = "Window Object!"
    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.querySelector('h1').innerText = "Carmen!"
    // Your code here
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
     document.querySelector('.section p').innerText = "Carmen is a good coder!"
    // Your code here
}
