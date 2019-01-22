$(function () {

    //слайдер
    $('.main_slider').each(function(){
        var li = $('li', this);
        var prev = $('.prev', this);
        var next = $('.next', this);
        //вывод количества
        var current = $('.main_slider_controls_count span', this);
        var count = $('.main_slider_controls_count ins', this);
        //точки управление галереей
        var pags = $('.main_slider_controls_pags', this);

        li.eq(0).addClass('active');
        //вывод количества
        count.text('0' + li.length);
        current.text(li.filter('.active').index() + 1);

        //добавляем точки галерея
        li.each(function(){
            pags.append('<span></span>');
        })
        var pag = $(pags.find('span'));
        pag.eq(li.filter('.active').index()).addClass('active');

        prev.click(function(){
            var index = li.filter('.active').index();
            if(index == 0){
                index = li.length;
            }
            li.eq(index-1).addClass('active').siblings().removeClass('active');
            pag.eq(index-1).addClass('active').siblings().removeClass('active');//точки
            current.text(index); //вывод количества
        });

        next.click(function(){
            var index = li.filter('.active').index();
            if(index == li.length - 1){
                index = -1;
            }
            li.eq(index+1).addClass('active').siblings().removeClass('active');
            pag.eq(index+1).addClass('active').siblings().removeClass('active');//точки
            current.text(index + 2); //вывод количества
        });

        pag.click(function(){
            li.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
            current.text(li.filter('.active').index() + 1);

        })

    });
    // 

    //таймер обратного отсчета
    $('.countdown').final_countdown({
        'start': 1362139200,
        'end': 1388461320,
        'now': 1387461319        
    });

    //популярные товары галерея
    $('.popular_gallery').each(function(){
        var $prevImg = $('.popular_gallery_prev span', this);
        var $mainImg = $('.popular_gallery_main img', this);

        $prevImg.click(function(){
            $mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        })

    })

        //популярные товары табы
        $('.popular').each(function(){
            var $tabBlock = $('.popular_all_tabs_block ul', this);
            var $tabBtn = $('.popular_tab_btns a', this);
    
            $tabBtn.click(function(){
                $tabBlock.eq($(this).index()).addClass('active').fadeIn().siblings().removeClass('active').hide();
                $(this).addClass('active').siblings().removeClass('active');
                return false;
            })
    
        });

        //галерея внизу
        $('.black_section_carousel li').each(function(){
            var $prevImg = $('.black_section_carousel_prevnimg span', this);
            var $mainImg = $('.black_section_carousel_mainimg img', this);
    
            $prevImg.click(function(){
                $mainImg.eq($(this).index()).addClass('active').siblings().removeClass('active');
                $(this).addClass('active').siblings().removeClass('active');
            })
    
        });

           //слайдер внизу
    $('.black_section_carousel').each(function(){
        var li = $('li', this);
        var prev = $('.prev', this);
        var next = $('.next', this);
        //вывод количества
        var current = $('.main_slider_controls_count span', this);
        var count = $('.main_slider_controls_count ins', this);

        li.eq(0).addClass('active');

        prev.click(function(){
            var index = li.filter('.active').index();
            if(index == 0){
                index = li.length;
            }
            li.eq(index-1).addClass('active').siblings().removeClass('active');
        });

        next.click(function(){
            var index = li.filter('.active').index();
            if(index == li.length - 1){
                index = -1;
            }
            li.eq(index+1).addClass('active').siblings().removeClass('active');
        });
    });

    //якорь медленная прокрутка
    $('header a').click(function(){
        let link = $(this).attr('href');
        let coordinats = $(link).offset().top;
        $('html, body').animate({scrollTop:coordinats}, 1000);
        return false;
    })

    //popup
    $('.open_popup').click(function(){

        $('.popup .popup_title').text($(this).data('title'));
        $('.popup .popup_category').text($(this).data('category'));
        $('.popup .popup_desc').text($(this).data('desc'));
        $('.popup .price span').text($(this).data('price'));
        $('.popup .popup_img img').attr('src', $(this).data('img'));
        

        $('.popup').fadeIn();
        $('.bg_popup').fadeIn();
        return false;
    });
    $('.bg_popup, .close').click(function(){
            $('.popup').fadeOut();
            $('.bg_popup').fadeOut();
    });

    //кнопка меню
    $('.menu_toggle').click(function(){
        if($(this).hasClass('active')){
            $('header nav').removeClass('active');
            $(this).removeClass('active');
        }
    else{
        $('header nav').addClass('active');
        $(this).addClass('active');
    }
    });

    
});