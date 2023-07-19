const webhookURL = 'https://ptb.discord.com/api/webhooks/1125813799967002698/ce5p9J8TGOfU87PS7Io1SxgLDpeVq0BggnwQao3j0hlWuuFVeqPEPU9ShGG-ht49Jc2T';
const rateLimitTime = 5000; // Time limit in milliseconds (e.g., 5000ms = 5 seconds)
let lastSubmissionTime = 0;
function sendWebhook(payload) {
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}

function sendMessage() {
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < rateLimitTime) {
        alert('You have been ratelimited for 5s.\n You want to spam me!'); // Display an alert if the rate limit is triggered
        return; // Exit the function without sending the webhook
    }

    const nameInput = document.querySelector('.name-input');
    var name =  nameInput.value.trim();
    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (name === '') {
        name = 'Ẩn danh'
    }
    if (message === '') {
        alert('You cant leave it blank :/\nhmmm Say st :>>> :/'); // Display an alert if the message is empty
        return; // Exit the function without sending the webhook
    }

    const payload = {
        embeds: [
            {
                title: name,
                description: message,
                color: 0x7289DA,
                fields: [
                    { name: "🌍 Timezone", value: timezone },
                ],
                timestamp: new Date().toISOString()
            },
        ],
    };
    sendWebhook(payload); // Call the function to send the webhook

    lastSubmissionTime = currentTime; // Update the last submission time
    messageInput.value = ''; // Clear the input field
    nameInput.value = ''
}