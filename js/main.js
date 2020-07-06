// YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
    'youtube',
    {
      videoId: 'GlhV-OKHecI', // YouTubeのvideoIdを入れる
      playerVars: {
        controls: 0, // コントローラー非表示
        disablekb: 1, //キーボード操作無効   
        autoplay: 1, // 自動再生オフ
        loop: 1, // ループさせる
        iv_load_policy: 3, // アノテーションオフ
        modestbranding: 1,  // ロゴを非表示
        rel: 0,  // オススメ動画を表示させない
        showinfo: 0 // タイトル表示
      },
      events: {
        'onReady': onPlayerReady
      }
    }
  );
}
function onPlayerReady(event) {
  event.target.setVolume(0);
}
// slick
$(document).ready(function(){
  $('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  centerPadding: "20%",
  centerMode: true,
  accessibility: false
  });
});
