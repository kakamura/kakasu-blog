function writeToContentIndex(message) {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    contentIndex.appendChild(pre);
}

function removeAllChild() {
    const parent = document.getElementById("contentIndex");
    if(parent === null) return;
    while (parent.hasChildNodes()) {
        parent.removeChild( parent.firstChild );
    }
}

function init () {
    //removeAllChild();
    let message =
            `<p id ="writing"> 컴퓨터는 잘못하지 않는다.` +
            `<p>` + `tistory : kscodebase.tistory.com` +
            `<p>` + `google  : kscodebase@gmail.com`   +
            `<p>` + `github  : kakamura`               +
            `<p>` + `univ.   : gachon univ.`           ;
    writeToContentIndex(message);
}

// changeIndex('PORTFOLIO');
function changeIndex(indexName) {
    removeAllChild();
    let message = `<p style = "font-family:'BMDOHYEON"> ${indexName}`;
    writeToContentIndex(message);
}

/*
function portfolioIndex() {
    removeAllChild();
    let message = 
        `<p style="font-size : 50px; font-family:'BMDOHYEON"> PORTFOLIO`;
    writeToContentIndex(message);
}

function aboutIndex() {
    removeAllChild();
    let message = 
        `<p style="font-size : 50px; font-family:'BMDOHYEON"> Stack`;
    writeToContentIndex(message);
}
*/
// init();
