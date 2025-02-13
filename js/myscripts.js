let $gallery = document.getElementById('gallery');

$gallery.addEventListener('mouseover', (event) => {
    const item = event.target.closest('.gallery-item');

    // console.log(event.target);
    // alert('clicked');

    if (item) {
        // alert('clicked on image');
        item.classList.add('bg-light-red', 'box-shadow-light-red');
    }
})

$gallery.addEventListener('mouseout', (event) => {
    const item = event.target.closest('.gallery-item');

    // console.log(event.target);
    // alert('clicked');

    if (item) {
        // alert('clicked on image');
        item.classList.remove('bg-light-red', 'box-shadow-light-red');
    }
})