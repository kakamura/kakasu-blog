function writeToPortfolio(message) {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    portfolio.appendChild(pre);
}

function makePortfolio (content, link) {
    let message = 
    `<button onclick = 'showToDoList()'>` +
        `<a href = "${link}"> ${content}` +
    `</button>`;
    writeToPortfolio(message);
}

makePortfolio('1. airbnb', 'http://kakasu-bnb.herokuapp.com/');