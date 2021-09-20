

$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    let num = 140;
    let keyInput = ($(this).val().length-1);
    num -= keyInput;
    if (num > 0) {
      $('.counter').css('color', 'rgb(84, 81, 73)')
      $('.counter').html(--num);
   } else if (num < 0) {
      $('.counter').html(--num);
      $('.counter').css('color', 'red')
     }
  })

  $('.time-ago ').html(timeago.format(1473245023718))
  
});