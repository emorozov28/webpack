var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.faq__btn');
    links.on('click', {
        el: this.el,
        multiple: this.multiple
    }, this.dropdown)
}

Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;

    $(this).next().slideToggle();
    $(this).parent().toggleClass('active');

    if (!e.data.multiple) {
        $el.find('.tabs__descr').not($(this).next()).slideUp().parent().removeClass('active');
    };
}

export { Accordion }