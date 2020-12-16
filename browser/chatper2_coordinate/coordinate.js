'use strict';

const textBox = document.querySelector('.textBox');

function update() {
    textBox.innerHTML = `
    window.screen: ${window.screen.width}, ${window.screen.height} <br />
    window.screen은 모니터의 해상도. 브라우저 바깥 부분까지 포함 (모니터 사이즈)<br />
    <br />
    window.outer: ${window.outerWidth}, ${window.outerHeight} <br />
    outer은 브라우저 탭, url, 전체적인 브라우저 크기<br />
    <br />
    window.inner: ${window.innerWidth}, ${window.innerHeight} <br />
    inner은 웹페이지 + scrollbar<br />
    <br />
    documentElement.clientWidth: ${document.documentElement.clientWidth}<br />
    문서 자체. 스크롤바는 제외. 순수 document 사이즈`;
}

update();

window.addEventListener('resize', ()=> {

    update();

});
