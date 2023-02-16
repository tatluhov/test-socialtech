const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach((header) => {
    header.addEventListener('click', (event) => {
        const item = event.target.parentNode
        item.classList.toggle('open');
        if (item.classList.contains('open')) {
            item.querySelector('.accordion__content').style.maxHeight = item.querySelector('.accordion__content').scrollHeight + "px";
        } else {
            item.querySelector('.accordion__content').style.maxHeight = '0';
        }
    })
})