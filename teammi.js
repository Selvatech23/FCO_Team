// Get elements
const toggleTeamMi = document.getElementById('toggle-team-mi');
const teamMiDropdown = document.getElementById('team-mi-dropdown');
const processSelect = document.getElementById('process-select');
const timeframeSelect = document.getElementById('timeframe-select');
const dataDisplay = document.getElementById('data-display');
const selectedProcess = document.getElementById('selected-process');
const miChart = document.getElementById('miChart').getContext('2d');

// Sample data for the processes
const processData = {
    "FDP-Credit": { "25-10-2024": 100, "26-10-2024": 120, "27-10-2024": 140 },
    "INC-Debit": {
        "01-10-2024": 245,
        "02-10-2024": 345,
        "03-10-2024": 450,
        "04-10-2024": 368,
        "05-10-2024": 458,
        "06-10-2024": 528,
        "07-10-2024": 700,
        "08-10-2024": 423,
        "09-10-2024": 235,
        "10-10-2024": 345,
        "11-10-2024": 652,
        "12-10-2024": 450,
        "13-10-2024": 650,
        "14-10-2024": 300,
        "15-10-2024": 350,
        "16-10-2024": 400,
        "17-10-2024": 389,
        "18-10-2024": 485,
        "19-10-2024": 589,
        "20-10-2024": 578,
        "21-10-2024": 600,
        "22-10-2024": 480,
        "23-10-2024": 580,
        "24-10-2024": 650,
        "25-10-2024": 548,
        "26-10-2024": 685,
        "27-10-2024": 600,
        "28-10-2024": 582,
        "29-10-2024": 654,
        "30-10-2024": 498,
        "31-10-2024": 852,
        "01-11-2024": 700,
        "02-11-2024": 522  
    },
    "PSD-Credit-1": { "25-10-2024": 150, "26-10-2024": 180, "27-10-2024": 170 },
    "PSD-Credit-2": { "25-10-2024": 130, "26-10-2024": 160, "27-10-2024": 190 },
    "INC-Credit": { "25-10-2024": 228, "26-10-2024": 528, "27-10-2024": 628 },
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
        updateChartData(process);
    } else {
        dataDisplay.style.display = 'none';
    }
});

// Handle timeframe selection
timeframeSelect.addEventListener('change', function() {
    const process = processSelect.value;
    if (process) {
        updateChartData(process);
    }
});

function updateChartData(process) {
    const timeframe = timeframeSelect.value;
    const rawData = processData[process];

    // Aggregate data based on selected timeframe
    let aggregatedData = {};
    for (const [date, count] of Object.entries(rawData)) {
        const dateObj = new Date(date.split('-').reverse().join('-')); // Convert date format
        let key;

        if (timeframe === 'weekly') {
            key = getWeekKey(dateObj);
        } else if (timeframe === 'monthly') {
            key = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1);
        } else if (timeframe === 'quarterly') {
            const quarter = Math.floor(dateObj.getMonth() / 3) + 1;
            key = dateObj.getFullYear() + '-Q' + quarter;
        } else if (timeframe === 'yearly') {
            key = dateObj.getFullYear().toString();
        } else {
            key = date; // Daily
        }

        if (!aggregatedData[key]) {
            aggregatedData[key] = 0;
        }
        aggregatedData[key] += count;
    }

    // Prepare data for chart
    const dates = Object.keys(aggregatedData);
    const counts = Object.values(aggregatedData);

    // Update chart data
    chart.data.labels = dates;
    chart.data.datasets[0].data = counts;
    chart.update();

    // Display data information
    let dataInfo = '';
    for (const date in aggregatedData) {
        dataInfo += `${date}: ${aggregatedData[date]}<br>`;
    }
    document.getElementById('data-info').innerHTML = dataInfo;
}

function getWeekKey(date) {
    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Set to the start of the week (Sunday)
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay())); // Set to the end of the week (Saturday)
    return startDate.toISOString().split('T')[0] + ' to ' + endDate.toISOString().split('T')[0];
}