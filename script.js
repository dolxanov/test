$('img').mouseenter(function(){
    let bigImg = $(this).attr('src');
    $('.fon').css({
        'display' : 'block',
        'background-image' : `url("${bigImg}")`
     })
})

$('#fonId').click(function (){
    console.log('test')
    let fonImg = $(this).attr('src');
    $('.bg'). css({
        "display" : 'block',
        'background-image' : `url("${fonImg}")`
    })
    console.log(fonImg)
})
// $('.fon').click(function (){

// })

