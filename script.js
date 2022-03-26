let slideIndex = [0,0,0,0,0,0];

function showSlides(j) {

    // Function was not working properly due to some reason so had to write redundant code
    document.querySelector('#content-img-1').addEventListener('mouseover', () => {
        document.querySelector('#hover-1').style.opacity = 1;
    });
    document.querySelector('#content-img-1').addEventListener('mouseout', () => {
        document.querySelector('#hover-1').style.opacity = 0;
    });
    document.querySelector('#content-img-2').addEventListener('mouseover', () => {
        document.querySelector('#hover-2').style.opacity = 1;
    });
    document.querySelector('#content-img-2').addEventListener('mouseout', () => {
        document.querySelector('#hover-2').style.opacity = 0;
    });
    document.querySelector('#content-img-3').addEventListener('mouseover', () => {
        document.querySelector('#hover-3').style.opacity = 1;
    });
    document.querySelector('#content-img-3').addEventListener('mouseout', () => {
        document.querySelector('#hover-3').style.opacity = 0;
    });
    document.querySelector('#content-img-4').addEventListener('mouseover', () => {
        document.querySelector('#hover-4').style.opacity = 1;
    });
    document.querySelector('#content-img-4').addEventListener('mouseout', () => {
        document.querySelector('#hover-4').style.opacity = 0;
    });
    document.querySelector('#content-img-5').addEventListener('mouseover', () => {
        document.querySelector('#hover-5').style.opacity = 1;
    });
    document.querySelector('#content-img-5').addEventListener('mouseout', () => {
        document.querySelector('#hover-5').style.opacity = 0;
    });
    document.querySelector('#content-img-6').addEventListener('mouseover', () => {
        document.querySelector('#hover-6').style.opacity = 1;
    });
    document.querySelector('#content-img-6').addEventListener('mouseout', () => {
        document.querySelector('#hover-6').style.opacity = 0;
    });

    // slideshow
    let slides = document.getElementsByClassName('img-'+(j+1));
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex[j]++;
    if (slideIndex[j] > slides.length) {
        slideIndex[j] = 1;
    }

    slides[slideIndex[j]-1].style.display = 'block';  
    setTimeout(showSlides, 3000, j);
}

function showContent(j) {

    console.log('mousein');
    document.querySelector('#hover-'+j).style.display = 'block';
}

function hideContent(j) {

    document.querySelector('#hover-'+j).style.display = 'none';
}

for(let j=0; j<6; j++) {
    showSlides(j);
}