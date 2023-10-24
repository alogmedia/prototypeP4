// Get both modal elements and the CTA button elements
const cityModel = document.getElementById('byModel');
const infoModel = document.getElementById('infoModel');
const ctaKnapper = document.querySelectorAll('.cta-knap');

// Open the byModel when any "Lej Stand" button is clicked
ctaKnapper.forEach(btn => {
    btn.addEventListener('click', function(event) {
        // Prevent event propagation to ensure the window click event doesn't interfere
        event.stopPropagation();
        if (btn.getAttribute("data-action") === "skift-til-infoModel") {
            // Switch to the second modal when "Videre" is clicked
            byModel.style.display = 'none';
            infoModel.style.display = 'flex';
        } else if (btn.getAttribute("data-action") === "OpenByModel") {
            byModel.style.display = 'flex';
        }
    });
});

// Close the modals when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === byModel || event.target === infoModel) {
        byModel.style.display = 'none';
        infoModel.style.display = 'none';
    }
});