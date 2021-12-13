/* Variables */

const hamburger = document.querySelector('.icon');

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