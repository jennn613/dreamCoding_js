'use strict';

const box = document.querySelector('.special');

box.addEventListener('click', event=> {
    const rect = box.getBoundingClientRect();
    console.log(rect);
    console.log(`client: ${event.clientX, event.clientY}`);
    console.log(`page: ${event.pageX, event.pageY}`);

});
