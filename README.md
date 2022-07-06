# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Live Site URL: [Add live site URL here](https://roarke94.github.io/interactive-rating-component/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Javascript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

I have figured out how to make only one button active using previousElementSibling and nextElementSibling by removing 'circle-active' from each element's classList when the new target button is selected.
```js
if (e.target.checked) {
            btn.classList.add('circle-active');
            if (btn.previousElementSibling !== null) {
                btn.previousElementSibling.classList.remove('circle-active');
  .....
} if (btn.nextElementSibling !== null) {
              btn.nextElementSibling.classList.remove('circle-active');
```


### Continued development

Continue to improve my skills on JavaScript and learning frameworks like React, Angular, and Vue.

### Useful resources

- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) - This YouTube channel helped me with understanding JavaScript better where I learned how to manipulate HTML document using JavaScript.
