// Set current year

const yearEl = document.querySelector('.year');
console.log(yearEl);

const currentYear = new Date().getFullYear();
console.log(currentYear);

yearEl.textContent = currentYear;



////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
});



////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link')
console.log(allLinks);
allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
    //    console.log(e);
       e.preventDefault();
       const href = link.getAttribute('href');
       console.log(href);

       // Scroll back to top
       if (href === '#') window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });

      // Scroll to other links
      if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelectorAll(href);
        console.log(sectionEl);
        sectionEl.scrollIntoView({behavior: 'smooth'})
        }

        // Close mobile navigation
      if (link.classList.contains('main-nav-link')) {
        headerEl.classList.toggle('nav-open');
      }
    });
});
