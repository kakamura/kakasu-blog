function doBlink() {
    let blink  = document.getElementById("basePage");
    blink.style.visibility = blink.style.visibility == "" ? "hidden" : "";
}

function startBlink() {
    setInterval("doBlink()",800);
}
window.onload = startBlink;