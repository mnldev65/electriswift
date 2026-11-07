const accordions = document.querySelectorAll('.accordion-header');
    
accordions.forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('active');
    });
});