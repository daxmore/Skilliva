const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Total Users', 'Total Courses', 'Clients', 'Freelancers', 'New Enrollments'],
        datasets: [{
            label: 'Growth Over Time',
            data: [70000, 34, 45000, 15000, 1500],
            borderColor: '#136f63',
            backgroundColor: 'rgba(19, 111, 99, 0.2)',
            borderWidth: 2,
            tension: 0.4
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
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Category'
                }
            }
        }
    }
});