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

cursorBlinking()
