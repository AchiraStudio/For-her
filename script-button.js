const noBtn = document.getElementById("no-btn");
    const container = document.querySelector(".container");

    noBtn.addEventListener("click", function () {
        // Get container dimensions
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        // Randomize new position
        const randomX = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight));

        // Set new position for the "No" button
        noBtn.style.position = "absolute";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });