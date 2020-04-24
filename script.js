let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slide.legnth;
    }
    for(let i = 0; i < dots.length; i+=1){
        dots[i].className = dots[i].className.replace("active", "");
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}