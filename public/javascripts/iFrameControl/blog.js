const articleBox = (link, img, title, content) => {
    const message = `
    <a href = '../blog/${link}' class = 'article'>
        <img src = '../images/blog/${img}' class = "article_img"></img>
            <div class = 'articleText'>
                <p class = 'articleTitle'> ${title} </p>
                <p class = 'articleContent'> ${content} </p>
            </div>
        </div>
    </a>
    `;
    return message;
};

const makeArticle = ({
    link,
    image = '../about/javascript.png',
    title = 'Title is not defined.',
    summary = 'Summary is not defined.',
}) => {
    const message = articleBox(link, image, title, summary);
    prependContext(common, message);
};

//makeArticle({link: '', image: '', title : '', summary:''});
makeArticle({
    link: 'blog_1.html',
    title: '이것이 제목',
    summary: '이것은 내용입니다.<br> 이것도 내용입니다.',
});
