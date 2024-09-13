// Sample data array for upcoming webinars
const webinars = [
    {
        title: "Intro to AI in 2024",
        date: "Sept 20, 2024",
        time: "2:00 PM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Web Development: The Future",
        date: "Sept 25, 2024",
        time: "10:00 AM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Data Science Essentials",
        date: "Sept 28, 2024",
        time: "1:00 PM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Cybersecurity Trends 2024",
        date: "Oct 1, 2024",
        time: "11:00 AM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Marketing Automation Tools",
        date: "Oct 5, 2024",
        time: "4:00 PM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Blockchain for Business",
        date: "Oct 10, 2024",
        time: "3:00 PM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Cloud Computing Best Practices",
        date: "Oct 12, 2024",
        time: "2:00 PM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "UI/UX Design Principles",
        date: "Oct 15, 2024",
        time: "5:00 PM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Agile Project Management",
        date: "Oct 20, 2024",
        time: "6:00 PM",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    }
];

// Function to create and append webinar cards dynamically
function loadWebinars() {
    const container = document.getElementById("webinars-container");
    webinars.forEach(webinar => {
        const webinarCard = `
            <div class="col-lg-4 col-md-6">
                <div class="webinar-card card">
                    <img src="${webinar.image}" alt="Webinar Image" class="webinar-img">
                    <div class="card-body text-center">
                        <h5 class="card-title" style="font-size: 1.5rem;">${webinar.title}</h5>
                        <p>Date: ${webinar.date} | Time: ${webinar.time}</p>
                        <a href="${webinar.link}" class="btn btn-teal">Register Now</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += webinarCard;
    });
}

// Call the function to load webinars when the page is ready
document.addEventListener("DOMContentLoaded", loadWebinars);


// sample data for Courses
const popularCourses = [
    {
        title: "Course 1",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "9h 42m",
        level: "Medium",
        price: "$34.26",
        imgSrc: "https://via.placeholder.com/200"
    },
    {
        title: "Course 2",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "10h 30m",
        level: "Medium",
        price: "$39.99",
        imgSrc: "https://via.placeholder.com/200"
    },
    {
        title: "Course 3",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "8h 20m",
        level: "Advanced",
        price: "$29.99",
        imgSrc: "https://via.placeholder.com/200"
    }
];

const trendingCourses = [
    {
        title: "Course 4",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "7h 15m",
        level: "Beginner",
        price: "$25.00",
        imgSrc: "https://via.placeholder.com/200"
    },
    {
        title: "Course 5",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "6h 30m",
        level: "Medium",
        price: "$28.50",
        imgSrc: "https://via.placeholder.com/200"
    },
    {
        title: "Course 6",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "12h 10m",
        level: "Advanced",
        price: "$42.00",
        imgSrc: "https://via.placeholder.com/200"
    }
];

const freeCourses = [
    {
        title: "Course 7",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "4h 30m",
        level: "Beginner",
        price: "Free",
        imgSrc: "https://via.placeholder.com/200"
    },
    {
        title: "Course 8",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "5h 45m",
        level: "Medium",
        price: "Free",
        imgSrc: "https://via.placeholder.com/200"
    },
    {
        title: "Course 9",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "6h 20m",
        level: "Advanced",
        price: "Free",
        imgSrc: "https://via.placeholder.com/200"
    }
];

function createCourseCard(course) {
    return `
                <div class="col-md-4">
                    <div class="course-card">
                        <img src="${course.imgSrc}" alt="Course Image">
                        <div class="course-card-body">
                            <h5 class="course-title">${course.title}</h5>
                            <p class="course-description">${course.description}</p>
                            <div>
                                <span class="course-duration">Duration: ${course.duration}</span>
                                <span class="course-level">Level: ${course.level}</span>
                            </div>
                            <div class="course-price mt-3">${course.price}</div>
                        </div>
                    </div>
                </div>
            `;
}

function displayCourses(courses, containerId) {
    const container = document.getElementById(containerId);
    courses.forEach(course => {
        container.innerHTML += createCourseCard(course);
    });
}

// Render the courses in each section
displayCourses(popularCourses, 'popular-courses');
displayCourses(trendingCourses, 'trending-courses');
displayCourses(freeCourses, 'free-courses');

