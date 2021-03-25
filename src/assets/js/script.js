// import Modal from '../libs/modal/modal.js';

$(() => {
    // const burgeBtn 
    $('.burger-menu').on('click', function() {
        console.log($(this));
        $(this).toggleClass('active');
        $('.header__nav').slideToggle();
    });

    function columnHeight(selector) {
        let maxHeight = 0;
        $(selector).each(function () {
            if ($(this).height() > maxHeight) maxHeight = $(this).height();
        });

        $(selector).height(maxHeight);
    }

    columnHeight($('.services__title'));


})