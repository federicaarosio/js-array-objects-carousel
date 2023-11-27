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


//inserisco il contenuto degli elementi dell'array
const carouselWrapperEl = document.querySelector("section.wrapper");

for (let i = 0; i < images.length; i++) {
    const currentImage = images[i];

    const img = currentImage.image;
    const title = currentImage.title;
    const text = currentImage.text;

    const singleCarouselEl = `
    <div class="item hidden">
        <img class="image" src="${img}" alt="comics hero illustration">
        <div class="caption-wrapper">
            <h1 class="title">
                ${title}
            </h1>
            <p class="text">
                ${text}
            </p>
        </div>
    </div>`
    carouselWrapperEl.innerHTML += singleCarouselEl;
}

// Seleziono tutti gli items
const carouselItemsElements = document.querySelectorAll(".item");

//decido che l'elemento attivo in patenza è lo 0
let activeItem = 0;
let lastItem = images.length - 1;
carouselItemsElements[activeItem].classList.add('active')

//Button next
const buttonNextEl = document.querySelector("button.next");
buttonNextEl.addEventListener("click", function() {
    carouselItemsElements[activeItem].classList.remove('active');
    if(activeItem === lastItem) {
        activeItem = activeItem - lastItem;
    } else {
        activeItem = activeItem + 1;
    }
    
    carouselItemsElements[activeItem].classList.add('active');
});

//Button previous
const buttonPreviousEl = document.querySelector("button.previous");
buttonPreviousEl.addEventListener("click", function() {
    carouselItemsElements[activeItem].classList.remove('active');
    if(activeItem === 0) {
       activeItem = lastItem;
    } else {
        activeItem = activeItem - 1;
    }
    
    carouselItemsElements[activeItem].classList.add('active');
});


