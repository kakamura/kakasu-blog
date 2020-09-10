function changeInnerframe(url) {
    document.getElementById("contentBox").src = url;
}

function showAbout() {
    changeInnerframe('/iFrame/about.html');
}

function showPortfolio() {
    changeInnerframe('/iFrame/portfolio.html');
}

function showBlog() {
    changeInnerframe('/iFrame/blog.html');
}

function showContact() {
    changeInnerframe('/iFrame/contact.html');
}

function showBase() {
    changeInnerframe('/iFrame/splash.html');
}