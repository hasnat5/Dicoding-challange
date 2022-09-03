const scroll = document.querySelector(".scrollTop");

document.addEventListener('scroll', function(){
    scroll.classList.toggle("active", window.scrollY > 600)
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToTop(){
    window.scrollTo({
        top : 0,
        behavior: "smooth"
    })
}
