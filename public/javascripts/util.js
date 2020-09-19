const appendContext = (from, message) => {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    from.appendChild(pre);
}