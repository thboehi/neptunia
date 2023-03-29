// PARTIE KEVIN
const navigation = document.querySelector(".navigation");
const stickposition = navigation.offsetTop - 3;

const about = document.getElementById("scrollabout");
const programme = document.getElementById("#programme");
const artiste = document.getElementById("#artiste");

// arrayNav.forEach(e => {
//     e.addEventListener("click", e => {
//         console.log("scrolltop")
//         document.scrollTo(0, e.offsetTop + 30);
//     })
// })


function addOrRemoveStickyClass() 
{
    if (window.pageYOffset >= stickposition) 
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
const artistContainer = document.querySelector(".artists-caroussel");
const autoDefil = artistContainer.querySelector(".auto");
const artistsElems = {
    img: artistContainer.querySelector(".image > img"),
    title: artistContainer.querySelector(".content > h2"),
    text: artistContainer.querySelector(".content > p"),
    social: artistContainer.querySelector(".content > .social-nav > a"),
};
const artistSlides = [
    {
        img: "img/artists-slider/herrkrank.png",
        title: "Herr Krank",
        text: 'Producer originally from Normandy and now based in Paris, label manager of Helios Records, Herr Krank quickly emerged among the names to follow of a new French wave of electronic music artists. Jazzy piano riffs, groovy basslines, percussive rhythmics and acid sounds are the recipe that have notably helped to panic the counters on his million-view track "Acid Jazz". But also on his 1st EP "So What" with the name paying homage to one of his strong influences, John Coltrane.',
        soundCloud: "https://soundcloud.com"
    },
    {
        img: "img/artists-slider/theos.png",
        title: "Theos",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?",
        soundCloud: "https://soundcloud.com"
    },
    {
        img: "img/artists-slider/drnovelove.png",
        title: "Dr. Novelove",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?",
        soundCloud: "https://soundcloud.com"
    },
    {
        img: "img/artists-slider/midivido.png",
        title: "Midi & Vido",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?",
        soundCloud: "https://soundcloud.com"
    },
    {
        img: "img/artists-slider/cesar.png",
        title: "César Alïli",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, labore quisquam? Dolorem ipsam soluta voluptatem reiciendis animi quisquam error perspiciatis veniam, dignissimos delectus minima quia voluptates saepe eos maxime repellat?",
        soundCloud: "https://soundcloud.com"
    },
];
let actualSlide = 0;

function changeSlide(to) { // change slide function declaration
    actualSlide += to;
    if (actualSlide < 0) { actualSlide = artistSlides.length-1 }
    else if (actualSlide >= artistSlides.length) { actualSlide = 0 }
    displayArtist(actualSlide);
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

function displayArtist(i) {
    console.log(artistSlides);
    artistsElems.img.src = artistSlides[i].img;
    artistsElems.img.alt = `Image de l'artiste ${artistSlides[i].title}`
    artistsElems.title.innerHTML = artistSlides[i].title;
    artistsElems.text.innerHTML = artistSlides[i].text;
    artistsElems.social.href = artistSlides[i].soundCloud;
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
