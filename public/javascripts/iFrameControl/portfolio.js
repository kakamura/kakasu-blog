const makePortfolio = (content, link) => {
    const message = `
    <button onclick = ''>
        <a href = "${link}" style = "height:100%"> ${content} 
    </button>
    `;
    appendContext(common, message);
};

makePortfolio('1. airbnb', 'https://kakasu-bnb.herokuapp.com/');
