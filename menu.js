// menu.js

document.addEventListener("DOMContentLoaded", function () {
    // Inhoud van het menu
    const menuItems = [
        { text: "Home", link: "#home" },
        { text: "Retraites", link: "#retraites" },
        { text: "Transport", link: "#transport" },
        { text: "Nieuwsbrief", link: "#nieuwsbrief" },
        { text: "Wekelijkse Meditaties", link: "#meditaties" }
    ];

    // Maak een nieuw nav-element
    const nav = document.createElement("nav");

    // Voeg de menu-items toe aan het nav-element
    menuItems.forEach(item => {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.text;
        nav.appendChild(link);
    });

    // Voeg het nav-element toe aan de header
    const header = document.querySelector("header");
    header.appendChild(nav);
});
