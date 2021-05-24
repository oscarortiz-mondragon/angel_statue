
$('document').ready(function(){
$(".bOut").on('click',function(){
$(".outDoor").hide();
$(".inDoor").show();

})})


$('document').ready(function(){
$(".bIn").on('click',function(){
$(".inDoor").hide();
$('.outDoor').show();

})})


$('document').ready(function(){
$(".bAll").on('click',function(){
$('.col').show();

})})
// $('.carousel').carousel({
//   interval: 2000
// })

$('document').ready(function(){
$('i').on('mouseover',function(){
$('i').css('color','blue')
})

})
$('document').ready(function(){
$('i').on('mouseleave',function(){
$('i').css('color','black')

})

})
$('document').ready(function(){
$('i').on('click',function(){
$(this).removeClass("fas fa-shopping-cart iCart");
$(this).addClass("fas fa-check iCheck")
$(this).text("Added!")


})
})
$('document').ready(function(){
  $('i').on('click',function(){
    $('.iCheck').css('color','green')
  })
})

$('document').ready(function(){
  $('i').on('mouseover',function(){
    $('.iCheck').css('color','green')
  })
})





