// Dark mode toggle
const body = document.querySelector('body');

let themeToggles = document.querySelectorAll('.themeToggle');
for(let i = 0; i < themeToggles.length; i++){
    themeToggles[i].addEventListener('click', () => {
        changeTheme();
    })
}
function changeTheme(){
    console.log('changing theme');
    body.classList.toggle('dark-mode');
}
// open & close menu
const menuToggles = document.querySelectorAll('.menuToggle');
const closeButtons = document.querySelectorAll('.close-btn');

for(let i = 0; i< menuToggles.length; i++){
    menuToggles[i].addEventListener('click', () => {
        openMobileMenu();
    })
}

function openMobileMenu()
{
    // console.log('mobile menu toggle');
    body.classList.add('openMobileMenu');
}

for(let i = 0; i< closeButtons.length; i++){
    closeButtons[i].addEventListener('click', () => {
        closeMobileMenu();
    })
}

function closeMobileMenu()
{
    // console.log('closing mobile menu');
    body.classList.remove('openMobileMenu');
}

// Filter function
var filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach((filterButton => {
    filterButton.addEventListener('click', (e) => {
        document.querySelector('.active-filterbutton')?.classList.remove('active-filterbutton');
        filterButton.classList.add('active-filterbutton');
        const filterCards = document.querySelectorAll('.filter-card');
        let filter = e.target.dataset.filter;

        if(filter === "*"){
            filterCards.forEach(filterCard => filterCard.classList.remove('hide-filtercard'));
        }
        else{
            filterCards.forEach((filterCard => {
                filterCard.classList.contains(filter) ?
                filterCard.classList.remove('hide-filtercard') : 
                filterCard.classList.add('hide-filtercard');
            }))
        }
    })
}))

// PRODUCTS SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
  }


