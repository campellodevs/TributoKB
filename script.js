const years = document.querySelectorAll(".timeline li");
const info = document.querySelector(".timeline-info");

years.forEach(year => {
    year.addEventListener("mouseenter", () => {
        info.style.opacity = "0";
        setTimeout(() => {
            info.textContent = year.dataset.info;
            info.style.opacity = "1";
        }, 150);
    });
});