const openModalButtons = document.querySelectorAll('[data-modal-target]');
// remove this to open modals
// openModalButtons.forEach(button => {
//     button.setAttribute('disabled',true);
// })
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modals = document.querySelectorAll('.services__box__modal.active');
        modals.forEach(modal => {
            closeModal(modal)
        })
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.services__box__modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.services__box__modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
$(document).ready(function() {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        }
    });
    $(".main-nav a").click(function() {
        var self = $(this);
        var target = self.attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top - 79
        }, 1500);
    });
    $(".mobile-nav a").click(function() {
        var self = $(this);
        var target = self.attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top - 49
        }, 1500);
    });
    $('.mobile-btn').click(function() {
        $('.mobile-nav').toggleClass('active');
    });
    $('.mobile-nav__list').click(function(e) {
        if ($(e.target).is('a')) {
            $('.mobile-nav').toggleClass('active');
        }
    });
    setTimeout(function() {
        $('.facebook-widget').hide();
    }, 5000);
});