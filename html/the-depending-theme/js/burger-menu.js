let burgerIMG = document.querySelector('.burger-img');
let burgerMenu= document.querySelector('.burger-menu');
let body= document.querySelector('body');

burgerIMG.onclick=function Activ()
{
    burgerMenu.classList.toggle("activ-burger-menu");
    body.classList.toggle("lock");       
}
