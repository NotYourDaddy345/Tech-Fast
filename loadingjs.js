window.onload = function startLoading() {
    document.getElementById("loading-screen").style.display = "flex"; // Show loading screen
    let progress = 0;
    let loadingText = document.getElementById("loading-text");

    let interval = setInterval(() => {
        let randomIncrease = Math.floor(Math.random() * 21); // Random number between 0-20
        progress += randomIncrease;

        if (progress > 100) progress = 100; // Ensure it doesn’t exceed 100%

        loadingText.innerText = `Redirecting... ${progress}%`; // Update UI

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                window.location.href = "/index/index2.html"; // Redirect after full load
            }, 140);
        }
    }, 140); // Update every 0.3s
};
