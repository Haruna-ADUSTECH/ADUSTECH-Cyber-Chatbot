// Chatbot toggle function
document.getElementById('toggle-chatbot').addEventListener('click', function() {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.style.display = chatbotBody.style.display === 'none' ? 'block' : 'none';
    this.textContent = chatbotBody.style.display === 'none' ? '+' : '−';
});

// Chatbot responses based on keywords
const responses = {
    "malware": "Malware is a type of software designed to harm or exploit any programmable device or network.",
    "phishing": "Phishing is a cybercrime where attackers pose as legitimate institutions to steal sensitive information.",
    "encryption": "Encryption is the process of converting information into a code to prevent unauthorized access.",
    "firewall": "A firewall is a network security device that monitors and filters incoming and outgoing network traffic.",
    "ransomware": "Ransomware is a type of malware that threatens to publish the victim's data unless a ransom is paid."
};

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = event.target.value.toLowerCase();
        addChatMessage('User', userInput);

        let response = "I'm sorry, I didn't understand that. Can you ask about cybersecurity terms like malware, phishing, etc.?"
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
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to latest message
}

// Initializing chatbot state
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('chatbot-body').style.display = 'none'; // Start with chatbot hidden
});
