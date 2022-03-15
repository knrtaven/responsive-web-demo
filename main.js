/** navigation border*/
let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop){
        navbar.addClass("sticky")
    }
    else {
        navbar.removeClass("sticky");
    }

})


/**Counter anim */

let numCount = function(selector){
    $(selector).each(function(){

        $(this).animate({Counter: $(this).text()
        },{
            duration:4000,
            easing:"swing",
            step: function(val){
                $(this).text(Math.ceil(val));
            }
        })
    })
}

let a = 0;
$(window).scroll(function(){
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if(a == 0 && $(window).scrollTop() >= oTop){
        a++
        numCount(".rect > h1");
    }
})