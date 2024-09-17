// Sample data array for upcoming webinars
const webinars = [
    {
        title: "Intro to AI in 2024",
        date: "Sept 20, 2024",
        time: "2:00 PM",
        image: "assests/images/AI.jpeg",
        link: "#"
    },
    {
        title: "Web Development: The Future",
        date: "Sept 25, 2024",
        time: "10:00 AM",
        image: "assests/images/web.webp",
        link: "#"
    },
    {
        title: "Data Science Essentials",
        date: "Sept 28, 2024",
        time: "1:00 PM",
        image: "assests/images/data_science.webp",
        link: "#"
    },
    {
        title: "Cybersecurity Trends 2024",
        date: "Oct 1, 2024",
        time: "11:00 AM",
        image: "assests/images/cyber security.png",
        link: "#"
    },
    {
        title: "Marketing Automation Tools",
        date: "Oct 5, 2024",
        time: "4:00 PM",
        image: "assests/images/marketing.jpg",
        link: "#"
    },
    {
        title: "Blockchain for Business",
        date: "Oct 10, 2024",
        time: "3:00 PM",
        image: "assests/images/blockchain.png",
        link: "#"
    },
    {
        title: "Cloud Computing Best Practices",
        date: "Oct 12, 2024",
        time: "2:00 PM",
        image: "assests/images/cloud computing.png",
        link: "#"
    },
    {
        title: "UI/UX Design Principles",
        date: "Oct 15, 2024",
        time: "5:00 PM",
        image: "assests/images/ux-ui.jpg",
        link: "#"
    },
    {
        title: "Agile Project Management",
        date: "Oct 20, 2024",
        time: "6:00 PM",
        image: "assests/images/agile.webp",
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
                        <a href="₹{webinar.link}" class="btn btn-teal">Register Now</a>
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
        title: "App Development",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "9h 42m",
        level: "Medium",
        price: "₹3400.00",
        imgSrc: "assests/images/app dev.jpg"
    },
    {
        title: "Graphic designer",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "10h 30m",
        level: "Medium",
        price: "₹3949.99",
        imgSrc: "assests/images/graphic designer.png"
    },
    {
        title: "Virtual Assistent",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "8h 20m",
        level: "Advanced",
        price: "₹2900.99",
        imgSrc: "assests/images/AI.jpeg"
    }
];

const trendingCourses = [
    {
        title: "Digital Marketing",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "7h 15m",
        level: "Beginner",
        price: "₹2500.00",
        imgSrc: "assests/images/marketing.jpg"
    },
    {
        title: "Video Editor",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "6h 30m",
        level: "Medium",
        price: "₹1800.50",
        imgSrc: "assests/images/video-editor.jpg"
    },
    {
        title: "Translateion Services",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "12h 10m",
        level: "Advanced",
        price: "₹1440.00",
        imgSrc: "assests/images/translation.jpg"
    }
];

const freeCourses = [
    {
        title: "Content Writing",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "4h 30m",
        level: "Beginner",
        price: "Free",
        imgSrc: "assests/images/content.jpg"
    },
    {
        title: "UX/UI designer",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "5h 45m",
        level: "Medium",
        price: "Free",
        imgSrc: "assests/images/ux-ui.jpg"
    },
    {
        title: "Web Development",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
        duration: "6h 20m",
        level: "Advanced",
        price: "Free",
        imgSrc: "assests/images/web.webp"
    }
];

function createCourseCard(course) {
    return `
                <div class="col-md-4">
                    <div class="course-card">
                        <img src="${course.imgSrc}" alt="Course Image" style="object-fit:cover;">
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

