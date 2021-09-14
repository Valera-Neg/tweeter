$(document).ready(function() {
$('#tweet-text').on('input', function() {
  let num = 140;
  num -= ($(this).val().length-1);
  if (num > 0) {
    $('.counter').css('color', 'rgb(84, 81, 73)')
    $('.counter').html(--num);
  } else if (num < 0) {
    $('.counter').html(--num);
    $('.counter').css('color', 'red')
  }


 console.log(num)
  
})

 
});