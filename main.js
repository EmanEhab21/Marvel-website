// Smooth scroll when clicking on navbar links
document.querySelectorAll('ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Show smooth scroll to "characters" section when clicking "See more"
document.getElementById('seeMoreButton').addEventListener('click', function () {
    const targetSection = document.getElementById('characters');

    window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for navbar height
        behavior: 'smooth'
    });
});

// Image slider functionality
let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo-container .photo');

// Function to show the selected photo
function showPhoto(index) {
    photos.forEach((photo, i) => {
        photo.style.transform = `translateX(${(i - index) * 100}%)`;  // Move images to show the correct one
    });
}

// Function to go to the next photo
function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;  // Move to the next image
    showPhoto(currentPhotoIndex);
}

// Function to go to the previous photo
function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;  // Move to the previous image
    showPhoto(currentPhotoIndex);
}
