document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
    fixedNav();
});

function fixedNav () {
    const header = document.querySelector('header');
    const seccionInfo = document.querySelector('.info');
    const video = document.querySelector('.video');

    const intersection = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            header.classList.remove('fixed');
        } else {
            header.classList.add('fixed');
        }
    })

    intersection.observe(video);
}

function scrollNav () {
    const enlaces = document.querySelectorAll('.navbar a');
    
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault()

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            })
        })
    })
}