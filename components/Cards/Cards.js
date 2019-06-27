const imgContent = document.querySelectorAll('.card');
imgContent.forEach(function (card) {
    card.addEventListener('mouseenter', (event) => event.target.style.transform = 'scale(1.1)');
    card.addEventListener('mouseleave', (event) => event.target.style.transform = 'scale(1.0)');
});