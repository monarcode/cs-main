window.onload = (event) => {
    const navbar = document.querySelector(".navbar");
    var device = navigator.userAgent;

    window.onscroll = ()=> {
        this.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
    }


    console.log(device);

    $('body').scrollspy({
        target: '#nav'
    })
}