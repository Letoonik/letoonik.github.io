function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function zeiger() {
    while(true) {
        await sleep(1000);
        document.getElementById("About").innerHTML = "About me";
        await sleep(1000);
        document.getElementById("About").innerHTML = "About me_";
    }
}

zeiger()
