var dropdownItems = document.querySelectorAll('.nav-item.dropdown');

for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('mouseenter', handleDropdownMouseEnter);
    dropdownItems[i].addEventListener('mouseleave', handleDropdownMouseLeave);
}

function handleDropdownMouseEnter() {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'block';
}

function handleDropdownMouseLeave() {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    var isCursorOverDropdown = isCursorOverElement(dropdownMenu);
    if (!isCursorOverDropdown) {
        dropdownMenu.style.display = 'none';
    }
}

function isCursorOverElement(element) {
    var rect = element.getBoundingClientRect();
    var cursorX = event.clientX;
    var cursorY = event.clientY;
    return (
        cursorX >= rect.left &&
        cursorX <= rect.right &&
        cursorY >= rect.top &&
        cursorY <= rect.bottom
    );
}