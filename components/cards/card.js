const icon = document.querySelectorAll('.icon-heart');
const dismissCard = document.querySelector('.js-dismiss');
const deleteIcon = document.querySelectorAll('.delete-icon');


icon.forEach(ele => {
    ele.addEventListener('click', () => {
        ele.classList.toggle('heart-icon-color');
    })
})

deleteIcon.forEach(ele => {
    ele.addEventListener('click', () => {
        dismissCard.classList.add('delete-card');
    })
})