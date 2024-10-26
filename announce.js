// Function to add an announcement
function addAnnouncement() {
    const announcementInput = document.getElementById('announcement-input');
    const announcementsList = document.getElementById('announcements-list');

    // Create a new announcement element
    const newAnnouncement = document.createElement('div');
    newAnnouncement.textContent = announcementInput.value;
    newAnnouncement.style.border = '1px solid #ccc';
    newAnnouncement.style.padding = '10px';
    newAnnouncement.style.marginTop = '5px';

    // Append the new announcement to the announcements list
    announcementsList.appendChild(newAnnouncement);

    // Clear the input field
    announcementInput.value = '';
}

// Add event listener to the button
document.getElementById('add-announcement').addEventListener('click', addAnnouncement);
