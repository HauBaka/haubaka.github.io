function join() {
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
                description: des,
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
