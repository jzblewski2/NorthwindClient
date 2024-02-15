$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
        // uncheck all checkboxes (FireFox)
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
        });
        // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    var animateArray = ['bounce', 'flash', 'pulse', 'rubberBand', 'headShake', 'swing', 'tada', 'wooble', 'jello', 'heartBeat'];
    var randomizer = Math.floor(Math.random()*animateArray.length);
    var chosen = animateArray[randomizer];
    $('h1.animate__animated').addClass('animate__' + chosen);


    $('#submit').on('click', function () {
        if (!$('.form-check-input').is(':checked')) {
            $('#liveToast').toast('show');
        }
    });

    $('#checkAll').on('click', function () {
        $('.form-check-input').prop('checked', $('#checkAll'));
        $('.form-check-input').each(function () {
            var balloonId = $(this).attr('id');
            if ($(this).is(':checked')) {
                $('#' + balloonId + 'Img').css('visibility', 'visible')
                $('#' + balloonId + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            }
        });
    });

    $('#uncheckAll').on('click', function () {
        $('.form-check-input').prop('checked', false);
        $('.form-check-input').each(function () {
            var balloonId = $(this).attr('id');
            if (!$(this).is(':checked')) {
                $('#' + balloonId + 'Img').removeClass().addClass('animate__animated animate__bounceOutUp');
            }
        });
    });

    $('.form-check-label').hover(
        function () {
            var color = $(this).attr('for');
            console.log(color);
            $('h1').css({"color": color});
            
        },
        function () {
            $('h1').css({"color": "black"});
        }
    );
});