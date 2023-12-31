console.log("Simon.js køre med klatten....");

// en eventlistener som henter elementerne fra dom'en
document.addEventListener('DOMContentLoaded', function () {
//Skaber en variabel, som samler listeelementerne
    let nålsInfo = {
        'nål-1': '<h3>Odense Havn</h3><p class=adressetxt>EDIONSVEJ 5000 ODENSE C</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-2': '<h3>København Rådhusplads</h3><p class=adressetxt>1599 KØBENHAVN V</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-3': '<h3>Ålborg Havn</h3><p class=adressetxt>EDIONSVEJ POUL BUÅS VEJ 34, 9000 AALBORG</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-4': '<h3>Århus</h3><p class=adressetxt>INGERSLEVS BOULEletD, 8000 AARHUS C</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-5': '<h3>Kolding</h3><p class=adressetxt>AMBOLTEN 1-6, 6000 KOLDING</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-6': '<h3>Under Broen</h3><p class=adressetxt>GL. STRANDVEJ, 5500 MIDDELFART </p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-7': '<h3>Roskilde</h3><p class=adressetxt>MØLLEHUSVEJ 15, 4000 ROSKILDE</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-8': '<h3>Nyborg Rådhus</h3><p class=adressetxt>TORVET 1, 5800 NYBORG</p><p class=tidtxt>20. maj 09:00-17:00</p>',
        'nål-9': '<h3>Vejle Rådhus</h3><p class=adressetxt>RÅDHUSTORVET 1, 7100 VEJLE </p><p class=tidtxt>20. maj 09:00-17:00</p>',
    };

    let nåls = document.getElementsByClassName('nål');
    const overlay = document.getElementById('overlayx');
    const overlayText = document.getElementById('overlayx-text');

//En funktion som viser tekstboksen
    function showOverlay(event) {
        let nål = event.currentTarget; 
// skaber en array ud fra listeelmenternes variabel
        let info = nålsInfo[nål.id];
// fortæller hvad der skal stå i tekstboksen 
        overlayText.innerHTML = info;

        let rect = nål.getBoundingClientRect();
//justere tekstenboksens placering
        overlay.style.top = (rect.top + window.scrollY - overlay.offsetHeight - 10) + 'px';
        overlay.style.left = (rect.left + window.scrollX - overlay.offsetWidth / 2 + nål.offsetWidth / 2) + 'px';
        overlay.style.display = 'block';
    }

//En funktion som kan skjule tekstboksen
    function hideOverlay() {
        overlay.style.display = 'none';
    }
//Skaber et loop som gentager funktionen for hvert nåleelement
    Array.from(nåls).forEach(function (nål) {
        nål.addEventListener('mouseenter', showOverlay);
        nål.addEventListener('mouseleave', hideOverlay); 
    });
});