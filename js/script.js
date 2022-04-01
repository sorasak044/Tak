let searchBtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');





searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});

