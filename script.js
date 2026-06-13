document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll("a");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-2px)";
            button.style.transition = "0.3s";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
        });
    });

});
