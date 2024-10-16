// Show/Hide the Games Section when 'Games' is clicked
const toggleGames = document.getElementById('toggle-games');
const gamesSection = document.getElementById('games-section');
const closeGamesButton = document.getElementById('close-games'); // Reference to the close button

// Initially hide the games section and close button
gamesSection.style.display = 'none';
closeGamesButton.style.display = 'none';

// Toggle the games section when 'Games' is clicked
toggleGames.addEventListener('click', () => {
    if (gamesSection.style.display === 'none') {
        gamesSection.style.display = 'block';
        closeGamesButton.style.display = 'block'; // Show the close button when the section is visible
    } else {
        gamesSection.style.display = 'none';
        closeGamesButton.style.display = 'none'; // Hide the close button when the section is hidden
    }
});

// Close the games section when the close button is clicked
closeGamesButton.addEventListener('click', () => {
    gamesSection.style.display = 'none'; // Hide the games section
    closeGamesButton.style.display = 'none'; // Hide the close button
});

// Function to open a game in a new tab
function openGame(gameUrl) {
    window.open(gameUrl, '_blank'); // Opens the game in a new tab
}
