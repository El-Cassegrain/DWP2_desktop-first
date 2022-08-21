/* Main script */
const menuItem1 = document.querySelector('#main-nav a:first-child');
const menuItem2 = document.querySelector('#main-nav a:last-child');

const navbar = document.querySelector('#main-header')

const scrollTopBtn = document.getElementById('scrollTopBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 35 ||
    document.documentElement.scrollTop > 35
  ) {
    scrollTopBtn.classList.add('active');
    navbar.classList.add('sticky');

  } else {
    scrollTopBtn.classList.remove('active');
    navbar.classList.remove('sticky');
  }
}
// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//add smooth scrolling when clicking any anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

menuItem2.addEventListener('click', function(){
        menuItem1.classList.remove('active')
        menuItem2.classList.add('active')
})

menuItem1.addEventListener('click', function() {
        menuItem2.classList.remove('active')
        menuItem1.classList.add('active')
})
