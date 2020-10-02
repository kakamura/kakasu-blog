const articleBox = (img, title, content) => {
    const message = `
    <div class = 'article'>
        <img src = '../images/blog/${img}' class = "article_img"></img>
            <div class = 'articleText'>
                <p class = 'articleTitle'> ${title} </p>
                <p class = 'articleContent'> ${content} </p>
            </div>
        </div>
    </div>
    `;
    return message;
};

const makeArticle = ({
    image = '../about/javascript.png',
    title = 'Title is not defined.',
    summary = 'Summary is not defined.',
}) => {
    const message = articleBox(image, title, summary);
    prependContext(common, message);
};

makeArticle({
    title: '자바스크립트 함수형 프로그래밍',
    summary: `<a href = '../blog/functional/higher-order.html'>1. 고차함수 (higher-order function)</a><br>
    <a href = '../blog/functional/list-traversal.html'>2. 리스트 순회 (List Traversal)</a>`,
});

makeArticle({
    title: '자바스크립트 프로그래밍',
    summary: ``,
});
