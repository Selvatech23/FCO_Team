// Static team updates (You can modify these to suit your team needs)
const teamUpdates = [
    "Due to heavy rainfall in Chennai location, everyone is advised to take WFH.",
    "Reminder: Submit your timesheets by Monday.",
    "Our team meeting has been postponed to Friday at 4 PM."
];

let currentUpdateIndex = 0;

// Function to update the text content in the ticker
function updateTicker() {
    const updatesText = document.getElementById('updates-text');
    updatesText.textContent = teamUpdates[currentUpdateIndex];

    // Restart animation by triggering reflow
    updatesText.style.animation = 'none';  // Disable animation
    updatesText.offsetHeight;              // Trigger reflow to reset animation
    updatesText.style.animation = '';      // Re-enable animation

    // Move to the next update or loop back to the start
    currentUpdateIndex = (currentUpdateIndex + 1) % teamUpdates.length;
}

// Display the first update immediately
updateTicker();

// Rotate updates after the animation completes (set time according to CSS animation duration)
setInterval(updateTicker, 12000);  // Adjust to match CSS animation time
