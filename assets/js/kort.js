document.addEventListener('DOMContentLoaded', function () {
    var pinpointsInfo = {
        'pinpoint-1': '<h3>Odense Havn</h3><p class=adressetxt>EDIONSVEJ 5000 ODENSE</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'pinpoint-2': 'Copenhagen, the capital of Denmark...'
    };

    var pinpoints = document.getElementsByClassName('pinpoint');
    var overlay = document.getElementById('overlayx');
    var overlayText = document.getElementById('overlayx-text');

    function showOverlay(event) {
        // Ensures we get the pinpoint element even if the target is a child
        var pinpoint = event.currentTarget; 
        var info = pinpointsInfo[pinpoint.id];
        overlayText.innerHTML = info;

        // Positioning logic adjusted to make sure the overlay appears next to the pinpoint
        var rect = pinpoint.getBoundingClientRect();
        overlay.style.top = (rect.top + window.scrollY - overlay.offsetHeight - 10) + 'px';
        overlay.style.left = (rect.left + window.scrollX - overlay.offsetWidth / 2 + pinpoint.offsetWidth / 2) + 'px';
        overlay.style.display = 'block';
    }

    function hideOverlay() {
        overlay.style.display = 'none';
    }

    Array.from(pinpoints).forEach(function (pinpoint) {
        pinpoint.addEventListener('mouseenter', showOverlay); // Use mouseenter instead of mouseover
        pinpoint.addEventListener('mouseleave', hideOverlay); // Use mouseleave instead of mouseout
    });
});