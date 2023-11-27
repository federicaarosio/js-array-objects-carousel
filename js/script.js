const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//ci sarà eventlistener
    //creo elementi dei bottoni
    //devo inserire una classe per l'immagine visibile e una per le immagini non visibili
    //al clic rimuovo


//inserisco il contenuto degli elementi dell'array
const carouselWrapperEl = document.querySelector("section.wrapper");

for (let i = 0; i < images.length; i++) {
    const currentImage = images[i];

    const img = currentImage.image;
    const title = currentImage.title;
    const text = currentImage.title;

    const singleCarouselEl = `
        <img src="${img}" alt="">
            <button class="previous"><i class="fa-solid fa-chevron-up"></i></button>
            <button class="next"><i class="fa-solid fa-chevron-down"></i></button>
            <div class="caption-wrapper">
                <h1 class="title">
                    ${title}
                </h1>
                <p class="text">
                    ${text}
                </p>
            </div>`

    carouselWrapperEl.innerHTML += singleCarouselEl;
}



// const buttonPreviousEl = document.querySelector("button.previous");

// buttonPreviousEl.addEventListener("click", function() {
//     for (let i = 0; i < images.length; i++) {
//         const element = images[i];
        
//     }
// })