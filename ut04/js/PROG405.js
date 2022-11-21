console.log(document.getElementsByTagName('li').length);
for(let contador=0;contador<document.getElementsByTagName('li').length;contador++){
    console.log(document.getElementsByTagName('li')[contador]);
    let buscador = document.getElementsByTagName('li')[contador];
    switch (buscador.textContent){
        case "Google":
            buscador.innerHTML = `<a href = 'https://google.com'>google</a>`;
            break;
        case "DuckDuckGo":
            buscador.innerHTML = `<a href = 'https://duckduckgo.com'>DuckDuckGo</a>`;
            break;
        case "Bing":
            buscador.innerHTML = `<a href = 'https://www.bing.com'>Bing</a>`;
            break;
        case "Ecosia":
            buscador.innerHTML = `<a href = 'https://www.ecosia.org/'>Ecosia</a>`;
            break;
        case "WolframAlpha":
            buscador.innerHTML = `<a href = 'https://www.wolframalpha.com'>WolframAlpha</a>`;
            break;
    }
}
