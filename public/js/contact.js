

// --------------------------------------------------------
//Contact Form
// --------------------------------------------------------

jQuery(document).ready(function () {

    $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function () {
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
    });
    $('.contact-form form').submit(function (e) {
        e.preventDefault();
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
        var postdata = $('.contact-form form').serialize();
        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: postdata,
            dataType: 'json',
            success: function (json) {
                if (json.nameMessage != '') {
                    $('.contact-form form .contact-name').addClass('input-error');
                }
                if (json.emailMessage != '') {
                    $('.contact-form form .contact-email').addClass('input-error');
                }
                if (json.subjectMessage != '') {
                    $('.contact-form form .contact-subject').addClass('input-error');
                }
                if (json.messageMessage != '') {
                    $('.contact-form form textarea').addClass('input-error');
                }
                if (json.nameMessage == '' && json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
                    $('.contact-form form').fadeOut('fast', function () {
                        $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                    });
                }
            }
        });
    });


});




