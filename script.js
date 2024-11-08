// Chatbot toggle function
document.getElementById('toggle-chatbot').addEventListener('click', function() {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.style.display = chatbotBody.style.display === 'none' ? 'block' : 'none';
});

// Responses database
const responses = {
    "malware": "Malware is software designed to harm or exploit any programmable device or network.",
    "phishing": "### Phishing: An Overview

Phishing is a type of cyber-attack where attackers attempt to deceive individuals into providing sensitive information, such like usernames, passwords, credit card numbers, and other personal data Typically,  is done by impersonating a legitimate entity, like a bank, online service, or trusted organization, through fraudulent emails, messages, or websites Phishing remains one of the most common and effective forms of cybercrime due to its simplicity and the human factor involved  cybersecurity vulnerabilities

---

### 1. **Types of Phishing Attacks**

There are several types of phishing attacks, each employing different tactics to trick individuals The most common forms include:

   - **Email Phishing**: The most well-known form, where attackers send fake emails that appear to be from legitimate organizations These emails often contain malicious links or attachments.

   - **Spear Phishing**: Unlike general phishing, spear phishing targets specific individuals or organizations, often based on detailed research Attackers personalize their messages to make them appear more convincing.

   - **Whaling**: This type targets high-profile individuals like executives, often using sophisticated tactics and impersonating authority figures, such  the CEO or other high-ranking officials, to extract sensitive information or money.

   - (Vishing) (Voice Phishing) Attackers use phone calls instead of emails to gather personal information The caller might impersonate a bank or government representative, convincing the target to share sensitive information over the phone.

   (Smishing) (SMS Phishing)**: Here, attackers use text messages to trick individuals These messages often contain links to fake websites or ask the recipient to call a phone number controlled by the attacker.

   - **Clone Phishing**: Attackers duplicate a legitimate, previously sent email from a trusted source, making minor modifications, such  replacing a link w a malicious one The recipient is more likely to trust the message since it appears familiar.

---

### . **How Phishing Works**

Phishing attacks generally follow a common sequence:

   - **Initial Contact**: Attackers contact the target via email, text, or call, pretending to be a trusted entity.
   
   - **Bait**: The message typically includes a hook,  (urgent problem) ( Your account has been compromised") or an attractive offer (You've won a prize"), to prompt the recipient to take immediate action.
   
   - **The Link or Attachment**: The message often contains a link to a fake website that resembles a legitimate one or an attachment that contains malware When users click the link or open the attachment, they either enter sensitive information into the fake website or inadvertently install malware on their device.
   
   - **Data Collection** Any data entered into the fake website, or captured by the malware, is collected by the attacker and used for malicious purposes, such as identity theft, financial theft, or selling the information on the black market.



-Techniques Used -in Phishing

Attackers use several psychological and technical techniques to deceive individuals, including:

Urgency and Fea Creating a sense of urgency ( fear) ( Immediate action required") prompts users to act without thinking
   
   - **Impersonation**: Attackers mimic trusted brands or individuals, making their messages appear authentic.
   
   - **Deceptive URLs**: Phishers use lookalike URLs (such as "paypaI.com" with a capital “I” instead of “l”) or domain names that closely resemble legitimate websites.
   
   - **Fake Attachments**: These contain malicious software that, when downloaded, can infect the victim's computer with viruses, spyware, or ransomware.
   
   - **Malicious QR Codes**: Some phishing attempts involve QR codes that lead to malicious websites, exploiting people’s increasing use of QR scanners on their smartphones.

---

### 4. **Consequences of Phishing**

The impact of phishing attacks can be severe, including:

   - **Financial Loss**: Phishers often target financial credentials, leading to unauthorized transactions and loss of funds.
   
   - **Data Theft**: Personal, financial, and business information stolen in phishing attacks can be used for identity theft, fraud, and corporate espionage.
   
   - **Reputational Damage**: Organizations that fall victim to phishing may face reputational damage and lose customer trust.
   
   - **Legal Consequences**: Businesses may face legal and regulatory repercussions if phishing attacks expose customer data, violating privacy and data protection laws.

---

### 5. **How to Protect Against Phishing**

Several measures can help individuals and organizations protect against phishing:

   - **Awareness and Training**: Regular training helps individuals recognize phishing attempts and teaches them how to respond safely.
   
   - **Email Filters**: Anti-phishing email filters can identify and block suspicious emails, preventing them from reaching users’ inboxes.
   
   - **Multi-Factor Authentication (MFA)**: MFA provides an additional layer of security. Even if phishers obtain login credentials, they cannot access the account without the second authentication factor.
   
   - **Verify Sources**: Always double-check links, attachments, and requests for sensitive information, especially if the message feels urgent.
   
   - **Look for HTTPS**: When visiting websites, check for "https" in the URL, as legitimate sites typically use secure connections.
   
   - **Report Suspicious Emails**: Reporting phishing emails to your email provider or IT department can help prevent similar attacks.

---

### 6. **Recent Trends in Phishing**

   - **AI and Machine Learning**: Attackers use AI to automate and personalize phishing messages at scale, making them more convincing and harder to detect.
   
   - **Deepfake and Synthetic Media**: Some attackers use deepfake audio and video to impersonate individuals, especially in whaling attacks.
   
   - **Phishing-as-a-Service**: Just as legitimate businesses offer Software-as-a-Service, cybercriminals now offer Phishing-as-a-Service platforms, providing phishing kits to less skilled attackers for a fee.

---

### 7. **Responding to a Phishing Attack**

If you suspect you have been targeted by a phishing attack or believe you've fallen victim to one, take these steps:

   - **Disconnect from the Internet**: This helps prevent further data transmission if malware is involved.
   
   - **Change Passwords**: Update your passwords for any affected accounts, and use unique, strong passwords for each account.
   
   - **Enable MFA**: This helps prevent attackers from accessing your account even if they have your login credentials.
   
   - **Scan for Malware**: Use reputable antivirus or anti-malware software to detect and remove malicious software.
   
   - **Report the Attack**: Contact your IT department (for organizational incidents), report the phishing email to your email provider, and inform affected parties.

---

### 8. **Phishing in the Context of Cybersecurity**

Phishing attacks highlight the importance of a robust cybersecurity framework, which includes:

   - **Human Security**: Since phishing targets human vulnerabilities, organizations should invest in cybersecurity training to empower employees to detect and prevent attacks.
   
   - **Technological Safeguards**: Advanced email security solutions, AI-driven phishing detection tools, and real-time monitoring systems can reduce exposure to phishing attempts.
   
   - **Incident Response Plan**: Every organization should have a plan in place to respond swiftly to phishing attacks, minimizing damage and preventing data loss.

---

Phishing remains a significant threat to both individuals and organizations. By understanding the methods phishers use and implementing protective strategies, it’s possible to mitigate the risks and prevent sensitive information from falling into the wrong hands.",
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
