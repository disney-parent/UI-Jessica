const imgContent = document.querySelectorAll('.img-content');
imgContent.forEach(function (pic) {
    pic.addEventListener('mouseenter', (event) => event.target.style.transform = 'scale(1.1)');
    pic.addEventListener('mouseleave', (event) => event.target.style.transform = 'scale(1.0)');
});