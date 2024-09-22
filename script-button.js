const noBtn = document.getElementById("no-btn");

    noBtn.addEventListener("click", function () {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Randomize new position within the viewport
        const randomX = Math.floor(Math.random() * (viewportWidth - noBtn.offsetWidth));
        const randomY = Math.floor(Math.random() * (viewportHeight - noBtn.offsetHeight));

        // Set new position for the "No" button
        noBtn.style.position = "absolute";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });