const container = document.querySelector('.container.seats');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('.count');
const total = document.querySelector('.total');
const movieSelect = document.querySelector('.select-movies');

const ticketPrice = +movieSelect.value;


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        console.log(e.target);
    }
})