// Menu
let header_nav_burger = document.querySelector('.header_nav_burger');
let menu = document.querySelector('.menu');

header_nav_burger.addEventListener('click', function(){
	header_nav_burger.classList.toggle('active');
	menu.classList.toggle('active');
})

// Slaider
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  