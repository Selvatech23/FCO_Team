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
    "FDP-Credit": { "25-10-2024": 100, "26-10-2024": 120, "27-10-2024": 140 },
    "INC-Debit": {
        "01-10-2024": 245, "02-10-2024": 345, "03-10-2024": 450, "04-10-2024": 368, "05-10-2024": 458,
        "06-10-2024": 528, "07-10-2024": 700, "08-10-2024": 423, "09-10-2024": 235, "10-10-2024": 345,
        "11-10-2024": 652, "12-10-2024": 450, "13-10-2024": 650, "14-10-2024": 300, "15-10-2024": 350,
        "16-10-2024": 400, "17-10-2024": 389, "18-10-2024": 485, "19-10-2024": 589, "20-10-2024": 578,
        "21-10-2024": 600, "22-10-2024": 480, "23-10-2024": 580, "24-10-2024": 650, "25-10-2024": 548,
        "26-10-2024": 685, "27-10-2024": 600, "28-10-2024": 582, "29-10-2024": 654, "30-10-2024": 498,
        "31-10-2024": 852, "01-11-2024": 700, "02-11-2024": 522
    },
    "PSD-Credit": { "25-10-2024": 150, "26-10-2024": 180, "27-10-2024": 170 },
    "PSD-Debit": { "25-10-2024": 130, "26-10-2024": 160, "27-10-2024": 190 },
    "INC-Credit": { "25-10-2024": 228, "26-10-2024": 528, "27-10-2024": 628, "28-10-2024": 328, "29-10-2024": 528, "30-10-2024": 428 },
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
