let slide=0
let slides=document.querySelectorAll('.carousel-images img')
function updte()
{
    let carWidth=document.querySelector('.carousel').clientWidth;
    let offset=-carWidth*slide
    document.querySelector('.carousel-images').style.transform=`translateX(${offset}px)`
}

document.querySelector('.prev').addEventListener('click', function(){
slide=(slide==0)?slides.length-1:slide-1
updte()
})
document.querySelector('.next').addEventListener('click', function(){
    slide=(slide==slides.length-1)?0:slide+1
    updte()
})