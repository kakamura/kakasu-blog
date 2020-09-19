const appendContext = (from, message) => {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    from.appendChild(pre);
}

const appendContextWithClass = (from, message, className) => {
    let pre = document.createElement("div");
    pre.className = className;
    pre.innerHTML = message;
    from.appendChild(pre);
}