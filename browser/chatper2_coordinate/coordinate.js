'use strict';

const box = document.querySelector('.special');

box.addEventListener('click', event=> {
    const rect = box.getBoundingClientRect();
    console.log(rect);
    console.log(`client: ${event.clientX, event.clientY}`);
    console.log(`page: ${event.pageX, event.pageY}`);

});

const buttonBox = document.querySelector('.buttonBox');
const buttons = buttonBox.querySelectorAll('button');

buttons[0].addEventListener('click', ()=> {
    window.scrollBy({top: 100, left:0, behavior: 'smooth'});
});

buttons[1].addEventListener('click', ()=> {
    // window.scrollTo(0, 100)
    window.scrollTo({top: 100, left:0, behavior: 'smooth'});
});

buttons[2].addEventListener('click', ()=> {
box.scrollIntoView();
});