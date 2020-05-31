/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const ulList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Adding smooth scrool styling  
document.querySelector('html').style.cssText = 'scroll-behavior: smooth;'

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Fragment 
const navlist = document.createDocumentFragment();

const buildNav = () => {
    for(let item of sections){ 
    let lists = document.createElement('li'); // Creating li elements
    lists.dataset.nav = item.dataset.nav; // setting the attribute's value 
    lists.classList.add('menu__link'); // adding class to li
    lists.innerHTML = `<a href="#${item.id}">${item.dataset.nav}</a>`;

    navlist.appendChild(lists); //appending to fragment
    }
    
  ulList.appendChild(navlist); //appending fragment to ulList
  ulList.style.cssText = 'display: flex; flex'
};

// Add class 'active' to section when near top of viewport

const setAcitve = (elem) => {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top <= 150 && bounding.bottom >= 150 
    );
};

// Scroll to anchor ID using scrollTO event

const addActive = () => {
    for(let el of sections) {
        let sectionInView = document.getElementById(el.id);
        
        // Getting an link to set active class
        const activeLink = document.querySelector('li[data-nav="' + el.dataset.nav + '"]');
        
       
        window.addEventListener('scroll', function() {
              
            // Keeping track of active class

            if(setAcitve(sectionInView)){        
                sectionInView.classList.add('your-active-class');
                activeLink.classList.add('active_a');
            }
            else{
                sectionInView.classList.remove('your-active-class');
                activeLink.classList.remove('active_a');
            }
        });
    }

};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// ScrollInToView 

const scrollInTo = () => {
   const navLinks = document.querySelectorAll('li a');
   for(let nav of navLinks) { 
       let navElement = document.querySelector(nav.getAttribute('href'));
       document.addEventListener('click' , (e) => {
        navElement.scrollIntoView({ behavior: 'smooth', block: 'end'});
       })
    } 
};

// Build menu 
buildNav();

// Scroll to section on link click

scrollInTo();

// Set sections as active

addActive();