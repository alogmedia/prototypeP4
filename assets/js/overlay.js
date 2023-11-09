// Get both modal elements and the CTA button elements
const cityModelOverlay = document.getElementById('byModel');
const infoModelOverlay = document.getElementById('infoModel');
const betalingModelOverlay = document.getElementById('betalingModel');
const afslutModelOverlay = document.getElementById('afslutModel');

const ctaKnapper = document.querySelectorAll('.cta-knap');

// Open the byModel when any "Lej Stand" button is clicked
ctaKnapper.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation to ensure the window click event doesn't interfere
        if (btn.getAttribute("data-action") === "skift-til-infoModel") {
            cityModelOverlay.style.display = 'none'; // Hide the first modal
            infoModelOverlay.style.display = 'flex'; // Display the second modal
        } else if (btn.getAttribute("data-action") === "skift-til-betalingModel") {
            infoModelOverlay.style.display = 'none'; // Display the second modal
            betalingModelOverlay.style.display = 'flex'; // Hide the first modal
        } else if (btn.getAttribute("data-action") === "skift-til-afslutModel") {
            betalingModelOverlay.style.display = 'none'; // Display the second modal
            afslutModelOverlay.style.display = 'flex'; // Hide the first modal
        } else if (btn.getAttribute("data-action") === "OpenByModel") {
            cityModelOverlay.style.display = 'flex'; // Display the first modal
        } else if (btn.getAttribute("data-action") === "afslut") {
            afslutModelOverlay.style.display = 'none'; // Display the first modal
        }
    });
});

// Get the image element by its ID
const mobilepayImage = document.getElementById('mobilepayImage');

// Bind a click event to the image
mobilepayImage.addEventListener('click', function() {
    // Perform the same action as the button with data-action="skift-til-afslutModel"
    betalingModelOverlay.style.display = 'none'; // Hide the current modal
    afslutModelOverlay.style.display = 'flex';   // Display the next modal
});
// Close the modals when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === cityModelOverlay || event.target === infoModelOverlay || event.target === betalingModelOverlay || event.target === afslutModelOverlay) {
        cityModelOverlay.style.display = 'none';
        infoModelOverlay.style.display = 'none';
        betalingModelOverlay.style.display = 'none';
        afslutModelOverlay.style.display = 'none';   
    }
});
