var slideIndex, xDown, mediaScreen;
slideIndex = 1;
mediaScreen = window.screen.width;

/* отслеживание изменения размера экрана */
window.addEventListener('resize', event => {
    mediaScreen = window.screen.width;
    slideIndex = 1;
    showSlides(slideIndex);        
  }, false);


showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Touch-пролистывание слайдера */
document.getElementById("slider-wrapp").addEventListener('touchstart', start, false);
document.getElementById("slider-wrapp").addEventListener('touchend', end, false);
function start(evn) {
    xDown = evn.touches[0].clientX;
}
function end(evn) {
    if(! xDown) {
        return;
    }
    var xUp = evn.changedTouches[0].clientX;
    
    var xDiff = xDown - xUp;
    if (xDiff > 0) {
        if (mediaScreen < 600) {
            showSlides(slideIndex += 1);
        }
        if (mediaScreen >=600 && mediaScreen < 1280) {
            showSlides(slideIndex += 2);
        }
    } else {
        if (mediaScreen < 600) {
            showSlides(slideIndex -= 1);
        }
        if (mediaScreen >=600 && mediaScreen < 1280) {
            showSlides(slideIndex -= 2);
        }
    }
}



function showSlides(n) {
    var i, slides, dots;
    slides = document.getElementsByClassName("slider-wrapp__item");
    dots = document.getElementsByClassName("dot");
    /* 320...600 */
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        if (mediaScreen < 600) {
            slideIndex = slides.length;
        } else if (mediaScreen >= 600 && mediaScreen < 1280) {
            slideIndex = slides.length - 1;
        }         
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    if(mediaScreen < 600) {
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    } else if (mediaScreen >= 600 && mediaScreen < 1280) {
        slides[slideIndex-1].style.display = "block";
        slides[slideIndex].style.display = "block";
        dots[slideIndex-1].className += " active";
    } else {
        if (n > 7) {
            slideIndex = 1;
        } else if ( n < 1) {
            slideIndex = 7;
        }
        for (i = -1; i < 3; i++) {
            let four = slideIndex + i;
            slides[four].style.display = "block";                
        }
        console.log(slideIndex);
    }
}

