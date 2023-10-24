document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("scrollTopBtn");
    let maxScrollDepth = document.body.scrollHeight - window.innerHeight;

    window.onscroll = function() {
        // Show the button after scrolling a bit
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }

        // Adjust gradient based on scroll depth
        let scrollDepth = document.body.scrollTop || document.documentElement.scrollTop;
        let fillPercentage = 100 - (scrollDepth / maxScrollDepth * 100);

        // Set the gradient background
        btn.style.background = `linear-gradient(white ${fillPercentage}%, #00985F ${fillPercentage}%)`;

        // Adjust arrow color based on contrast
        btn.style.color = fillPercentage < 50 ? 'white' : '#00985F'; 
    };
});

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}

