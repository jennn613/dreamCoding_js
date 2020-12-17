const btn = document.querySelector('.find');
const rabbit = document.querySelector('.rabbit');

btn.addEventListener('click', ()=> {

    rabbit.scrollIntoView({behavior: 'smooth', block: 'center'});

});