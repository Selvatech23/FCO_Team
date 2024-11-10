// Display user and bot messages in the chatbot window
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, "user");
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, "bot");
        document.getElementById('user-input').value = "";
    }
}

// Allow Enter key to send messages
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});


// Show a default greeting message based on the time of day
function displayDefaultMessage() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    // Set greeting based on the time of day
    if (currentHour < 12) {
        greetingMessage = "Good morning! I am Chatbot, your personal web page assistant.";
    } else if (currentHour < 16) {
        greetingMessage = "Good afternoon! I am Chatbot, your personal web page assistant.";
    } else {
        greetingMessage = "Good evening! I am Chatbot, your personal web page assistant.";
    }

    const helpMessage = "How can I help you?";

    // Display each message separately to simulate a conversation
    displayMessage(greetingMessage, "bot");
    setTimeout(() => {
        displayMessage(helpMessage, "bot");
    }, 1000); // Add a slight delay for a conversational effect
}





// Append messages to the message container
function displayMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender + '-message');
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}





// Predefined responses with keywords
const responses = {
    "team name": "The team name is Fraud and Chargeback Operations.",
    "manager": "The manager of the team is Saravanan Sampath.",
    "team leader":"Rega Ramachandran",
    "tl":"Rega Ramachandran",
    "inc": "INC stands for Interest and charges.",
    "controliq": "Here’s the <a href='https://natwest.workwareplus.com/' target='_blank'>ControlIQ portal</a>. Please make sure to log in. The link will open in a new tab.",
    "adp": "Access the <a href='https://www.vista.adp.com/vista/index.html?TYPE=33554433&REALMOID=06-00056349-5d04-1f8a-bae3-1b780aca0000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-2PZcgxfasaByM85o0PQjgCdeNLFKO0bt1Cvh2QNqwbwSryAKScVMsAtmoh9wl%2Fbh&TARGET=-SM-https:%2F%2Fwww.vista.adp.com%2FESS4%2FESSV5%2Flogin' target='_blank'>ADP portal</a>.",
    "routematic": "You can access <a href='https://rbs.routematic.com/Security/Home' target='_blank'>Routematic</a> here.",
    "condeco": "Visit <a href='https://rbs.condecosoftware.com/master.aspx' target='_blank'>Condeco</a> to manage bookings.",
    "book seat":"Visit <a href='https://rbs.condecosoftware.com/master.aspx' target='_blank'>Condeco</a> to manage bookings.",
    "workday": "Access <a href='https://wd3.myworkday.com/rbs/d/pex/home.htmld' target='_blank'>Workday</a> here.",
    "drs": "Log in to <a href='https://fsso.fm.rbsgrp.net/idp/startSSO.ping?PartnerSpId=NATWEST_PF_External_EMEA_Prod' target='_blank'>DRS</a>.",
    "password_reset": "Reset your password at <a href='https://slx.web.rbsgrp.net/Content/Passwords/Forms/Form_RACF_Reset.aspx' target='_blank'>Back Office Password Reset</a>.",
    "gpl": "Access <a href='https://wd3.myworkday.com/rbs/learning' target='_blank'>GPL</a> for learning resources.",
    "tableau": "Visit <a href='https://tableau.datrep-prod.shared.banksvcs.net/#/site/FSA/views/FiservICReport/ICReport?:iid=1' target='_blank'>Tableau</a> for reporting.",
    "mastercard": "Log in to <a href='https://www.mastercardconnect.com/-/sign-in?URL=%2F-%2Fstore-plus' target='_blank'>Mastercard Connect</a>.",
    "ask_archie": "Ask questions via <a href='https://askarchie.natwestgroup-chatbot-gateway.com/' target='_blank'>Ask Archie</a>.",
    "absence": "Record absence at <a href='https://wd3.myworkday.com/rbs/d/inst/13102!CK5mGhEKBggDEMenAhIHCgUI1A0QCxq-AQoGCAMQgawCErQBEjoI22gaCgoGCAMQp7EBEgAaEQoGCAMQ-qsCEgcKBQjjGRAvGgoKBggDEP_rAhIAGgoKBggDEICsAhIAEjoI22gaCgoGCAMQp7EBEgAaEQoGCAMQ-qsCEgcKBQjjGRASGgoKBggDEP_rAhIAGgoKBggDEICsAhIA*H4F-tGNZsg4~/cacheable-task/2997$2151.htmld#backheader=true' target='_blank'>Absence portal</a>.",
    "tsys": "Access <a href='https://tcs.tsyseurope.com/prweb/PRWebLDAP1/WgVvXYNg-ZXRKjwI4ND_kasIU5DIFkWrv27UEwJodZI%28*/!STANDARD' target='_blank'>TSYS</a> for transaction management.",
    "rtm": "You can access the <a href='https://natwest.workwareplus.com/' target='_blank'>RTM portal</a> here. It will open in a new tab, and you'll need your login credentials.",
    "controliq": "Here’s the <a href='https://natwest.workwareplus.com/' target='_blank'>ControlIQ portal</a>. Please make sure to log in.",
    // Greeting responses
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm doing great, thank you for asking! How about you?",
    "hai": "Hello! How can I help you?",
    "good morning": "Good morning! How can I assist you today?",
    "good afternoon": "Good afternoon! How can I assist you today?",
    "good evening": "Good evening! How can I help you?",
    "bye": "Goodbye! Have a great day!",
    "thank you": "You're welcome! Let me know if you need anything else.",
    "thank u": "You're welcome! Let me know if you need anything else.",
    "thanks": "You're welcome! Feel free to ask if you have more questions.",
    // Expanded Greeting Responses
"good night": "Good night! Take care!",
"see you": "See you soon! Let me know if you need any more help!",
"nice to meet you": "Nice to meet you too! How can I assist you today?",
"welcome": "Thank you! How can I help you?",
"what's up": "Not much, just here to help you! What can I do for you?",
"howdy": "Howdy! How can I be of service today?",

// Courtesy and Appreciation
"you're awesome": "Thank you! I'm here to make your experience great!",
"good job": "Thanks! I'm glad I could help!",
"amazing": "I'm glad you think so! Let me know if you need more assistance.",
"please": "Of course! Let me know what you need.",
"sorry": "No worries! How can I assist you?",


// Acknowledgment responses
"okay": ["Great! Let me know if there’s anything else you need.", 
"Alright, just let me know if you have any other questions!", 
"Got it! I'm here if you need anything else."],
"ok": ["Perfect! 😊 Let me know if I can help with anything else.", 
"Awesome! Just reach out if you have more questions.", 
"Glad we're on the same page! 👍 Let me know if you need anything further."],
"okiee": ["Alright! If you think of anything else, just ask.", 
 "Sounds good! Don’t hesitate to reach out if more questions come up.", 
 "Okay! Here to help if you need me!"],
"okey": ["Nice! Got anything else you’re curious about?", 
"Good to go! Is there anything else on your mind?", 
"Sure thing! Let me know what else I can help with."],

// Help and Information Requests
"help": "I'm here to help! Let me know what you need.",
"what can you do": "I can assist you with various questions and tasks. Just ask!",
"can you assist me": "Absolutely! What would you like help with?",
"who are you": "I'm your chatbot assistant, here to help you with any questions!",
"what is your name": "I'm just your friendly chatbot assistant!",
"tell me a joke": "Sure! Why don't scientists trust atoms? Because they make up everything!",
"tell me something interesting": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",

// Conversation Endings
"take care": "You too! Feel free to reach out anytime!",
"talk to you later": "Alright, talk to you soon!",




};


// Similarity function to match input with keywords
function calculateSimilarity(input, keyword) {
    input = input.toLowerCase();
    keyword = keyword.toLowerCase();
    let matches = 0;
    keyword.split(" ").forEach(word => {
        if (input.includes(word)) {
            matches++;
        }
    });
    return matches / keyword.split(" ").length;
}

// Get bot response based on similarity with predefined questions
function getBotResponse(input) {
    let bestMatch = "";
    let highestScore = 0;

    for (let key in responses) {
        const score = calculateSimilarity(input, key);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = key;
        }
    }

    return highestScore > 0.5 ? responses[bestMatch] : "I'm not sure how to answer that. Could you ask in a different way?  My friend, <a href='https://askarchie.natwestgroup-chatbot-gateway.com/' target='_blank'>Ask Archie</a>. can help you ";
}

// Toggle chatbot display
document.getElementById("open-chatbot-button").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "flex";
    document.getElementById("open-chatbot-button").style.display = "none";  // Hide open button when chatbot is visible
    displayDefaultMessage(); // Show default message when chatbot opens

});

// Close chatbot
document.getElementById("close-chatbot").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
    document.getElementById("open-chatbot-button").style.display = "block";  // Show open button when chatbot is hidden
    
});





// Append messages to the message container
function displayMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender + '-message');

    // Use innerHTML if sender is bot, else textContent for user messages
    if (sender === "bot") {
        messageDiv.innerHTML = message; // This will render HTML as clickable links
    } else {
        messageDiv.textContent = message;
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


