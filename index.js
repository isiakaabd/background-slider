const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let activeSlides = 0;


// clciking on left btn
leftBtn.addEventListener("click", ()=> {
    activeSlides--


    if(activeSlides < 0){
        activeSlides = slides.length - 1
    }
    bgImage()
    setSlideActive()
})


// clicking on right button
rightBtn.addEventListener("click", ()=> {
    activeSlides++

    if(activeSlides > slides.length - 1){
        activeSlides = 0
    }

    bgImage()
    setSlideActive()
  
})

bgImage()


// background image for the slides
function bgImage() {
    body.style.backgroundImage = slides[activeSlides].style.backgroundImage
}

//active slide
function setSlideActive(){
    slides.forEach((slide)=> slide.classList.remove("active"))
   
    slides[activeSlides].classList.add("active")
}