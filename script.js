// Turn pages when clicking next or previous button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn'); // Fixed: Add 'document.'

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page'); // Retrieve the target page ID
        const pageTurn = document.getElementById(pageTurnId); // Fixed: Add 'document.'

        if (pageTurn.classList.contains('turn')) { // Fixed: 'classList' and 'contains'
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index; // Fixed: 'zIndex' (case-sensitive)
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index; // Fixed: 'zIndex'
            }, 500);
        }
    };
});
