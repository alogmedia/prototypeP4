console.log("albert.js kører...");

// Hent model elementer og CTA knapperne
const cityModelOverlay = document.getElementById('byModel');
const infoModelOverlay = document.getElementById('infoModel');
const betalingModelOverlay = document.getElementById('betalingModel');
const afslutModelOverlay = document.getElementById('afslutModel');

const ctaKnapper = document.querySelectorAll('.cta-knap');

// Åben vælg by overlay når en "Lej Stand" CTA knap bliver klikket på
ctaKnapper.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation to ensure the window click event doesn't interfere
        if (btn.getAttribute("data-action") === "skift-til-infoModel") {
            cityModelOverlay.style.display = 'none'; // Display none(Gem den væk)
            infoModelOverlay.style.display = 'flex'; // Vis det næste overlay
        } else if (btn.getAttribute("data-action") === "skift-til-betalingModel") {
            infoModelOverlay.style.display = 'none'; 
            betalingModelOverlay.style.display = 'flex';
        } else if (btn.getAttribute("data-action") === "skift-til-afslutModel") {
            betalingModelOverlay.style.display = 'none'; 
            afslutModelOverlay.style.display = 'flex'; 
        } else if (btn.getAttribute("data-action") === "OpenByModel") {
            cityModelOverlay.style.display = 'flex'; 
        } else if (btn.getAttribute("data-action") === "afslut") {
            afslutModelOverlay.style.display = 'none';
        }
    });
});

// Find mobilepay billedet på ID
const mobilepayImage = document.getElementById('mobilepayImage');

// Tildel klik event til billedet
mobilepayImage.addEventListener('click', function() {
    // Gør det samme som når man trykker betal
    betalingModelOverlay.style.display = 'none';
    afslutModelOverlay.style.display = 'flex';
});
// Klikker man udenfor overlay skal den lukke formularen.
window.addEventListener('click', function(event) {
    if (event.target === cityModelOverlay || event.target === infoModelOverlay || event.target === betalingModelOverlay || event.target === afslutModelOverlay) {
        cityModelOverlay.style.display = 'none';
        infoModelOverlay.style.display = 'none';
        betalingModelOverlay.style.display = 'none';
        afslutModelOverlay.style.display = 'none';   
    }
});