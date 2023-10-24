document.addEventListener("DOMContentLoaded", function() {
    // Get the menu icon and menu items elements
    const menuIcon = document.querySelector(".menu-icon");
    const menuItems = document.querySelector(".menu-items");

    // Add click event listener to the menu icon
    menuIcon.addEventListener("click", function() {
        // Toggle the 'active' class for the menu items
        menuItems.classList.toggle("active");
    });
});