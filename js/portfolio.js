function portfolioWorks(title, href){
    let portfolio__row2 = document.querySelector('.portfolio__row-2');
    let block = document.createElement('div');
    let blockTitle = document.createElement('h3');
    let blockHref = document.createElement('a');
    let demo = document.createElement('div');
    let demoText = document.createElement('h3');

    portfolio__row2.appendChild(block)
    block.appendChild(blockTitle);
    block.appendChild(blockHref);
    blockHref.appendChild(demo);
    demo.appendChild(demoText);

    block.classList.add('block');
    blockTitle.classList.add('block__title');
    blockHref.classList.add('block__href');
    demo.classList.add('block__item');
    demoText.classList.add('demo');

    blockTitle.innerHTML = title;
    blockHref.href = href;
    demoText.innerHTML = 'TAP TO DEMO';
}
portfolioWorks('Binary', "https://azimust.github.io/binary-landing/");
portfolioWorks('Pixel-azim', "https://azimust.github.io/pixelazim-site/");
portfolioWorks('Expo-forum', "https://azimust.github.io/expoforum/");
portfolioWorks('denisnovik', "https://azimust.github.io/denisnovik-landing/");
portfolioWorks('simple-portfolio', "https://azimust.github.io/simple-portfolio/");
portfolioWorks('check-bs-5', "https://azimust.github.io/check-bs-5/");
portfolioWorks('stop-watch', "https://azimust.github.io/js-stopwatch/");
portfolioWorks('plants-landing', "https://azimust.github.io/plants-landing/");
portfolioWorks('quote-generator', "https://azimust.github.io/quote-generator/");
portfolioWorks('todo-list', "https://azimust.github.io/todo-list/");
portfolioWorks('code-editor', "https://azimust.github.io/code-editor-js/");