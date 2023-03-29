// PARTIE KEVIN
const header = document.querySelector(".header-main-container");

const navigation = document.querySelector(".navigation");
const stickposition = 50;

function addOrRemoveStickyClass() 
{
    if (window.scrollY >= stickposition) 
    {
        navigation.classList.add("sticky");
    }

    else 
    {
        navigation.classList.remove("sticky");
    }
}

window.onscroll = () => 
{
    addOrRemoveStickyClass();
}

//PARTIE THOMA
// Sélectionnez l'élément avec la classe "mouse"
const mouseElement = document.querySelector('.mouse');

// Ajoutez un événement de défilement à la fenêtre
window.addEventListener('scroll', () => {
  // Vérifiez la position de défilement actuelle
  if (window.scrollY > 200) {
    // Si la position de défilement est supérieure à 100px, cachez l'élément avec la classe "mouse"
    mouseElement.setAttribute("data-state", "hidden");
  } else {
    // Sinon, montrez l'élément avec la classe "mouse"
    mouseElement.setAttribute("data-state", "visible");
  }
});


/* -------------------------------------------------------------------------- */
/*                                PARTIE MAXIME                               */
/* -------------------------------------------------------------------------- */

/* ---------------------------- ARTIST CAROUSSEL ---------------------------- */
const artistsContainer = document.querySelector(".artists-caroussel");
const artists = artistsContainer.querySelectorAll(".content");
const autoDefil = artistsContainer.querySelector(".auto");
let actualSlide = 0;


function changeSlide(to) { // change slide function declaration
    // hide old image
    artists[actualSlide].className = "content hidden";
    // update slide
    actualSlide += to;
    if (actualSlide < 0) { actualSlide = artists.length-1 }
    else if (actualSlide >= artists.length) { actualSlide = 0 }
    // display new image
    artists[actualSlide].className = "content active";
}

function play() { // auto slide function declaration
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
    autoDefil.setAttribute("data-state", "play");
}

function pause() {  // stop auto slide function declaration
    clearInterval(autoSlideInterval);
    autoDefil.setAttribute("data-state", "pause");
}


/* ------------------------------- NAME SLIDER ------------------------------ */
const names = document.querySelector(".names");
let specificNames = names.querySelectorAll("*");
let translate = 0;
let namesMargin = names.getBoundingClientRect().left;

function updateText() {
    let delta = (Date.now() - lastUpdate)/1000; // delta time to have consistent speed regardless of refresh rates
    lastUpdate = Date.now();
    requestAnimationFrame(updateText);

    translate += 70 * delta; // each seconds move from 80px
    const rect = specificNames[1].getBoundingClientRect();
    names.style = "margin-left: -" + translate + "px"; // apply pos
    if (rect.left >= namesMargin) return; 
    // to put the first element in last pos when then second start disapearing (why second and first idk i tested like this it work with the first one totaly disapeatring creating glitch)
    names.appendChild(specificNames[0]);
    specificNames = names.querySelectorAll("*"); // updates names array after change
    translate = 0;
    names.style = "margin-left: -" + translate + "px"; // apply pos
    namesMargin = names.getBoundingClientRect().left; // doing this kind of overkill buut allow resize without reload (without start glitching)
}
let lastUpdate = Date.now();
requestAnimationFrame(updateText);

// no longer used left here to make sure no content is lefted out in HTML
const artistSlides = [
    {
        img: "img/artists-slider/herrkrank.png",
        title: "Herr Krank",
        text: 'Producer originally from Normandy and now based in Paris, label manager of Helios Records, Herr Krank quickly emerged among the names to follow of a new French wave of electronic music artists. Jazzy piano riffs, groovy basslines, percussive rhythmics and acid sounds are the recipe that have notably helped to panic the counters on his million-view track "Acid Jazz". But also on his 1st EP "So What" with the name paying homage to one of his strong influences, John Coltrane.',
        soundCloud: "https://soundcloud.com/krank0001"
    },
    {
        img: "img/artists-slider/theos.png",
        title: "Theos",
        text: "Nous n'avons pas encore toutes les informations concernant Theos, cet artiste mystérieux. Restez attentif et découvrez qui il est très prochainement !",
        soundCloud: "https://soundcloud.com"
    },
    {
        img: "img/artists-slider/drnovelove.png",
        title: "Dr. Novelove",
        text: "Nous n'avons pas encore toutes les informations concernant Dr. Novelove, cet artiste mystérieux. Restez attentif et découvrez qui il est très prochainement !",
        soundCloud: "https://soundcloud.com/quentin-novello/reposts"
    },
    {
        img: "img/artists-slider/midivido.png",
        title: "Midi & Vido",
        text: "Nous n'avons pas encore toutes les informations concernant Midi & Vido, ce groupe mystérieux. Restez attentif et découvrez qui il est très prochainement !",
        soundCloud: "https://soundcloud.com/clubkatel"
    },
    {
        img: "img/artists-slider/cesar.png",
        title: "César Alïli",
        text: "Nous n'avons pas encore toutes les informations concernant César Alïli, cet artiste mystérieux. Restez attentif et découvrez qui il est très prochainement !",
        soundCloud: "https://soundcloud.com"
    },
];
