let time = 7000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#special-offer img")
    max = images.length;

function nextImage(){
    images[currentImageIndex]
        .classList.remove("main-image")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("main-image")    
}

function start(){
    setInterval(() => {nextImage(), nextText()}, time)

}

window.addEventListener("load", start)
/*-----------------------------------------------------*/



let timet = 7000,
    currentTextIndex = 0,
    texts = document.querySelectorAll("#text-offer h1")
    maxt = texts.length;


function nextText(){
    texts[currentTextIndex]
        .classList.remove("main-text")
    
    currentTextIndex++
    
    if(currentTextIndex >= maxt)
        currentTextIndex = 0
    
    texts[currentTextIndex]
        .classList.add("main-text")  
    }
function startt(){
    setInterval(() => {nextText()}, timet)
    
}
window.addEventListener("load", startt)