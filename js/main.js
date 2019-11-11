const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const currentElem = document.querySelector('.current');
  const nextElem = document.querySelector('.current').nextElementSibling;
  currentElem.classList.remove('current');
  if (nextElem) {
    nextElem.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
};

const prevSlide = () => {
  const currentElem = document.querySelector('.current');
  const prevElem = document.querySelector('.current').previousElementSibling;
  currentElem.classList.remove('current');
  if (prevElem) {
    prevElem.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
}

next.addEventListener('click', e=>{
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime)
  }
});
prev.addEventListener('click', e=>{
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime)
  }
});

//Auto slide
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime)
}
