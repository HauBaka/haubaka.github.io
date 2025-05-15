const webhookURL = "https://"+"dis"+"cord"+"."+"com/api/web" + "hooks/13725579" + "30657873980/yzrmDV" + "T0EMSiaFIrpjFJNX" + "i9CMxx0Plv7OIr6ZBx5cREO0zm34mX6tHhcpj5CnsdBv4e";
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
function sendMessage1() {
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < rateLimitTime) {
        alert('Đừng spam :<<'); // Display an alert if the rate limit is triggered
        return; // Exit the function without sending the webhook
    }

    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (name === '') {
        name = 'Ẩn danh'
    }
    if (message === '') {
        alert('Burh :/\nhmmm Say st :>>> :/'); // Display an alert if the message is empty
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
}
function sendMessage() {
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < rateLimitTime) {
        alert('Đừng spam :<<'); // Display an alert if the rate limit is triggered
        return; // Exit the function without sending the webhook
    }

    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (message === '') {
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
}


function logs() {
    const currentTime = Date.now();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const payload = {
        embeds: [
            {
                title: 'connect',
                description: '',
                color: 0x7289DA,
                fields: [
                    { name: "🌍 Timezone", value: timezone },
                ],
                timestamp: new Date().toISOString()
            },
        ],
    };
    sendWebhook(payload); // Call the function to send the webhook
}

logs();
function redirect() {
    const currentTime = Date.now();
        if (currentTime - lastSubmissionTime < rateLimitTime) {
        alert('Đừng spam :<<'); // Display an alert if the rate limit is triggered
        return; // Exit the function without sending the webhook
    }
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const payload = {
        embeds: [
            {
                title: "NEW TERM IS ACCEPT!",
                description: "Null",
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
    window.location.href = "https://haubaka.is-a.dev/Forms";
}
function redirect1() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const payload = {
        embeds: [
            {
                title: "SIUU!",
                description: "Null",
                color: 0x7289DA,
                fields: [
                    { name: "🌍 Timezone", value: timezone },
                ],
                timestamp: new Date().toISOString()
            },
        ],
    };
    sendWebhook(payload); // Call the function to send the webhook
}
