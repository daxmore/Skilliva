// Chart script
const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Course Registrations',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#136f63',
            backgroundColor: 'rgba(19, 111, 99, 0.2)',
            borderWidth: 2,
            tension: 0.4 // Smooth the line
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});