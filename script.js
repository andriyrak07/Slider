let prev = document.getElementById("prev");
let next = document.getElementById("next");
let pos = 0;
next.addEventListener("click", function(){
    let slide = document.getElementById("polosa");
    pos = pos - 700;
    if (pos <= -2800) {
        pos = 0;
    }
    slide.style.left = pos + "px";
}, false)

prev.addEventListener("click", function(){
    let slide = document.getElementById("polosa");
    pos = pos + 700;
    if (pos > 0) {
        pos = -2100;
    }
    slide.style.left = pos + "px";
}, false)










// let slideIndex = 1;
// showSlide(slideIndex);

// function plusSlide(n) {
//     showSlide(slideIndex += n)
// }

// function showSlide(n) {
//     let slide = document.getElementsByClassName("mySlide");    

//     if (n > slide.length) {
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = slide.length;
//     }

//     for (let i = 0; i < slide.length; i++) {
//         slide[i].style.display = "none";
//     }

//     slide[slideIndex-1].style.display = "block";
// }