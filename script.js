// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

let params;
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)

//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    // videoId: "UNuBKZoinDI",

    //  it's properties identify player parameters, used to customize the player
    playerVars: {
      playsinline: 1,
      autoplay: 1,
      // listType: "playlist",
      list: "TLGGr2XhoS2AYZwxNTEyMjAyNA",
      loop: 1,
      mute: 1,
      controls: 1,
      // origin: "https://base.com",
      hl: "hi",
      cc_lang_pref: "en",
      // start: 23, // similar to  seekTo function  // causes the player to begin playing the video at the given number of seconds from the start of the video
      rel: 0, //indicates whether the player should show related videos or not
      enablejsapi: 1, //enables the player to be controlled via IFrame Player API calls
      disablekb: 0, //keyboard controls are enabled (by default)
      // end: 4,  //after how many seconds player should stop playing the video.
      // playlist: "frZkjz9MaWg,UNuBKZoinDI,LhRfkaMp7g0", // comma-separated list of video IDs to play. the first video that plays will be the VIDEO_ID specified in the URL path, and the videos specified in the playlist parameter will play thereafter.
    },

    //it's properties identify the events that the API fires ,and the functions (event listeners) that the API will call when those events occur
    events: {
      // events |  functions(eventListeners)
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      // onPlaybackRateChange: print, // event fires whenever we change speed
    },
  });
}

// function onYouTubePlayerAPIReady() {
//   console.log("playlist");
//   player = new YT.Player("player", {
//     height: "390",
//     width: "640",
//     playerVars: {
//       listType: "playlist",
//       // controls: 1,
//       autoplay: 1,
//       mute: 1,
//       list: "PL6Rtnh6YJK7bELUlc9gQ72QF20LSQWTAA",
//     },
//   });
// }
function print() {
  console.log(player.getPlaybackRate());
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  console.log("aman");
  params = new URLSearchParams(player.getVideoUrl().split("?")[1]);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  console.log(event.data);
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    // done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

//
//Functions =>
//   -> Queueing functions
//        - Queueing functions allow you to load and play a video, a playlist, or another list of videos.
//
//
//Some Queueing functions are as follows  ==>
// (1)- Queueing functions for videos ->

//***   player.cueVideoById(videoId:String,startSeconds:Number)
//***   player.loadVideoById(videoId:String,startSeconds:Number)

//***   player.cueVideoByUrl(mediaContentUrl:String,startSeconds:Number) //The player does not request the FLV until playVideo() or seekTo() is called.
//***   player.loadVideoByUrl(mediaContentUrl:String,startSeconds:Number)

//
// (1)- Queueing functions for lists ->

//***  player.loadPlaylist(playlist:String|Array,index:Number,startSeconds:Number) //optional index parameter specifies the index of the first video in the playlist that will play
//object syntax-     player.loadPlaylist({list:String,
//                           index:Number,
//                           startSeconds:Number})
//***  player.cuePlaylist(playlist:String|Array,index:Number,startSeconds:Number) //optional index parameter specifies the index of the first video in the playlist that will play
// object syntax-     player.loadPlaylist({list:String,
//                           listType:String,
//                           index:Number,
//                           startSeconds:Number})

//
// (2)- Playing a video in a playlist ->

//***   player.nextVideo()
//***   player.previousVideo()
//***   player.playVideoAt(index:Number)

//  Changing the player volume ->

//***   player.mute()
//***   player.unMute()
//***   player.isMuted()
//***   player.setVolume(volume:Number)
//***   player.getVolume()       // [0 - 100]

// setting player size ->
//***  player.setSize(width:Number, height:Number)    //:Object

// Setting the playback rate/speed -> [0 - 2]
//***   player.getPlaybackRate():Number
//***   player.setPlaybackRate(suggestedRate:Number)
//***   player.getAvailablePlaybackRates():Array

// Setting playback behavior for playlists->
//***   player.setLoop(loopPlaylists:Boolean)
//***   player.setShuffle(shufflePlaylist:Boolean)   //  shuffle/change the playlist's videos order if we pass true

// Playback status ->information
//***   player.getVideoLoadedFraction():Float     // Returns a number between 0 and 1 that specifies the percentage of the video that the player shows as buffered
//***   player.getCurrentTime():Number     // Returns the elapsed time in seconds since the video started playing.

// Retrieving video  ->
//***   player.getDuration():Number      // Returns the duration in seconds of the currently playing video
//***   player.getVideoUrl():String
//***   player.getVideoEmbedCode():String

// Retrieving playlist information ->
//***   player.getPlaylist():Array     // returns an array of the video IDs in the playlist as they are currently ordered
//***   player.getPlaylistIndex():Number    // returns the index of the playlist video that is currently playing

// Accessing and modifying DOM nodes ->
//***   player.getIframe():Object      // returns the DOM node for the embedded <iframe>
//***   player.destroy():Void      // Removes the <iframe> containing the player.

// Adding or removing an event listener ->
//***   player.addEventListener(event:String, listener:String):Void
//***   player.removeEventListener(event:String, listener:String):Void

// // // // ------  videoId has 11 character always
