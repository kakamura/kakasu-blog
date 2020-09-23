const appendContext = (from, message) => {
    const pre = document.createElement("div");
    pre.innerHTML = message;
    from.appendChild(pre);
}

const appendContextWithClass = (from, message, className) => {
    const pre = document.createElement("div");
    pre.className = className;
    pre.innerHTML = message;
    from.appendChild(pre);
}

const prependContext = (from, message) => {
    const pre = document.createElement("div");
    pre.innerHTML = message;
    from.prepend(pre);
}

const delayTime = () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading';
    loadingScreen.innerHTML = 'NOW LOADING...';

    const verticalLine = document.getElementById('verticalLine');
    if (verticalLine.childNodes.length) return;
    verticalLine.appendChild(loadingScreen);
    setTimeout(() => {
        loadingScreen.remove();
    }, 1000);
}