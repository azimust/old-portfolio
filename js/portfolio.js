let portfolioData = [
    {title: 'stop-watch', ref: 'https://azimust.github.io/js-stopwatch/', img: './portfolio-imgs/watch.png'},
    {title: 'plants-landing', ref: 'https://azimust.github.io/plants-landing/', img: './portfolio-imgs/plants.png'},
    {title: 'quote-generator', ref: 'https://azimust.github.io/quote-generator/', img: './portfolio-imgs/quote.png'},
    {title: 'movie-app', ref: 'https://azimust.github.io/movie-app/', img: './portfolio-imgs/movie.png'},
    {title: 'github-profiles', ref: 'https://azimust.github.io/github-profiles/', img: './portfolio-imgs/prof.png'},
    {title: 'momentum', ref: 'https://azimust.github.io/momentum/', img: './portfolio-imgs/mom.png'},
    {title: 'code-editor', ref: 'https://azimust.github.io/code-editor-js/', img: './portfolio-imgs/edit.png'},
    {title: 'Binary', ref: 'https://azimust.github.io/binary-landing/', img: './portfolio-imgs/binary.png'},
    {title: 'Pixel-azim', ref: 'https://azimust.github.io/pixelazim-site/', img: './portfolio-imgs/pix.png'},
    {title: 'Expo-forum', ref: 'https://azimust.github.io/expoforum/', img: './portfolio-imgs/expo.png'},
    {title: 'denisnovik-landing', ref: 'https://azimust.github.io/denisnovik-landing/', img: './portfolio-imgs/den.png'},
];
let portfolioRow = document.querySelector('.portfolio__row-2')
function portfolioWorks(){
    portfolioData.map((e) => {
        portfolioRow.innerHTML += `
            <div class="block">
                <h3 class="block__title">${e.title}</h3>
                <a class="block__href" href="${e.ref}">
                    <div class="block__item">
                        <div class="demo" style="background: url(${e.img}) no-repeat;
                            background-size: cover;
                            background-position: 0%;">
                            <h3>TAP TO DEMO</h3>
                        </div>
                    </div>
                </a>
            </div>
        `
    })
}
portfolioWorks();