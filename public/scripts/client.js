/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/*
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at":1631736447449
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1631822847449
  }
]*/

$(function() {

    /**RENDERING ALL TWEETS****/
    const renderTweets = function(data) {
      $('.created-tweets').empty();
      data.forEach((tweet) => {
        const $tempData = createTweetElement(tweet);
        
        $('.created-tweets').prepend($tempData);
      });
      return $(this);
    };
/**RENDERING ONE TWEET****/
  const createTweetElement = function(dataObj) { 
  const $tweet = $(
 
  `
  <div id="tweet-container">
  <div class="user-info">
  <div class="info-container">
   <img class="avatar" src=${dataObj.user.avatars}>
   <span class="user-name"><strong>${dataObj.user.name}</strong></span>
 </div>  

 <div class="handle">
   <span class="user-handle"><strong>${dataObj.user.handle}</strong></span>
 </div>
</div>
  <article class="tweet">
    <header class="tweet-body">
      <p>
      ${dataObj.content.text}
      </p>
    </header>
  <br>
  <footer class="footer-container">
    <div class="time">
      <span class="need_to_be_rendered" datetime="">${timeago.format(dataObj.created_at)}</span>
    </div>
      <div class="reaction-items">
        <i class="fas fa-flag control"></i> 
        <i class="fas fa-retweet control"></i>
        <i class="fas fa-heart control"></i>
      </div>
      </footer>
      <br>
    </article>
    </div>
    </div>
    `);

  return $tweet;
  };

  //renderTweets(data);

/**RECIVE ARRAY OF TWITS FROM '/tweets' ROURE****/
 const loadTweets = () => $.ajax({
    url:'/tweets',
    metod:'GET',
    dataType: "json",
    success: (tweets) => {
      console.log(tweets);
      
      renderTweets(tweets);
      $container =  $('.created-tweets');
      $container.append($tweets);

    },
    error : (error) => {
      console.log(error);
    }
  })
  loadTweets();

 /**TAKE IMPUT FROM USER AND RENDER IN NEW TWEETS****/
  const form = $('#submit-tweet');
  form.on('submit', function(event) {
  event.preventDefault();
  const serializedData = $(this).serialize();
  console.log(serializedData);
//$.post('/tweets', serializedData, () => {}, () => {})
$.post('/tweets', serializedData).then( (resp) => {
  console.log(resp);
  loadTweets();
});


});






});
