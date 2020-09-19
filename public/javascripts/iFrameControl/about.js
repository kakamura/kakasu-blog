const setPoint = (point) => {
    if (point === 1) return `<div class = "red"></div><div class = 'black'></div><div class = 'black'></div><div class = 'black'></div><div class = 'black'></div>`;
    if (point === 2) return `<div class = "red"></div><div class = "red"></div><div class = 'black'></div><div class = 'black'></div><div class = 'black'></div>`;
    if (point === 3) return `<div class = "greenyellow"></div><div class = "greenyellow"></div><div class = "greenyellow"></div><div class = 'black'></div><div class = 'black'></div>`;
    if (point === 4) return `<div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = 'black'></div>`;
    if (point === 5) return `<div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = "green"></div><div class = "green"></div>`;
}

const makeFrame = (position, img, point) => {
    let message = 
    `
    <img src = '../images/${img}' class = "languages"></img>
    <div class = "point">
        ${setPoint(point)}
    </div>        
    `
    appendContextWithClass(position, message, 'frame');
}

makeFrame(languages, 'python.png', 2);
appendContextWithClass(languages, null, 'interval');
makeFrame(languages, 'java.png', 1);
appendContextWithClass(languages, null, 'interval');
makeFrame(languages, 'kotlin.png', 1);
appendContextWithClass(languages, null, 'interval');
makeFrame(languages, 'C-lang.png', 3);
appendContextWithClass(languages, null, 'interval');
makeFrame(languages, 'C++.png', 4);
appendContextWithClass(languages, null, 'interval');
makeFrame(languages, 'javascript.png', 3);
appendContextWithClass(languages, null, 'interval');

makeFrame(backend, 'nodejs.png', 3);
appendContextWithClass(backend, null, 'interval');
makeFrame(backend, 'mysql.png', 3);
appendContextWithClass(backend, null, 'interval');
makeFrame(backend, 'express.png', 3);
appendContextWithClass(backend, null, 'interval');

makeFrame(frontend, 'html.png', 2);
appendContextWithClass(frontend, null, 'interval');
makeFrame(frontend, 'CSS.png', 2);
appendContextWithClass(frontend, null, 'interval');

makeFrame(devops, 'git.png', 3);
appendContextWithClass(devops, null, 'interval');
makeFrame(devops, 'NCP.png', 2);
appendContextWithClass(devops, null, 'interval');
makeFrame(devops, 'heroku.png', 2);
appendContextWithClass(devops, null, 'interval');

