const output = document.getElementsByClassName("output-item");
let lastTime = 0;
let hideCopy = 0;

for(let i = 0; i < output.length; i++) {
    output[i].addEventListener("click", () => {
        navigator.clipboard.writeText(output[i].textContent.replace(/[^\d.]/g, ""));
        hideCopy = 1;
    })
}

function tick(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    if (hideCopy <= 0) {
        document.getElementById("alert").classList.remove("show");
    } else {
        document.getElementById("alert").classList.add("show");
    }

    hideCopy -= deltaTime;

    // End of Loop
    requestAnimationFrame(tick);
};

requestAnimationFrame(tick);