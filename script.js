var OwnerId = "447689415272169475"
$.ajax({
  url: "https://api.lanyard.rest/v1/users/" + OwnerId,
  type: "GET",
  success: function(res) {
    var data = res.data;
    var user_data = data.discord_user;
    var avatar_img = "https://cdn.discordapp.com/avatars/" + OwnerId + "/" + user_data.avatar + ".png?size=2048"
    $(".avatar-img").attr("src", avatar_img)
    $(".discord-status").removeAttr("style")
    $(".discord-status").attr("class", $(".discord-status").attr("class") + " " + data.discord_status)
    $(".owner-name").text("(" + user_data.username + ")")
  }
});

function connectToLink(url) {
  window.location.href = url;
};

function copyText(txt) {
  navigator.clipboard.writeText(txt);
  showMessage("!");
};

function showMessage(txt) {
  frame = $(".message-frame");
  old_class = "message-frame ui message-hide";
  frame.text(txt);
  frame.attr("class", "message-frame ui message-show");
  setTimeout(function() {
    frame.attr("class", old_class);
  }, 1000);
};

function sendDiscord(message) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1020973331052232734/UxeMQc49FLsnwisIivLHZMkJkYYZu5wpyFIY4oFTvsHIWMnfWHes8FqP5-weuWI5NOoX");
};
