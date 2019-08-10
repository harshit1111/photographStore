

$(window).ready(function(){


    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position)
        if(position >= 200){
            $('.nav-menu').addClass('custom-nav-menu')
        }else{
            $('.nav-menu').removeClass('custom-nav-menu')
        }

        if(position >= 750){
            $('.mission-img').addClass('fromLeft')
            $('.mission-text').addClass('fromRight')
        }else{
            $('.mission-img').removeClass('fromLeft')
            $('.mission-text').removeClass('fromRight')
        }

        if(position>=4400){
            $('.card1').addClass('fromLeft')
            $('.card2').addClass('fromBottom')
            $('.card3').addClass('fromRight')
        }else{
            $('.card1').removeClass('fromLeft')
            $('.card2').removeClass('fromBottom')
            $('.card3').removeClass('fromRight')
        }
    })

    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter')
        
        $(this).addClass('active-item').siblings().removeClass('active-item')

        if(value === 'all'){
            $('.all').show(300)
        }else{
            $('.all').not('.' + value).hide(300)
            $('.all').filter('.' + value).show(300)
        }
    })

    
})


document.querySelector('.nav-button').addEventListener("click",function(){
    document.querySelector('.nav-button').classList.toggle('change')
   })


