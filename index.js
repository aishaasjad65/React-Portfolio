$(document).ready(function(e){
    var win = window;
    var navbar = document.getElementById('header');
    var toggle = document.getElementsByClassName('toggle-button');
    var width = navbar.offsetWidth;
    toggle_onclick(win, navbar, width);
    // resize event
    win.resize(function(){
        toggle_onclick(win, navbar, width);
    })
    toggle.click(function(e){
        navbar.classList.toggle("toggle-left");
    })
});
function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed' , {
    strings: [
        'React Developer',
        'Web Designer',
        'AWS Community Builder',
        'Hack Club Leader',
        'Agora.io Student Ambassador',
        'Technology Evangelist',
        'GitKraken Ambassador',
        'Research Student',
        'Tech. Community Nerd',
        '#MSFT Tech. Associate',
        '#MSFT Certified Trainer',
        'Writer',
        'Illustrator',
        'UI/UX Engg.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        'React Developer',
        'Web Designer',
        'AWS Community Builder',
        'Hack Club Leader',
        'Agora.io Student Ambassador',
        'Technology Evangelist',
        'GitKraken Ambassador',
        'Research Student',
        'Tech. Community Nerd',
        '#MSFT Tech. Associate',
        '#MSFT Certified Trainer',
        'Writer',
        'Illustrator',
        'UI/UX Engg.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


