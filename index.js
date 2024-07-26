const slide1 = document.getElementById('slide1');

(function setCarouselImagesOnMobile(){
    var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

    console.log(isMobile)

    if (isMobile){
        slide1.style.backgroundImage = "url('https://free3d.com/img/selections/feat-May2019.jpg')";

    }

 
})
