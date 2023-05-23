let mobileMenu = document.querySelector('#mobile-menu');
let navbar = document.querySelector('nav');



mobileMenu.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('change');
    

    if(navbar.style.display === 'block'){
        navbar.style.display = 'none';
    }
    else{
        navbar.style.display = 'block';
    }
});