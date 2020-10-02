const changeInnerframe = (url) =>
    (document.getElementById('contentBox').src = url);

const showAbout = () => changeInnerframe('/iFrame/about.html');
const showStack = () => changeInnerframe('/iFrame/stack.html');
const showPortfolio = () => changeInnerframe('/iFrame/portfolio.html');
const showBlog = () => changeInnerframe('/iFrame/blog.html');
const showCareer = () => changeInnerframe('/iFrame/career.html');
const showBase = () => changeInnerframe('/iFrame/splash.html');
const showCheckoutList = () => changeInnerframe('/iFrame/checkout.html');
