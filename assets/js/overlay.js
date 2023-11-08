// Get both modal elements and the CTA button elements
const cityModelOverlay = document.getElementById('byModel');
const infoModelOverlay = document.getElementById('infoModel');
const ctaKnapper = document.querySelectorAll('.cta-knap');

// Open the byModel when any "Lej Stand" button is clicked
ctaKnapper.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation to ensure the window click event doesn't interfere
        if (btn.getAttribute("data-action") === "skift-til-infoModel") {
            cityModelOverlay.style.display = 'none'; // Hide the first modal
            infoModelOverlay.style.display = 'flex'; // Display the second modal
        } else if (btn.getAttribute("data-action") === "OpenByModel") {
            cityModelOverlay.style.display = 'flex'; // Display the first modal
        }
    });
});

// Close the modals when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === cityModelOverlay || event.target === infoModelOverlay) {
        cityModelOverlay.style.display = 'none';
        infoModelOverlay.style.display = 'none';
    }
});
