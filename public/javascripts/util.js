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

const prependContext = (from, message) => {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    from.prepend(pre);
}

const delayTime = () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading';
    loadingScreen.innerHTML = 'NOW LOADING...';

    document.getElementById('verticalLine').appendChild(loadingScreen);
    setTimeout(() => {
        loadingScreen.remove();
    }, 1000);
}