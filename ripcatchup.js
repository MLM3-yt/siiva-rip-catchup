// Template URL for temporary playlists: https://www.youtube.com/watch_videos?video_ids=[video ID 1],[video ID 2]

function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey("AIzaSyAeQ60TVR_dnAuBKB8LR561DwZ4jpLa6jg");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.playlistItems.list({
    "part": [
      "contentDetails"
    ],
    "maxResults": 50,
    "playlistId": "UULF9ecwl3FTG66jIKA9JRDtmg"
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}

document.getElementById("demo").innerHTML = execute();