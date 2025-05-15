var OwnerId = "447689415272169475";

async function getToken(){
    const authOptions = {
        url: `https://accounts.spotify.com/api/token`,
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa("d8c3022cde5945c7b1013d42229065c7" + ':' + "d7377b7d4dc14243a99a7be605e324fd"),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    };

    fetch(authOptions.url, authOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data.access_token);
        }).catch(error => {
            console.error(error);
    });
}

async function getSpotifyTrackImage(trackId, accessToken) {
  trackID= "70eXNgWj0dyPDvIcCgXJ0N";
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer BQB7fevcBtDD1B7ORlCpyvYcPcTQt5e6Mmiqlpd6HyltKhGQR05Fnx3UiuKcoU9QS3otMnePBetMyBnk_SJ2Agn036eH4PKB9O9kAVSETJpd3FQrfQAYed8cM1SpuZwPC1xFibgORLE");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const response = fetch(`https://api.spotify.com/v1/tracks/70eXNgWj0dyPDvIcCgXJ0N`, requestOptions)
  .then(response => response.json())
        .then(data => {
            console.log(data.album.images[2].url);
        }).catch(error => {
            console.error(error);
    });
}

function updateWeather(cityName) {
  const API_KEY = "d4421fae8cf9703a02992dc4e5e0a97d"; 
  const url = `https://api.openweathermap.org/data/3.0/weather?q=${cityName},VN&appid=${API_KEY}&units=metric`;

  $.getJSON(url, function(res) {
    const weather = res.weather[0].main;
    const temp = Math.round(res.main.temp);
    $(".weather").text(`${weather} • ${temp}°C`);
  });
}
function formatElapsedTime(startTimestamp) {
  const now = Date.now();
  const elapsed = Math.max(0, now - startTimestamp);
  const seconds = Math.floor(elapsed / 1000) % 60;
  const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function updateProgressBar(start, end) {
  const now = Date.now();
  const total = end - start;
  const elapsed = now - start;
  const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
  $(".progress-fill").css("width", `${percent}%`);
}

function clearLores() {
  $(".lore-1, .lore-2, .lore-3, .logo").html("");
}

function updateDiscordInfo() {
  $.ajax({
    url: "https://api.lanyard.rest/v1/users/" + OwnerId,
    type: "GET",
    success: function (res) {
      const data = res.data;
      const user = data.discord_user;
      const avatar = `https://cdn.discordapp.com/avatars/${OwnerId}/${user.avatar}.png?size=2048`;
      $(".avatar-img").attr("src", avatar);
      $(".status-dot").attr("class", "status-dot " + data.discord_status);
      $(".owner-name").text("(" + user.username + ")");
      $(".clock").text(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));

      if (data.spotify) {
        const act = data.spotify;
        $(".lore-1").html(`<p style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap; margin: 0">${act.song}</p>`);
        $(".lore-2").text(act.artist);
        $(".lore-3").html(`
          <div class="music-progress-bar" style="margin: 0 0 5px 0">
            <div class="progress-fill"></div>
          </div>
        `);
        $(".logo").html(`<img src="${act.album_art_url}" width="64" height="64" style="border-radius: 8%; margin: 5px 0" alt="Song art" />`);
        updateProgressBar(act.timestamps.start, act.timestamps.end);
      } else {
        clearLores();
        const act = data.activities.find(a => a.type === 0);
        if (act) {
          $(".lore-1").html(`<p style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap; margin: 0">${act.name}</p>`);
          $(".lore-2").html(`<p style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap; margin: 0">${act.details}</p>`);
                  $(".lore-3").html(`
          <div style="font-size: 16px; color: #aaa;">⏱ ${formatElapsedTime(act.timestamps.start)}</div>
        `);
          if (act.assets && act.assets.large_image) {
            const imgKey = act.assets.large_image;
            const isExternal = imgKey.startsWith("mp:external");
            const imageUrl = isExternal
              ? `https://media.discordapp.net/${imgKey.replace("mp:", "")}`
              : `https://cdn.discordapp.com/app-assets/${act.application_id}/${imgKey}.png`;
            $(".logo").html(`<img src="${imageUrl}" width="64" height="64" style="border-radius: 8%; margin: 5px 0" alt="Activity art" />`);
          }
        } else {
          clearLores();
          $(".lore-1").html(`<p style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap; margin: 0">Vô triing</p>`);
            $(".logo").html(`<img src="./alyaafk.gif" width="128" height="64" style="border-radius: 8%; margin: 5px 0" alt="Activity art" />`);
        }
      }
    },
    error: function (err) {
      console.error("Failed to fetch Discord info:", err);
    }
  });
}


function updateProgressBar(startTimestamp, endTimestamp) {
  const bar = document.querySelector('.progress-fill');
  if (!bar || endTimestamp === 0 || startTimestamp === 0) return;

  const now = Date.now();
  const total = endTimestamp - startTimestamp;
  const elapsed = now - startTimestamp;

  let percent = (elapsed / total) * 100;
  percent = Math.min(Math.max(percent, 0), 100); 

  bar.style.width = percent + "%";
  console.log(percent);
}


updateDiscordInfo();
function update() {
  updateWeather("Thu Duc");
  updateDiscordInfo();
  //getToken();
  //getSpotifyTrackImage(0,0);
}
setInterval(update, 1000);


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
  request.open("POST", "https://discord.com/api/webhooks/1372554993919594557/XyopZwLbV1GP5tHUA2vpRlz775JlPpubkCOa6Q3f9zHm0b46nVj1D0ki4uXe7FEWZ_Xi");
};
