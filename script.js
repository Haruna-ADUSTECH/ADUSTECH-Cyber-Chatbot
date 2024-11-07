// Chatbot toggle function
document.getElementById('toggle-chatbot').addEventListener('click', function() {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.style.display = chatbotBody.style.display === 'none' ? 'block' : 'none';
});

// Responses database
const responses = {
    "malware": "Malware is software designed to harm or exploit any programmable device or network.",
    "phishing": "Phishing is a cybercrime where attackers impersonate legitimate institutions to steal sensitive data.",
    "encryption": "Encryption is the process of encoding data to prevent unauthorized access.",
    "firewall": "A firewall is a network security device that monitors and filters incoming and outgoing network traffic.",
    "ransomware": "Ransomware is a type of malware that threatens to publish the victim's data unless a ransom is paid."
};

// Handle user input and generate bot responses
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = event.target.value.toLowerCase().trim();
        addChatMessage('User', userInput);

        // Determine response
        let response = "I'm sorry, I didn't understand that. Try asking about cybersecurity terms like malware, phishing, etc.";
        for (const keyword in responses) {
            if (userInput.includes(keyword)) {
                response = responses[keyword];
                break;
            }
        }

        addChatMessage('Bot', response);
        event.target.value = ''; // Clear input field
    }
});

function addChatMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'User' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
}

// Initialize chatbot visibility state
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('chatbot-body').style.display = 'none'; // Start hidden
});
