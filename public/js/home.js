window.addEventListener("scroll", function(e){ 
const scrollnav= document.querySelector('nav');
    scrollnav.style.transition= 'all .8s';
    scrollnav.classList.toggle('scroll', window.scrollY >200);
    alert('hello');
})


const icons = Array.from(document.querySelectorAll('.icon'))
icons.forEach((icon) => {
    icon.addEventListener('click', () => {
    icons.forEach((i) => {
        i.classList.remove('icon--expanded');
    });
    icon.classList.add('icon--expanded')    
    })
})



var elem = document.querySelector('.grid-slider-wrap');
// var flkty = new Flickity( elem, {
//     // options
//     cellAlign: 'left',
//     autoPlay:true,
//     autoPlay: 1500,
//     contain: true
// });