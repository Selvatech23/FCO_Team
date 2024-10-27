// script.js
document.getElementById('announcementForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    try {
        const response = await fetch('http://localhost:5000/api/announcements', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, author }),
        });
        const data = await response.json();
        console.log('Announcement created:', data);
        fetchAnnouncements(); // Refresh the announcement list
    } catch (error) {
        console.error('Error creating announcement:', error);
    }
});

async function fetchAnnouncements() {
    try {
        const response = await fetch('http://localhost:5000/api/announcements');
        const announcements = await response.json();
        const announcementsDiv = document.getElementById('announcements');
        announcementsDiv.innerHTML = ''; // Clear previous announcements

        announcements.forEach(announcement => {
            const announcementElement = document.createElement('div');
            announcementElement.innerHTML = `
                <h3>${announcement.title}</h3>
                <p>${announcement.content}</p>
                <small>By ${announcement.author} on ${new Date(announcement.date).toLocaleString()}</small>
                <hr>
            `;
            announcementsDiv.appendChild(announcementElement);
        });
    } catch (error) {
        console.error('Error fetching announcements:', error);
    }
}

// Fetch announcements on page load
fetchAnnouncements();
