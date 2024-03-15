// script.js
function sendToTelegram() {
    const fileInput = document.getElementById('file-input');
    const messageElement = document.getElementById('message');
    
    const file = fileInput.files[0];
    
    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch("https://api.telegram.org/bot6418886656:AAFIB5PNnWr685LMJxycSJRoOZ6nHvPdB6c/sendFile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: "5460358235",
                text: data
            })
        })
        .then(response => {
            if (response.ok) {
                messageElement.textContent = 'File sent to Telegram Bot successfully!';
            } else {
                messageElement.textContent = 'Error sending the file to Telegram Bot';
            }
        })
        .catch(error => {
            messageElement.textContent = 'Error sending the file to Telegram Bot';
        });
    } else {
        messageElement.textContent = 'Please select a file to send to Telegram Bot';
    }
}