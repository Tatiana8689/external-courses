const left = document.querySelector('.btn-left')
const right = document.querySelector('.btn-right')
const imageSlider = document.querySelector('.slides')
const header = document.querySelector('.slider-header')
const images = document.querySelectorAll('.image');

let count = 0;
let array = [];

for (i = 0; i < images.length; i++) {
  array[i] = images[i].src;
  images[i].remove();
}

left.addEventListener('click', prevSlide)
right.addEventListener('click', nextSlide)

function prevSlide(){
  header.style.display = 'none';
  imageSlider.animate([{opacity: '.3'},{opacity: '1'}],
                     {duration: 800, fill: 'forwards'})
  if(count === 0){
    count = array.length;
  }
  
  count--;
  imageSlider.style.backgroundImage = `url(${array[count]})` 
}

function nextSlide(){
  header.style.display = 'none';
  imageSlider.animate([{opacity: '.3'},{opacity: '1'}],
                     {duration: 800, fill: 'forwards'})
  if(count === array.length -1){
    count =-1;
  }
  
  count++;
  imageSlider.style.backgroundImage = `url(${array[count]})`
}
