function writeToContentIndex(message) {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    contentIndex.appendChild(pre);
}

function init () {
    let message =
            `<p id ="writing"> 컴퓨터는 잘못하지 않는다.` +
            `<p>` + `tistory : kscodebase.tistory.com` +
            `<p>` + `google  : kscodebase@gmail.com`   +
            `<p>` + `github  : kakamura`               +
            `<p>` + `univ.   : gachon univ.`           ;
    writeToContentIndex(message);
}

init();