// Selecting chatbot container, open button, and robot image elements
const chatbotContainer = document.getElementById("chatbot-container");
const openChatbotButton = document.getElementById("open-chatbot-button");

// Create the robot image dynamically
const robotImage = document.createElement("img");
robotImage.src = "https://norby.io/images/presents/robot-norby.png";
robotImage.classList.add("robot-image");
document.body.appendChild(robotImage); // Add to the body

// Function to start robot animation
function startRobotAnimation() {
    robotImage.classList.add("move"); // Add movement class to trigger animation
}

// Function to stop robot animation
function stopRobotAnimation() {
    robotImage.classList.remove("move"); // Remove movement class
}

// Event listener for opening chatbot
openChatbotButton.addEventListener("click", () => {
    chatbotContainer.style.display = "block"; // Show chatbot container
    startRobotAnimation(); // Start robot animation when chatbot opens
});

// Event listener for closing chatbot
document.getElementById("close-chatbot").addEventListener("click", () => {
    chatbotContainer.style.display = "none"; // Hide chatbot container
    stopRobotAnimation(); // Stop robot animation when chatbot closes
});
