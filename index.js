let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    });

    formBtn.addEventListener('click', () =>{
        loginForm .classList.add('active');
        });
    
    formClose.addEventListener('click', () =>{
            loginForm .classList.remove('active');
            });

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
  }

  searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    });
    
    const MainImg=document.getElementById("MainImg");
    const smallimg=document.getElementsByClassName("small-img");
smallimg[0].onclick = function(){
MainImg.src=smallimg[0].src
}
smallimg[1].onclick = function(){
MainImg.src=smallimg[1].src
}
smallimg[2].onclick = function(){
MainImg.src=smallimg[2].src
}
smallimg[3].onclick = function(){
MainImg.src=smallimg[3].src
}


