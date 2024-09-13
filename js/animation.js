// Video data array
const videosData = [
    { src: "assests/videos/design1.mp4" },
    { src: "assests/videos/design2.mp4" },
    { src: "assests/videos/design3.mp4" },
    { src: "assests/videos/design4.mp4" },
    { src: "assests/videos/design5.mp4" },
    { src: "assests/videos/design6.mp4" },
    { src: "assests/videos/logo animation.mp4" },
    { src: "assests/videos/freelancer1.mp4" },
    { src: "assests/videos/freelancer2.mp4" },
    { src: "assests/videos/freelancer3.mp4" },
    { src: "assests/videos/freelancer4.mp4" },
    { src: "assests/videos/video editing1.mp4" },
    { src: "assests/videos/video editing2.mp4" },
    { src: "assests/videos/video editing4.mp4" },
    { src: "assests/videos/presentation 1.mp4" },
    { src: "assests/videos/animation 1.mp4" },
    { src: "assests/videos/presentation 2.mp4" },
    { src: "assests/videos/graphics 1.mp4" }
];

// Get the container for videos
const videosContainer = document.querySelector(".videos");

// Add videos dynamically to the gallery
videosData.forEach(video => {
    const videoItem = document.createElement('li');
    videoItem.classList.add('video');
    videoItem.innerHTML = `<video src="${video.src}" muted></video>`;
    videosContainer.appendChild(videoItem);
});

// Now query for all the videos AFTER they are added
const allVideos = document.querySelectorAll(".videos .video");
const lightbox = document.querySelector(".lightbox");
const closevideoBtn = lightbox.querySelector(".close-icon");

// Function to show lightbox and play video
const showLightbox = (videoSrc) => {
    // Showing lightbox and updating video source
    const lightboxVideo = lightbox.querySelector("video");
    lightboxVideo.src = videoSrc;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
    lightboxVideo.play();
};

// Attach event listeners for click (to show lightbox)
allVideos.forEach(video => {
    video.addEventListener("click", () => showLightbox(video.querySelector("video").src));
});

// Close lightbox
closevideoBtn.addEventListener("click", () => {
    const lightboxVideo = lightbox.querySelector("video");
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
});

// Check if it's a mobile device
const isMobile = window.innerWidth <= 688;

// Handle play/pause on hover for desktop and autoplay for mobile
allVideos.forEach(videoElement => {
    const video = videoElement.querySelector("video");

    if (!isMobile) {
        // For desktop: play on hover, pause when mouse leaves
        videoElement.addEventListener("mouseover", () => {
            video.play();
        });

        videoElement.addEventListener("mouseout", () => {
            video.pause();
            video.currentTime = 0; // Reset the video to the start
        });
    } else {
        // For mobile: autoplay and loop
        video.setAttribute("autoplay", true);
        video.setAttribute("loop", true);
        video.play();  // Ensure it starts playing
    }
});
