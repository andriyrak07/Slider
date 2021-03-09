let slideIndex = 1;
showSlide(slideIndex);


function prev() {
    showSlide(slideIndex += -1)
}

function next() {
    showSlide(slideIndex += 1)
}

setInterval(function(){
    showSlide(slideIndex += 1)
}, 4000) 


function showSlide(n) {
    let slide = document.getElementsByTagName("img");   

    if (n > slide.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slide.length;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[slideIndex-1].animate([
        {display: 'none', opacity: 0.5},

        {display: 'block', opacity: 1}
    ], 2000)
    

    slide[slideIndex-1].style.display = "block";
}
