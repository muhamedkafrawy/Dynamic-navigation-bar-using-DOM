document.addEventListener('DOMContentLoaded', navigationBar, false);
document.addEventListener('DOMContentLoaded', sectionActiveState, false);
document.addEventListener('DOMContentLoaded', mobileNavigationBar, false);

// The Dynamic Navigation Bar function
function navigationBar() {
    const selectedSection = document.querySelectorAll('section');
    for (let i = 0; i < selectedSection.length; i++) {
        const list = document.createElement('li');
        const anchorTag = document.createElement('a');
        const sectionName = selectedSection[i].getAttribute('data-nav');
        const sectionNamePartition = sectionName.replace(/\s/g, '').toLocaleLowerCase();
        anchorTag.setAttribute('href', "#" + sectionNamePartition);
        anchorTag.setAttribute('id', "sectionCounter" + [i + 1]);
        anchorTag.innerHTML = sectionName;
        list.appendChild(anchorTag);
        document.getElementById("navbar__list").appendChild(list);
        document.getElementById('sectionCounter' + [i + 1]).addEventListener("click", function () {
            scrollToSection(i + 1);
        })
    }
}

// When scroll to any section, the active section will be clearly in a different color

function sectionActiveState() {
    window.addEventListener("scroll", function () {
        const activeSection = document.getElementsByClassName("landing__container");
        for (let i = 0; i < activeSection.length; i++) {
            let placement = activeSection[i].getBoundingClientRect();
            let topPlacement = placement.top;
            if (topPlacement <= window.innerHeight / 2) {
                let activeClassName = document.getElementsByClassName("your-active-class");
                activeClassName[0].className = activeClassName[0].className.replace(" your-active-class", "");
                activeSection[i].className += " your-active-class"
                let nowState = document.getElementsByClassName("active");
                if (nowState.length > 0) {
                    nowState[0].className = nowState[0].className.replace(" active", "");
                }
                let navBarStates = document.getElementById("navbar__list").querySelectorAll("li");
                navBarStates[i].className += " active";
            }
        }
    })
}

//The page scrolls to appropriate sections
function scrollToSection(sectionNumber) {
    const appropriateSection = document.getElementById('section' + sectionNumber);
    const movement = appropriateSection.offsetTop;
    event.preventDefault();
    window.scroll({
        behavior: 'smooth',
        top: movement,
    });
}

// To be responsive in any different screen resolution

function mobileNavigationBar() {
    let checked = document.getElementById("navbar__list");
    if (checked.className === "navbar__menu") {
        checked.className += " responsive";
    } else {
        checked.className = "navbar__menu";
    }
}