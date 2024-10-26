// List of team members with their birthdays
const teamBirthdays = [
    { name: "Selva", date: "01-23" },  // MM-DD format
    { name: "Preethi", date: "11-05" },
    { name: "Saumya", date: "11-01" }
];

// Function to show the birthday banner if today is someone’s birthday
function showBirthdayBanner() {
    const today = new Date().toISOString().slice(5, 10);  // Get today's date in 'MM-DD' format
    const birthdayPerson = teamBirthdays.find(member => member.date === today);  // Check if today matches any birthday

    if (birthdayPerson) {
        const banner = document.getElementById('birthday-banner');
        const personName = document.getElementById('birthday-person');

        personName.textContent = birthdayPerson.name;  // Set the birthday person's name
        banner.style.display = 'block';  // Show the banner

        // Adjust the header's margin to avoid overlap
        const header = document.getElementById('header');
        header.style.marginTop = `${banner.offsetHeight}px`;
    }
}

// Function to close the banner and reset the header position
function closeBanner() {
    const banner = document.getElementById('birthday-banner');
    banner.style.display = 'none';  // Hide the banner

    // Reset the header's margin-top
    const header = document.getElementById('header');
    header.style.marginTop = '0';
}

// Add event listener to the close button
document.getElementById('close-banner').addEventListener('click', closeBanner);

// Run the function when the page loads
window.onload = showBirthdayBanner;
