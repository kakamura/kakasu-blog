/*
<div class = "frame">
<img src = '../images/C-lang.png' class = "languages"></img>
    <div style = "border:1px solid black; height:10px; display: flex;">
        <div style = "border:1px solid black; width:20%; height:100%; background-color: greenyellow;"></div>
        <div style = "border:1px solid black; width:20%; height:100%; background-color: greenyellow;"></div>
        <div style = "border:1px solid black; width:20%; height:100%; background-color: greenyellow;"></div>
        <div style = "border:1px solid black; width:20%; height:100%;"></div>
        <div style = "border:1px solid black; width:20%; height:100%"></div>
    </div>
</div>
*/

const makeFrame = (message) => {
    const frame = document.createElement('div');
    frame.innerHTML = message;
    languages.appendChild(frame);   
}

