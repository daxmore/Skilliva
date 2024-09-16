// Video data array
const videosData = [
    { src: "https://cdn.dribbble.com/userupload/14090638/file/original-8bb2193fbab4f9b1cac096f86b611e99.mp4" },
    { src: "https://cdn.dribbble.com/userupload/16207455/file/original-3bd719925563525cbeb6d0a0ed448cb1.mp4" },
    { src: "https://cdn.dribbble.com/userupload/11569530/file/original-fad0d87860c4f62e71011b53136c47a4.mp4" },
    { src: "https://cdn.dribbble.com/userupload/9992722/file/original-d11bc2c6657836f7e0fe230683e76e89.mp4" },
    { src: "https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4" },
    { src: "https://cdn.dribbble.com/userupload/12500788/file/original-d0d5902e92e956768457c9f2997ed5d1.mp4" },
    { src: "https://cdn.dribbble.com/userupload/14574840/file/original-6b219b015cf28e17eb1f517130b1fa4d.mp4" },
    { src: "https://cdn.cuberto.com/cb/projects/cisco/cover.mp4" },
    { src: "https://cdn.dribbble.com/users/702789/screenshots/17097784/media/2d898544d2f5605a1ae42bde131f2084.mp4" },
    { src: "https://cdn.cuberto.com/cb/projects/qvino/cover.mp4" },
    { src: "https://cdn.dribbble.com/userupload/7664883/file/original-889ef9ae7ccb9342eaca4240e072b3d7.mp4" },
    { src: "https://cdn.dribbble.com/userupload/11091349/file/original-156792edb248745c26809727c24f9b0a.mp4" },
    { src: "https://cdn.dribbble.com/userupload/6395636/file/original-675a36ec0b8b3d8bf45cd9aabc9a7c3d.mp4" },
    { src: "https://cdn.dribbble.com/userupload/10671579/file/original-0ad696e7b1b94a67078e84a1cf724499.mp4" },
    { src: "https://cdn.cuberto.com/cb/projects/magma/cover.mp4" },
    { src: "https://cdn.cuberto.com/cb/projects/zelt/cover.mp4" },
    { src: "https://cdn.dribbble.com/userupload/16534726/file/original-e4d114047413b4f5c8254fbe9b9b5b84.mp4" },
    { src: "ahttps://cdn.dribbble.com/userupload/15814850/file/original-d88e90cb90725f215d44315a565a1a82.mp4" }
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
