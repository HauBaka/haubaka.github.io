

function join() {
    const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var des = 'No data';
    if (urlParams.has('fbclid')) {
        des = 'Facebook';
    }
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const payload = {
        embeds: [
            {
                title: '✅ NEW ACCESS',
                description: des +" - " + getDeviceType(),
                color: 0x7289DA,
                fields: [
                    { name: "🌍 Timezone", value: timezone },
                ],
                timestamp: new Date().toISOString()
            },
        ],
    };
    sendWebhook(payload);
}
function removeOverlay() {
    var overlay = document.querySelector('.overlay');
    var music = document.getElementById('background-music');
    overlay.classList.add('hidden');
    music.play();
     join()
}
