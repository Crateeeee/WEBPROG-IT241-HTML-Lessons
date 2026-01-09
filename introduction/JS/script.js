/* =========================================
   NAVBAR TOGGLE & CLOSE (Mobile)
   ========================================= */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* =========================================
   GALLERY LIGHTBOX MODAL
   ========================================= */
// Get the modal parts
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("full-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-item img');

// Loop through images and add click event
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "flex"; // Show modal
        modalImg.src = this.src; // Set modal image to clicked image src
        // Optional: Set caption to the alt text of the image
        // captionText.innerHTML = this.alt; 
        
        // Disable scrolling on body while modal is open
        document.body.style.overflow = "hidden";
    });
});


// Function to close modal
function closeModal() {
    modal.style.display = "none";
    // Re-enable scrolling
    document.body.style.overflow = "auto";
}

// Close when clicking the 'x'
if(closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Close when clicking outside the image (on the background overlay)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


/* =========================================
   SIMPLE TILT EFFECT (Optional Visual)
   ========================================= */
const tiltCards = document.querySelectorAll(".tilt-card");
tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; const y = e.clientY - rect.top;
        const centerX = rect.width / 2; const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    });
});