/*
function writeToPortfolio(message) {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    common.appendChild(pre);
}
*/

function makePortfolio (content, link) {
    let message = 
    `<button onclick = ''>` +
        `<a href = "${link}" style = "height:100%"> ${content}` +
    `</button>`;
    appendContext(common, message);
}

makePortfolio('1. airbnb', 'https://kakasu-bnb.herokuapp.com/');