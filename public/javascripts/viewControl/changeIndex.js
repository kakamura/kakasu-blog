const writeToContentIndex = (message) => {
    let pre = document.createElement("div");
    pre.innerHTML = message;
    contentIndex.appendChild(pre);
}

const removeAllChild = () => {
    const parent = document.getElementById("contentIndex");
    if(parent === null) return;
    while (parent.hasChildNodes()) {
        parent.removeChild( parent.firstChild );
    }
}

const initMessage =     
`
    <p id ="writing"> 컴퓨터는 잘못하지 않는다. </p>
    <p> tistory : kscodebase.tistory.com </p>
    <p> google  : kscodebase@gmail.com </p>
    <p> github  : kakasoo </p>
    <p> univ.   : gachon univ. </p>
`;


const init = () => {
    message = initMessage;
    writeToContentIndex(message);
}

const stackContent = () => {
    let message =
    `
    <p id ="writing"> kakasoo의 기술 스택 </p>
    <p> 1점 : 배워 본 기억은... </p>
    <p> 2점 : 원하는 것은 만든다. </p>
    <p> 3점 : 평상시에 쓰고 있다. </p>
    <p> 4점 : 메인으로 할 수 있다. </p>
    <p> 5점 : 가르칠 수 있는 수준. </p>
    `
    return message;
}

const aboutContent = () => {
    let message = initMessage;
    return message;
}

const blogContent = () => {
    let message = initMessage;
    return message;
}

const careerContent = () => {
    let message = initMessage;
    return message;
}

const portfolioContent = () => {
    let message = initMessage;
    return message;
}

const checkoutContent = () => {
    let message = initMessage;
    return message;
}

const explainContent = (indexName) => {
    if(indexName === 'ABOUT') return aboutContent();
    if(indexName === 'STACK') return stackContent();
    if(indexName === 'BLOG') return blogContent();
    if(indexName === 'CAREER') return careerContent();
    if(indexName === 'PORTFOLIO') return portfolioContent();
    if(indexName === 'CHECKOUT') return checkoutContent();
}

const changeIndex = (indexName) => {
    removeAllChild();
    let message = `<p id = "writing"> ${indexName}`;
    message += explainContent(indexName);
    writeToContentIndex(message);
}