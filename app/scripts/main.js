jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    var slideCount = $('.slider ul li').length;
    var slideWidth = $('.slider ul li').width();
    var slideHeight = $('.slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    var newWidth = 100/slideCount;

    $('.slider').css({ width: slideWidth, height: slideHeight });
    
    $('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('.slider ul li').css({ width: newWidth+'%'}); // because of the slider is full width
    
    $('.slider ul li:last-child').prependTo('.slider ul');    

    function move(direction) {
        switch(direction) {
            case 'left': $('.slider ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('.slider ul li:last-child').prependTo('.slider ul');
                $('.slider ul').css('left', '');
            });
                break;
            case 'right': $('.slider ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('.slider ul li:first-child').appendTo('.slider ul');
                $('.slider ul').css('left', '');               
            });
            break;
            default: break;
        }        
    };

    $('a.prev').click(function () {
        move('left');
    });

    $('a.next').click(function () {
        move('right');
    });

});    
