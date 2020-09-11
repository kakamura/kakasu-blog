function writeToPortfolio(message) {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    portfolio.appendChild(pre);
}

function makePortfolio (content, link) {
    let message = 
    `<button onclick = 'changeIndex("TODOLIST")'>` +
        `<a href = "${link}"> ${content}` +
    `</button>`;
    writeToPortfolio(message);
}

makePortfolio('1. airbnb', 'https://kakasu-bnb.herokuapp.com/');