async function render(repo, elem) {
    let readmeMd = `https://raw.githubusercontent.com/${repo}/master/README.md`;
    let mdReq = await fetch(readmeMd);
    let text = await mdReq.text();

    let htmlReq = await fetch('https://api.github.com/markdown', {
        body: JSON.stringify({ text }),
        method: 'POST'
    });
    
    if (htmlReq.ok) {
        elem.innerHTML = await htmlReq.text();
    }
}
