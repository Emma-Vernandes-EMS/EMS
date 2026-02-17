
fwindow.addEventListener("scroll", () => {
    document.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const y = window.scrollY * speed;
        layer.style.transform = `translateY(${y}px)`;
    });
});




