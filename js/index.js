//you could do the cursor blinking in css, but why not use some janky js from time to time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cursorBlinking() {
    while(true) {
        await sleep(1000);
        document.getElementById("About").innerHTML = "About me";
        await sleep(1000);
        document.getElementById("About").innerHTML = "About me_";
    }
}

cursorBlinking();
