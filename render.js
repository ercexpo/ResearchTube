async function render(readmeUrl, elem) {
    let mdReq = await fetch(readmeUrl);
    let text = await mdReq.text();

    let htmlReq = await fetch('https://api.github.com/markdown', {
        body: JSON.stringify({ text }),
        method: 'POST'
    });
    
    if (htmlReq.ok) {
        elem.innerHTML = await htmlReq.text();
    }
}

window.onload = function () {
    const params = new URLSearchParams(document.location.search);
    const userId = params.get("userId");
    const visaId = params.get("visaId");

    if (visaId && visaId != "null") {
        const el = document.getElementById("goto");
        el.setAttribute('href', `http://g4-us.yougov.com/ereturn/${visaId}`);
        document.querySelector('.survey-btn').classList.remove('display-none');
    }
};