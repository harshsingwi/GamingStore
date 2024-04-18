document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftButton = document.getElementById("scrollLeftButton");
    const scrollRightButton = document.getElementById("scrollRightButton");
    const scrollContainer = document.querySelector(".csmanyyimgg");

    // Set the scroll step as the width of one image
    const scrollStep = document.querySelector(".csmanyimg1").offsetWidth;

    scrollRightButton.addEventListener("click", function() {
        scrollContainer.scrollBy(scrollStep, 0);
    });

    scrollLeftButton.addEventListener("click", function() {
        scrollContainer.scrollBy(-scrollStep, 0);
    });
});
