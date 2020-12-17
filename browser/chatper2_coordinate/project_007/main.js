const target = document.querySelector('.target');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const coordinates = document.querySelector('span');

document.addEventListener('mousemove', (e)=> {
    let x = e.clientX + 'px';
    let y = e.clientY + 'px';
    
    horizontal.style.top = y;
    target.style.top = y;
    target.style.left = x;
    coordinates.style.top = y;
    coordinates.style.left = x;
    vertical.style.left = x;

    coordinates.innerText = `${x}, ${y}`;
});