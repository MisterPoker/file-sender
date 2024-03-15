// script.js
function sendToTelegram() {
    const fileInput = document.getElementById('file-input');
    const messageElement = document.getElementById('message');
    
    const file = fileInput.files[0];
    
    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('https://api.telegram.org/bot6418886656:AAFIB5PNnWr685LMJxycSJRoOZ6nHvPdB6c/sendPhoto/5460358235', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                messageElement.textContent = 'File sent successfully!';
            } else {
                messageElement.textContent = 'Error sending the file';
            }
        })
        .catch(error => {
            messageElement.textContent = 'Error sending the file';
        });
    } else {
        messageElement.textContent = 'Please select a file to send';
    }
}