// Static team updates (You can modify these to suit your team needs)
const teamUpdates = [
    "Update MI Counts on Daily Basis",
    "Huddle meeting by 3.00 pm IST",
    "Ensure to Complete 8 days/40% of RTO ",
    "Overview Results got published.",
    "Complete GPL asap "
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
