// import 'bootstrap/dist/js/bootstrap';
// import '../sass/style.scss';
// import '../sass/_jumbotron.scss';
// import '../_variables.scss';

// Smooth scroll
$('.navbar a').smoothScroll({
    offset: -60,
    afterScroll: function () {
        $(this).closest('.navbar').find('a').removeClass('active');
        $(this).addClass('active')
    }

});

$('.jumbotron a').smoothScroll({
    offset: -60,


});