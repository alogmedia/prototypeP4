console.log("sofie.js kører...");

// Henter alle HTML elementer med klassen "fag-page" og gemmer dem i variablen "faq".
let faq = document.getElementsByClassName("faq-page");
// varialben "i" bliver dekleret med ingen værdi. Den vil blive brugt som tæller i følgende løkke.
let i;

for (i = 0; i < faq.length; i++) {
// For-løkke for alle faq-page elementer. Løkken starter ved i=o og fortsætter så længe "i" er mindre end længde "faq" (antal elementer) og forøger "i" i hver omgange.
    faq[i].addEventListener("click", function () {
// Eventlisteneren tilføjer en klikhændelse på alle "fag-page" elementer. Når elementer med denne klasse klikkes på, udføres følgende funktion.    

        this.classList.toggle("active");
// Viser - når body er åben
        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } 
        else {
            body.style.display = "block";
        }
    });
}
