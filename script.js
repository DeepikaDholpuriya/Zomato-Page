function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var menuIcon = document.querySelector('.menu-icon');
    var menuItems = document.querySelector('.menu-items');

    if (screenWidth <= 768) {
        menuIcon.style.display = 'flex';
        menuItems.style.display = 'none';
    } else {
        menuIcon.style.display = 'none';
        menuItems.style.display = 'flex';
    }
});

function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var menuIcon = document.querySelector('.menu-icon');
    var menuItems = document.querySelector('.menu-items');

    if (screenWidth <= 768) {
        menuIcon.style.display = 'flex';
        menuItems.style.display = 'none';
    } else {
        menuIcon.style.display = 'none';
        menuItems.style.display = 'flex';
    }
});