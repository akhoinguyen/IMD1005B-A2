let $gallery = document.getElementById('gallery');

$gallery.addEventListener('mouseover', (event) => {
    const item = event.target.closest('.gallery-item');

    // console.log(event.target);
    // alert('clicked');

    if (item) {
        item.classList.add('bg-light-red', 'box-shadow-light-red', 'ani-up');
    }
})

$gallery.addEventListener('mouseout', (event) => {
    const item = event.target.closest('.gallery-item');

    // console.log(event.target);
    // alert('clicked');

    if (item) {
        item.classList.remove('bg-light-red', 'box-shadow-light-red', 'ani-up');
    }
})