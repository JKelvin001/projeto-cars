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
    setInterval(() => {nextImage()}, time)

}

window.addEventListener("load", start)