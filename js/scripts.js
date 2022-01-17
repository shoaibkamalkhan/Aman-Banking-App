/* Variables */

const hamburger = document.querySelector('.icon');
const menu = document.getElementById("myLinks");
const mobileNav = document.querySelector('.mobile-nav');

/* Mobile Navigation Event Listeners */

/* These event listners listen for clicks on the hamburger menu and menu items and execute the css fade in and fade out animations. */

hamburger.addEventListener('click', () => {
    if (menu.style.display === "block") {
        mobileNav.classList.add('animate__fadeOut');
    } else {
        menu.style.display = "block";
        mobileNav.classList.add('animate__fadeIn');
    }

    mobileNav.addEventListener('animationend', () => {
        if (mobileNav.classList.contains('animate__fadeIn')) {
            mobileNav.classList.remove('animate__fadeIn');
        } else if (mobileNav.classList.contains('animate__fadeOut')) {
            mobileNav.classList.remove('animate__fadeOut');
            menu.style.display = 'none';
        }
    });
});

mobileNav.addEventListener('click', e => {
    const navItems = mobileNav.querySelectorAll('li a');
    navItems.forEach((li) => {
        if (e.target === li) {
            mobileNav.classList.add('animate__fadeOut');
        }
    });
});

window.addEventListener('click', e => {
    const bars = document.querySelector('.fa-bars');
    if (e.target !== bars) {
      mobileNav.classList.add('animate__fadeOut');
      return;
    }
});

/* Tab Code */

function openTabs(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }