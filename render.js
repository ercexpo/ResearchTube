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
