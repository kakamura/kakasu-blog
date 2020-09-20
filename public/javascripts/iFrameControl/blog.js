const articleBox = (img, title, content) => {
    const message = 
    `
    <a href = '/' class = 'article'>
        <img src = '../images/blog/${img}' class = "article_img"></img>
            <div class = 'articleText'>
                <p class = 'articleTitle'> ${title} </p>
                <p class = 'articleContent'> ${content} </p>
            </div>
        </div>
    </a>
    `
    return message;
}

const makeArticle = () => {
    const message = articleBox('../about/javascript.png', '이것은 제목입니다.', '이것은 내용입니다.');
    prependContext(common, message);
}

makeArticle();
makeArticle();
makeArticle();
makeArticle();