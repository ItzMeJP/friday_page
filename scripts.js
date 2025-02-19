document.addEventListener("DOMContentLoaded", function () {
    console.log("Robot Showcase page loaded");

    // VIDEO GALLERY FUNCTIONALITY
    const videos = [
        "https://www.youtube.com/embed/6NWvCWHk114?si=5kOXZJxNlcR5Zkad",
        "https://www.youtube.com/embed/lxumEDf_yMo?si=9mrNm12k_ZftbkZ8",
        "https://www.youtube.com/embed/XDCN7my3lKU?si=wkvBmSZtutIGhkI6",
        "https://www.youtube.com/embed/xTmY6OaWzAI?si=xhS34lIXc6qQTpUB"
    ];

    let currentVideoIndex = 0;
    const videoFrame = document.getElementById("video-frame");
    const prevVideoBtn = document.getElementById("prev-video");
    const nextVideoBtn = document.getElementById("next-video");

    function updateVideo(index) {
        videoFrame.src = videos[index];
    }

    prevVideoBtn.addEventListener("click", function () {
        currentVideoIndex = (currentVideoIndex > 0) ? currentVideoIndex - 1 : videos.length - 1;
        updateVideo(currentVideoIndex);
    });

    nextVideoBtn.addEventListener("click", function () {
        currentVideoIndex = (currentVideoIndex < videos.length - 1) ? currentVideoIndex + 1 : 0;
        updateVideo(currentVideoIndex);
    });

    // PHOTO CAROUSEL FUNCTIONALITY
    const imageFolder = "images/friday/";
    const imageFiles = [
        "friday_mission_automotive_3000x4000.jpeg",
        "friday_mission_fasten_3000x4000.jpeg",
        "friday_mission_logistics_3000x4000.jpeg",
        "place.jpg",
        "pick_rotated.jpg"
    ];

    const carouselSlide = document.querySelector(".carousel-slide");

    imageFiles.forEach((file, index) => {
        let img = document.createElement("img");
        img.src = imageFolder + file;
        img.alt = `Photo ${index + 1}`;
        carouselSlide.appendChild(img);
    });

    let currentIndex = 0;
    let images = [];

    function initializeCarousel() {
        images = Array.from(document.querySelectorAll(".carousel-slide img"));
        if (images.length < 3) {
            console.error("Not enough images for a carousel.");
            return;
        }
        updateCarousel();
    }

    function updateCarousel() {
        images.forEach((img, i) => {
            img.style.display = "none";
            img.classList.remove("active", "side");
        });

        let nextIndex = (currentIndex + 1) % images.length;
        let afterNextIndex = (currentIndex + 2) % images.length;

        images[currentIndex].style.display = "block";
        images[currentIndex].classList.add("side");

        images[nextIndex].style.display = "block";
        images[nextIndex].classList.add("active");

        images[afterNextIndex].style.display = "block";
        images[afterNextIndex].classList.add("side");
    }

    document.getElementById("prev-photo").addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    document.getElementById("next-photo").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 3000);

    initializeCarousel();
});
