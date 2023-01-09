// sldeshow

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // console.log(slides)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // console.log(slides[i])

    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}





// image track 

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * 100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;
    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);




// menutoggle

var menuitems = document.getElementById("menu-items");
// var navigation = document.getElementById("navigation-animation")

var anchorList = document.getElementById("anchor-list")

checkForWindowResize();

function menutoggle() {
    // navigation.style.transform="translatey(10%)";

    if (window.matchMedia("(max-width: 650px)").matches == true && menuitems.style.visibility != "hidden") {
        menuitems.style.visibility = "hidden";
        menuitems.style.transform = "translatey(-200%)";
        menuitems.style.maxHeight = "0px";

        // menuitems.style.transform="translatey(-200%)";
        // navigation.style.transform="translatey(100%)";

    } else {
        menuitems.style.visibility = "visible";
        menuitems.style.maxHeight = "135px";
        menuitems.style.transform = "translatey(0)";
        anchorList.style.color.a = "#FFFFFF";
        // navigation.style.transform="translatey(-100%)";
        // menuitems.style.transform="translatey(100%)";
    }

}


function checkForWindowResize() {
    menuitems.style.visibility = "hidden";

    if (window.matchMedia("(max-width: 650px)").matches == true && menuitems.style.visibility == "hidden") {
        // menuitems.style.transform="translatey(-200%)";

        menuitems.style.maxHeight = "0px";





    }

    if (window.innerWidth > 650) {
        menuitems.style.visibility = "visible";
        menuitems.style.maxHeight = "135px";
        // navigation.style.transform="translatey(-100%)";
    }


}

window.addEventListener('resize', checkForWindowResize);