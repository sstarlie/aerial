// togle class active

const navbarNav = document.querySelector('.navbar-nav');

//ketika humberger menu di click
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

// nklik di luar side bar untuk hilangin navnya

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){

    if(!hamburger.contains(e.target) && (!navbarNav.contains(e.target))){
        navbarNav.classList.remove('active');
    }
});