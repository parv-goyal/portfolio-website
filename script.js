// Smooth scrolling
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    );
});

// Form validation
function validateForm() {
    var name = document.forms['contactForm']['name'].value;
    var email = document.forms['contactForm']['email'].value;
    var message = document.forms['contactForm']['message'].value;

    if (name == '' || email == '' || message == '') {
        alert('Please fill in all fields');
        return false;
    }
}
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.popup-menu').classList.toggle('active');
});
