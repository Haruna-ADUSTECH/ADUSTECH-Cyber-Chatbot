document.addEventListener("DOMContentLoaded", function() {
    const chatbot = document.getElementById("chatbot");
    const chatbotHeader = document.getElementById("chatbot-header");
    const chatbotBody = document.getElementById("chatbot-body");
    const toggleChatbot = document.getElementById("toggle-chatbot");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");

    let isDragging = false;
    let offsetX, offsetY;

    // Define question-response pairs with keywords
    const responses = [
        { keywords: ["phishing", "email", "scam"], response: "Phishing is a type of online scam where attackers try to trick you into revealing sensitive information. Be cautious when you receive suspicious emails." },
        { keywords: ["malware", "virus", "infected"], response: "Malware is malicious software designed to harm your computer. Make sure to install a reputable antivirus and avoid downloading files from untrusted sources." },
        { keywords: ["firewall", "protection", "network"], response: "A firewall helps to protect your network by filtering traffic and preventing unauthorized access. Always keep your firewall enabled." },
        { keywords: ["encryption", "data", "security"], response: "Encryption is the process of encoding data to prevent unauthorized access. Always use encryption to protect sensitive data." },
        { keywords: ["password", "secure", "account"], response: "Use strong, unique passwords for each account. Consider using a password manager to keep track of them securely." },
        // Add more responses as needed
    ];

    // Display bot response
    function displayBotMessage(message) {
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.innerText = message;
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Display user message
    function displayUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.innerText = message;
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Find the best response based on keywords
    function getResponse(userQuestion) {
        userQuestion = userQuestion.toLowerCase();
        for (const pair of responses) {
            for (const keyword of pair.keywords) {
                if (userQuestion.includes(keyword)) {
                    return pair.response;
                }
            }
        }
        return "I'm sorry, I don't have information on that topic. Please try asking something else.";
    }

    // Handle user input
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && userInput.value.trim() !== "") {
            const userQuestion = userInput.value.trim();
            displayUserMessage(userQuestion);
            const botReply = getResponse(userQuestion);
            setTimeout(() => displayBotMessage(botReply), 500); // Delay for a realistic feel
            userInput.value = "";
        }
    });

    // Toggle visibility of the chatbot
    chatbotHeader.addEventListener("click", function() {
        chatbotBody.classList.toggle("hidden");
    });

    // Drag functionality for chatbot window
    chatbotHeader.addEventListener("mousedown", function(e) {
        isDragging = true;
        offsetX = e.clientX - chatbot.getBoundingClientRect().left;
        offsetY = e.clientY - chatbot.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function(e) {
        if (isDragging) {
            chatbot.style.left = `${e.clientX - offsetX}px`;
            chatbot.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
    });

    // Toggle minimize/maximize
    toggleChatbot.addEventListener("click", function() {
        chatbotBody.classList.toggle("minimized");
    });
});
