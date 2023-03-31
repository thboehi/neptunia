// PARTIE KEVIN
const header = document.querySelector(".header-main-container");

const navigation = document.querySelector(".navigation");
const stickposition = 50;

function addOrRemoveStickyClass() 
{
    if (window.scrollY >= stickposition) 
    {
        navigation.setAttribute("data-state", "visible");
    }

    else
    {
        navigation.setAttribute("data-state", "hidden");
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
        text: 'Herr Krank a rapidement émergé parmi les noms à suivre d’une nouvelle vague française d’artistes de musique électronique.<br>Sur scène et derrière ses machines, le producteur propose un live progressif grâce à un répertoire de productions bien remplies et variées.<br>Après avoir jalonné la scènes des meilleurs clubs de la capitale et de la France, Herr Krank continue de ravir son public aidés par des productions neuves et de nouvelles collaborations bientôt dévoilées.',
        soundCloud: "https://soundcloud.com/krank0001"
    },
    {
        img: "img/artists-slider/theos.png",
        title: "Theos",
        text: "Immergé dès son plus jeune dans la scène musicale grâce à deux parents musiciens, Théo débute comme dj, producteur et Musicien en 2019 sous le pseudonyme Theos. Il s'installe alors à Londres et étudie parallèlement l'ingénierie du son, se concentrant entièrement à sa musique. Ses productions s'inspirent de divers styles musicaux qui ont marqué son enfance, comme le hip-hop, le jazz et la funk pour délivrer une house music fraîche.",
        soundCloud: "https://soundcloud.com/theostheos"
    },
    {
        img: "img/artists-slider/drnovelove.png",
        title: "Dr. Novelove",
        text: "Dr. Novelove est un DJ et producteur originaire de Paris et installé à Genève. Doté d’un grand talent artistique, il arrive à transporter son public dans un univers unique. Sa passion pour la musique électronique se reflète dans sa collection de tracks soigneusement sélectionnées, où il mélange des sons  house, progressive house, Trance, et d’autres genres pour créer une expérience musicale groovy et funky.<br>Avec un univers distinct, il saura faire danser le public et marquer l’esprit de ces derniers.",
        soundCloud: "https://soundcloud.com/quentin-novello/reposts"
    },
    {
        img: "img/artists-slider/midivido.png",
        title: "Midi & Vido",
        text: "Tous deux membres du collectif Nyonnais Club Katel, Midi & Vido fusionnent leur univers respectifs en joignant différentes formes de productions, toutes englobées sous les vastes termes de la house et de la disco.<br>Ayant foulés quelques scènes lémaniques comme celles des Hivernales, de Paléo Festival, Caribana ou encore du Jval, le duo est prêt à propager sa musique comme une traînée de poudre.",
        soundCloud: "https://soundcloud.com/clubkatel"
    },
    {
        img: "img/artists-slider/cesar.png",
        title: "César Alïli",
        text: "Ingénieur du son, DJ et producteur, Calixte Bruet aka César Aïli travaille le son sans relâche à la poursuite d'un objectif : rendre le club fou !<br>César Aïli propose dans ses sets, un choix de musiques électroniques soigneusement digguées dans le but de proposer à son audience un contenu dansant et original. Ses playlists contiennent autant de morceaux contemporains que de bangers oubliés des années 1990, dans des styles allant de la house au breakbeat en passant par des sonorités tant minimalistes que festives.",
        soundCloud: "https://soundcloud.com"
    },
];
