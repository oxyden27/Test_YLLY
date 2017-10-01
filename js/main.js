$(document).ready(function () {
    //smooth scroll
    $('a[href^="#"]').click(function () {
        let the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
        return false;
    });
    //ScrollTop
    let scrollTop = $(".scrollTop");
    $(window).scroll(function () {
        let topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        }
        else {
            $(scrollTop).css("opacity", "0");
        }
    });
    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    ///RESIZE FORM
    let $height_zone_left_form = $('.zone_left_form');

    function resize_Right() {
        $('.text_area_message').css({
            width: $height_zone_left_form.width()
            , height: ($height_zone_left_form.height() - 26)
            , maxWidth: $height_zone_left_form.width()
        })
    }
    resize_Right();
    //resize input submit for mobile devices
    function mobileResize() {
        if ($(window).width() < 735) {
            $('#bouton_envoi').css({
                width: $height_zone_left_form.width()
            })
        }
    }
    mobileResize()
        //REPLACE SCROLL button
    let $window = $(window);

    function replace_scroll() {
        let pos_left = (($(window).width() / 2) - 142)
        $('#ToScroll').css({
            left: pos_left
        })
    }
    replace_scroll();
    //RESIZE SLIDER
    function fullSize() {
        $('#slider').css({
                width: $window.width()
                , height: $window.height()
            })
            // si le support fait plus de 1024px tu me redimenssionne
        if ($(window).width() > 1024) {
            $('#content').css({
                height: $window.height()
            })
            $('#zone_form').css({
                height: $window.height()
            })
        }
        /// if not , put the real height on div
        else {
            $('#content').css({
                height: 'inherit'
            })
            $('#zone_form').css({
                height: 'inherit'
            })
        }
    }
    fullSize();
    // on window resize execut resize right and fullsize for slider
    $(window).resize(function () {
        fullSize();
        resize_Right();
        mobileResize();
        replace_scroll();
    });
    // on change check if input has value 
    $("input[type='text'], input[type='email'], input[type='tel'], textarea").change(function () {
        if (($("input[type='text']").val().length != 0) && ($("input[type='email']").val().length != 0) && ($("textarea").val().length != 0)) {
            //is has value add remove attr disabled
            $('#bouton_envoi').removeAttr('disabled');
        }
        else {
            //if not value add attr disabled
            $('#bouton_envoi').attr('disabled', 'disabled');
        }
    });
    /// VALIDATE FORM (for security check all input and regex for email)
    let formValid = document.getElementById('bouton_envoi');
    let prenom = document.getElementById('prenom');
    let missPrenom = document.getElementById('missPrenom');
    let nom = document.getElementById('nom');
    let missNom = document.getElementById('missNom');
    let mail = document.getElementById('mail');
    let missMail = document.getElementById('missMail');
    let message = document.getElementById('message');
    let missMessage = document.getElementById('missMessage');
    formValid.addEventListener('click', validation);
    formValid.addEventListener('click', checkEmail);
    // check if input is empty    
    function validation(event) {
        //si le champ est vide
        if (prenom.validity.valueMissing) {
            event.preventDefault();
            missPrenom.textContent = 'Prénom manquant';
            missPrenom.style.color = 'red';
        }
        if (nom.validity.valueMissing) {
            event.preventDefault();
            missNom.textContent = 'Nom manquant';
            missNom.style.color = 'red';
        }
        if ((message.validity.valueMissing)) {
            event.preventDefault();
            missMessage.textContent = 'Message manquant';
            missMessage.style.color = 'red';
        }
    }
    // check validity mail    
    function checkEmail() {
        let email = document.getElementById('mail');
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email.value)) {
            event.preventDefault();
            missMail.textContent = 'E-mail non valide';
            missMail.style.color = 'red';
            return false;
        }
    } /// FIN VALIDATION FORMULAIRE  
}); // document ready fini