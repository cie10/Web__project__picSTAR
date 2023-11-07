'use strict';

// document 는 window에 들어 있다. window는 브라우저에서 제공해주는 객체 (글로벌 객체)
// document 는 문서 전체의 정보를 가지고 있는 객체이다. 
// 우리가 사용할 수 있는 함수도 가지고 있음 

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용 
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    //스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }

});

//Navbar 토글버튼 클릭 처리
const navberMenu = document.querySelector('.header__menu');
const navberToggle = document.querySelector('.header__toggle');
navberToggle.addEventListener('click', () => {
    navberMenu.classList.toggle('open');
    // navberMenu 요소의 클래스 목록에 open 클래스를 토글한다. 
    // 즉, 메뉴가 열려 있으면 "open" 클래스가 추가되고, 메뉴가 닫혀 있으면 "open"클래스가 제거되낟. 
})

// 로그인
const login = document.querySelector('.Login In');
const register = document.querySelector('.Register');

register.addEventListener('click', () => {
    const registerForm = document.querySelector('.register-form');
    const loginForm = document.querySelector('.login-form');
    console.log(registerForm);
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';

})

login.addEventListener('click', () => {
    const registerForm = document.querySelector('.register-form');
    const loginForm = document.querySelector('.login-form');
    console.log(registerForm);
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
})




