'use strict';

// 그림 필터링 관련 로직 처리 
const categories = document.querySelector('.categories');
const pictures = document.querySelectorAll('.picture');
const picturesContainer = document.querySelector('.pictures');

categories.addEventListener('click',(event) => {
    const filter = event.target.dataset.category;
    if(filter == null){
        return;
    }
    // Active 메뉴를 재설정 
    const active = document.querySelector('.category--selected');

    active.classList.remove('category--selected');
    event.target.classList.add('category--selected');

    //프로젝트 필터링
    picturesContainer.classList.add('anim-out');

    pictures.forEach((picture) => {
        if(filter === 'all' ||  filter === picture.dataset.type){
            picture.style.display = 'block';
        }
        else{
            picture.style.display = 'none';
        }
    });
    setTimeout(()=>{
        picturesContainer.classList.remove('anim-out');
    }, 250);
});