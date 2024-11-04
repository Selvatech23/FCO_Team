// Get elements
const toggleTeamMi = document.getElementById('toggle-team-mi');
const teamMiDropdown = document.getElementById('team-mi-dropdown');
const processSelect = document.getElementById('process-select');
const viewSelect = document.getElementById('view-select');
const dataDisplay = document.getElementById('data-display');
const selectedProcess = document.getElementById('selected-process');
const miChart = document.getElementById('miChart').getContext('2d');
const dateInput = document.getElementById('date-input');
const dateResult = document.getElementById('date-result');

// Sample data for the processes
const processData = {
    "FDP-Credit": {
        "06-11-2023": 98, "07-11-2023": 91, "08-11-2023": 52, "09-11-2023": 80, "10-11-2023": 0, "13-11-2023": 91, "14-11-2023": 76, "15-11-2023": 69, "16-11-2023": 49, "17-11-2023": 72, "20-11-2023": 145, "21-11-2023": 65, "22-11-2023": 68, "23-11-2023": 52, "24-11-2023": 41, "27-11-2023": 116, "28-11-2023": 39, "29-11-2023": 91, "30-11-2023": 81, "01-12-2023": 86, "04-12-2023": 66, "05-12-2023": 42, "06-12-2023": 121, "07-12-2023": 102, "08-12-2023": 53, "11-12-2023": 102, "12-12-2023": 70, "13-12-2023": 59, "14-12-2023": 80, "15-12-2023": 76, "18-12-2023": 101, "19-12-2023": 85, "20-12-2023": 89, "21-12-2023": 77, "22-12-2023": 46, "27-12-2023": 114, "28-12-2023": 92, "29-12-2023": 34, "02-01-2024": 94, "03-01-2024": 86, "04-01-2024": 76, "05-01-2024": 76, "08-01-2024": 150, "09-01-2024": 86, "10-01-2024": 67, "11-01-2024": 85, "12-01-2024": 73, "15-01-2024": 85, "16-01-2024": 74, "17-01-2024": 109, "18-01-2024": 72, "19-01-2024": 78, "22-01-2024": 89, "23-01-2024": 99, "24-01-2024": 76, "25-01-2024": 68, "26-01-2024": 78, "29-01-2024": 65, "30-01-2024": 117, "31-01-2024": 66, "01-02-2024": 86, "02-02-2024": 78, "05-02-2024": 90, "06-02-2024": 89, "07-02-2024": 108, "08-02-2024": 85, "09-02-2024": 77, "12-02-2024": 80, "13-02-2024": 86, "14-02-2024": 74, "15-02-2024": 92, "16-02-2024": 90, "19-02-2024": 136, "20-02-2024": 76, "21-02-2024": 61, "22-02-2024": 55, "23-02-2024": 53, "26-02-2024": 123, "27-02-2024": 57, "28-02-2024": 88, "29-02-2024": 86, "01-03-2024": 78, "04-03-2024": 133, "05-03-2024": 106, "06-03-2024": 85, "07-03-2024": 83, "08-03-2024": 118, "09-03-2024": 80, "11-03-2024": 91, "12-03-2024": 75, "13-03-2024": 87, "14-03-2024": 47, "15-03-2024": 75, "18-03-2024": 112, "19-03-2024": 102, "20-03-2024": 78, "21-03-2024": 74, "22-03-2024": 125, "25-03-2024": 92, "26-03-2024": 104, "27-03-2024": 53, "28-03-2024": 53, "29-03-2024": 43, "01-04-2024": 0, "02-04-2024": 109, "03-04-2024": 101, "04-04-2024": 85, "05-04-2024": 49, "08-04-2024": 76, "09-04-2024": 85, "10-04-2024": 49, "11-04-2024": 36, "12-04-2024": 74, "15-04-2024": 84, "16-04-2024": 72, "17-04-2024": 85, "18-04-2024": 50, "19-04-2024": 68, "22-04-2024": 0, "23-04-2024": 174, "24-04-2024": 98, "25-04-2024": 67, "26-04-2024": 59, "29-04-2024": 147, "30-04-2024": 47, "01-05-2024": 61, "02-05-2024": 101, "03-05-2024": 93, "07-05-2024": 144, "08-05-2024": 74, "09-05-2024": 62, "10-05-2024": 55, "13-05-2024": 85, "14-05-2024": 80, "15-05-2024": 55, "16-05-2024": 72, "17-05-2024": 65, "20-05-2024": 62, "21-05-2024": 32, "22-05-2024": 131, "23-05-2024": 131, "24-05-2024": 65, "28-05-2024": 110, "29-05-2024": 72, "30-05-2024": 57, "31-05-2024": 94, "03-06-2024": 135, "04-06-2024": 78, "05-06-2024": 74, "06-06-2024": 55, "07-06-2024": 76, "10-06-2024": 130, "11-06-2024": 100, "12-06-2024": 55, "13-06-2024": 60, "14-06-2024": 54, "17-06-2024": 125, "18-06-2024": 104, "19-06-2024": 92, "20-06-2024": 127, "21-06-2024": 65, "24-06-2024": 71, "25-06-2024": 24, "26-06-2024": 46, "27-06-2024": 38, "28-06-2024": 68, "01-07-2024": 100, "02-07-2024": 80, "03-07-2024": 94, "04-07-2024": 80, "05-07-2024": 49, "08-07-2024": 93, "09-07-2024": 47, "10-07-2024": 64, "11-07-2024": 70, "12-07-2024": 37, "15-07-2024": 110, "16-07-2024": 33, "17-07-2024": 53, "18-07-2024": 71, "19-07-2024": 72, "22-07-2024": 109, "23-07-2024": 137, "24-07-2024": 55, "25-07-2024": 36},
    "INC-Debit": {
        "17-10-2024": 659, "18-10-2024": 510, "19-10-2024": 372, "20-10-2024": 245,
        "21-10-2024": 603, "22-10-2024": 699, "23-10-2024": 508, "24-10-2024": 459, "25-10-2024": 532,
        "26-10-2024": 317, "27-10-2024": 239, "28-10-2024": 475, "29-10-2024": 778, "30-10-2024": 704,
        "31-10-2024": 521, "01-11-2024": 700, "02-11-2024": 522
    },    
    "PSD-Credit": { "25-10-2024": 150, "26-10-2024": 180, "27-10-2024": 170 },
    "PSD-Debit": { "25-10-2024": 130, "26-10-2024": 160, "27-10-2024": 190 },
    "INC-Credit": {
        "01-12-2023": 73, "04-12-2023": 62, "05-12-2023": 49, "06-12-2023": 25, "07-12-2023": 24,
        "08-12-2023": 49, "11-12-2023": 76, "12-12-2023": 40, "13-12-2023": 65, "14-12-2023": 84,
        "15-12-2023": 42, "18-12-2023": 88, "19-12-2023": 40, "20-12-2023": 75, "21-12-2023": 25,
        "22-12-2023": 37, "27-12-2023": 61, "28-12-2023": 31, "29-12-2023": 30, "02-01-2024": 65,
        "03-01-2024": 20, "04-01-2024": 63, "05-01-2024": 47, "08-01-2024": 39, "09-01-2024": 35,
        "10-01-2024": 34, "11-01-2024": 54, "12-01-2024": 14, "15-01-2024": 39, "16-01-2024": 19,
        "17-01-2024": 33, "18-01-2024": 44, "19-01-2024": 29, "22-01-2024": 25, "23-01-2024": 52,
        "24-01-2024": 56, "25-01-2024": 58, "26-01-2024": 58, "29-01-2024": 56, "30-01-2024": 30,
        "31-01-2024": 29, "01-02-2024": 20, "02-02-2024": 23, "05-02-2024": 40, "06-02-2024": 44,
        "07-02-2024": 24, "08-02-2024": 20, "09-02-2024": 18, "12-02-2024": 66, "13-02-2024": 40,
        "14-02-2024": 27, "15-02-2024": 33, "16-02-2024": 29, "19-02-2024": 54, "20-02-2024": 28,
        "21-02-2024": 39, "22-02-2024": 24, "23-02-2024": 21, "26-02-2024": 43, "27-02-2024": 25,
        "28-02-2024": 35, "29-02-2024": 10, "01-03-2024": 38, "04-03-2024": 36, "05-03-2024": 33,
        "06-03-2024": 50, "07-03-2024": 49, "08-03-2024": 44, "09-03-2024": 0, "11-03-2024": 78,
        "12-03-2024": 50, "13-03-2024": 43, "14-03-2024": 49, "15-03-2024": 17, "18-03-2024": 56,
        "19-03-2024": 25, "20-03-2024": 27, "21-03-2024": 36, "22-03-2024": 22, "25-03-2024": 61,
        "26-03-2024": 56, "27-03-2024": 47, "28-03-2024": 32, "29-03-2024": 8, "01-04-2024": 0,
        "02-04-2024": 9, "03-04-2024": 15, "04-04-2024": 53, "05-04-2024": 26, "08-04-2024": 45,
        "09-04-2024": 28, "10-04-2024": 33, "11-04-2024": 20, "12-04-2024": 27, "15-04-2024": 67,
        "16-04-2024": 23, "17-04-2024": 38, "18-04-2024": 16, "19-04-2024": 0, "22-04-2024": 38,
        "23-04-2024": 56, "24-04-2024": 52, "25-04-2024": 31, "26-04-2024": 24, "29-04-2024": 87,
        "30-04-2024": 6, "01-05-2024": 14, "02-05-2024": 13, "03-05-2024": 25, "07-05-2024": 63,
        "08-05-2024": 15, "09-05-2024": 27, "10-05-2024": 19, "13-05-2024": 51, "14-05-2024": 27,
        "15-05-2024": 15, "16-05-2024": 13, "17-05-2024": 16, "20-05-2024": 26, "21-05-2024": 59,
        "22-05-2024": 35, "23-05-2024": 35, "24-05-2024": 40, "28-05-2024": 107, "29-05-2024": 37,
        "30-05-2024": 11, "31-05-2024": 26, "03-06-2024": 37, "04-06-2024": 27, "05-06-2024": 26,
        "06-06-2024": 15, "07-06-2024": 21, "10-06-2024": 73, "11-06-2024": 99, "12-06-2024": 36,
        "13-06-2024": 41, "14-06-2024": 26, "17-06-2024": 47, "18-06-2024": 28, "19-06-2024": 50,
        "20-06-2024": 44, "21-06-2024": 44, "24-06-2024": 52, "25-06-2024": 22, "26-06-2024": 26,
        "27-06-2024": 41, "28-06-2024": 23, "01-07-2024": 48, "02-07-2024": 48, "03-07-2024": 48,
        "04-07-2024": 64, "05-07-2024": 39, "08-07-2024": 53, "09-07-2024": 44, "10-07-2024": 42,
        "11-07-2024": 52, "12-07-2024": 31, "15-07-2024": 84, "16-07-2024": 29, "17-07-2024": 45,
        "18-07-2024": 62, "19-07-2024": 61, "22-07-2024": 74, "23-07-2024": 85, "24-07-2024": 33,
        "25-07-2024": 23, "26-07-2024": 45, "29-07-2024": 58, "30-07-2024": 37, "31-07-2024": 30,
        "01-08-2024": 27, "02-08-2024": 52, "05-08-2024": 88, "06-08-2024": 87, "07-08-2024": 25, "08-08-2024": 43, "09-08-2024": 50, "12-08-2024": 92, "13-08-2024": 43, "14-08-2024": 41, "15-08-2024": 29, "16-08-2024": 50, "19-08-2024": 112, "20-08-2024": 91, "21-08-2024": 53, "22-08-2024": 54, "23-08-2024": 40, "27-08-2024": 108, "28-08-2024": 58, "29-08-2024": 44, "30-08-2024": 56, "02-09-2024": 76, "03-09-2024": 29, "04-09-2024": 55, "05-09-2024": 67, "06-09-2024": 69, "09-09-2024": 49, "10-09-2024": 88, "11-09-2024": 65, "12-09-2024": 27, "13-09-2024": 60, "16-09-2024": 129, "17-09-2024": 52, "18-09-2024": 38, "19-09-2024": 17, "20-09-2024": 59, "23-09-2024": 85, "24-09-2024": 46, "25-09-2024": 45, "26-09-2024": 37, "27-09-2024": 47, "30-09-2024": 63, "01-10-2024": 78, "02-10-2024": 51, "03-10-2024": 67, "04-10-2024": 69, "07-10-2024": 93, "08-10-2024": 53, "09-10-2024": 57, "10-10-2024": 51, "11-10-2024": 47, "14-10-2024": 102, "15-10-2024": 45, "16-10-2024": 37, "17-10-2024": 35, "18-10-2024": 79, "21-10-2024": 74, "22-10-2024": 72, "23-10-2024": 38, "24-10-2024": 46, "25-10-2024": 34, "28-10-2024": 96, "29-10-2024": 45
    },
    "Abusive": { "25-10-2024": 50, "26-10-2024": 80, "27-10-2024": 90 }
};


// Initialize chart
let chart = new Chart(miChart, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Counts',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true, // Ensures the title is displayed
                text: '', // Initial title can be empty or set to a default value
                font: {
                    size: 16 // You can adjust the font size here
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Toggle the dropdown visibility
toggleTeamMi.addEventListener('click', function() {
    const isVisible = teamMiDropdown.style.display === 'block';
    teamMiDropdown.style.display = isVisible ? 'none' : 'block';
});

// Handle process selection
processSelect.addEventListener('change', function() {
    const process = this.value;
    selectedProcess.textContent = process;

    if (process) {
        dataDisplay.style.display = 'block';
        updateChart(process, viewSelect.value || 'month');
    } else {
        dataDisplay.style.display = 'none';
    }
});

// Handle view selection
viewSelect.addEventListener('change', function() {
    const process = processSelect.value;
    if (process) {
        updateChart(process, this.value);
    }
});

// Aggregate data based on the view
function aggregateData(data, view) {
    const aggregatedData = {};

    // Convert data keys to Date objects for easier manipulation
    const entries = Object.entries(data).map(([dateStr, count]) => ({
        date: new Date(dateStr.split('-').reverse().join('-')),
        count,
    }));

    switch (view) {
        case 'week':
            entries.forEach(({ date, count }) => {
                const weekStart = new Date(date);
                weekStart.setDate(date.getDate() - date.getDay()); // Set to the start of the week (Sunday)
                const weekLabel = `Week of ${weekStart.toLocaleDateString()}`;

                if (!aggregatedData[weekLabel]) {
                    aggregatedData[weekLabel] = 0;
                }
                aggregatedData[weekLabel] += count;
            });
            break;

        case 'month':
            entries.forEach(({ date, count }) => {
                const monthLabel = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;

                if (!aggregatedData[monthLabel]) {
                    aggregatedData[monthLabel] = 0;
                }
                aggregatedData[monthLabel] += count;
            });
            break;

        case 'quarter':
            entries.forEach(({ date, count }) => {
                const quarter = Math.floor(date.getMonth() / 3) + 1;
                const quarterLabel = `Q${quarter} ${date.getFullYear()}`;

                if (!aggregatedData[quarterLabel]) {
                    aggregatedData[quarterLabel] = 0;
                }
                aggregatedData[quarterLabel] += count;
            });
            break;

        case 'year':
            entries.forEach(({ date, count }) => {
                const yearLabel = date.getFullYear().toString();

                if (!aggregatedData[yearLabel]) {
                    aggregatedData[yearLabel] = 0;
                }
                aggregatedData[yearLabel] += count;
            });
            break;

        case 'all':
            entries.forEach(({ date, count }) => {
                const dateLabel = date.toLocaleDateString();
                aggregatedData[dateLabel] = count;
            });
            break;

        default:
            throw new Error(`Unknown view: ${view}`);
    }

    return aggregatedData;
}

// Update chart based on selected process and view
function updateChart(process, view) {
    const rawData = processData[process];
    const aggregatedData = aggregateData(rawData, view);
    const labels = Object.keys(aggregatedData);
    const counts = Object.values(aggregatedData);

    // Update chart data
    chart.data.labels = labels;
    chart.data.datasets[0].data = counts;
    chart.options.plugins.title.text = `${process}`; // Update title here
    chart.update();
}

// Function to search for data on a specific date
function searchDate() {
    const process = processSelect.value;
    const inputDate = dateInput.value;
    
    // Format date to match keys in processData
    const formattedDate = inputDate.split('-').reverse().join('-');

    if (process && processData[process][formattedDate] !== undefined) {
        const count = processData[process][formattedDate];
        dateResult.textContent = `Count for ${formattedDate}: ${count}`;
    } else {
        dateResult.textContent = 'No data found for the selected date.';
    }
}

// Attach search function to button click
document.getElementById('search-button').addEventListener('click', searchDate);


function closeDropdowns() {
    document.getElementById('team-mi-dropdown').style.display = 'none';
    document.getElementById('data-display').style.display = 'none';
}

function closeDropdowns() {
    document.getElementById('team-mi-dropdown').style.display = 'none';
    document.getElementById('data-display').style.display = 'none';
    window.scrollTo(0, 0); // Scrolls to the top of the page
}