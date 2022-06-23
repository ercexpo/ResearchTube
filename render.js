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

    const el = document.getElementById("goto");
    el.setAttribute('href', "https://american.co1.qualtrics.com/jfe/form/SV_3y26s2Lmaqyoxx4?rt_id=" + userId);
};