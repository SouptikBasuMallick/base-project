window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "rgba(15,23,42,0.95)";
    } else {
        nav.style.background = "rgba(15,23,42,0.8)";
    }
});