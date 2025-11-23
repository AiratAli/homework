(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 1200) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    };

// Слайдер
var swiper = new Swiper(".protein__slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    pagination: {
        el: ".protein__pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

// Бегущая строка
document.addEventListener('DOMContentLoaded', function() {
    const runningLine = document.querySelector('.typessport__runningline');
    const content = runningLine.innerHTML;
    runningLine.innerHTML = content + content + content + content;
});

})()