const $gallery = document.getElementById('gallery');
const $lightboxGallery = document.getElementById('lightbox-gallery');
const $lightboxBtn = document.getElementById('lightbox-btn');

console.log(document.getElementById('gallery'));
console.log(document.getElementById('lightbox-gallery'));

if ($gallery) {

    // Fancy hover effect for mouse
    $gallery.addEventListener('mouseover', (event) => {
        const item = event.target.closest('.gallery-item');

        if (item) {
            item.classList.add('bg-light-red', 'box-shadow-light-red', 'ani-up');
        }
    });

    $gallery.addEventListener('mouseout', (event) => {
        const item = event.target.closest('.gallery-item');

        if (item) {
            item.classList.remove('bg-light-red', 'box-shadow-light-red', 'ani-up');
        }
    });

    // Fancy hover effect for touch
    $gallery.addEventListener('touchstart', (event) => {
        const item = event.target.closest('.gallery-item');

        if (item) {
            item.classList.add('bg-light-red', 'box-shadow-light-red', 'ani-up');
        }
    });

    $gallery.addEventListener('touchend', (event) => {
        const item = event.target.closest('.gallery-item');

        if (item) {
            item.classList.remove('bg-light-red', 'box-shadow-light-red', 'ani-up');
        }
    });
}

if ($lightboxGallery) {

    // Open lightbox for mouse and touch
    const openLightbox = (event) => {
        const clickedLightbox = event.target.closest('.gallery-item');

        if (clickedLightbox) {
            clickedLightbox.classList.add('lightbox');
            const lightboxOverlay = document.querySelector('.lightbox-overlay');
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'block';
            }
        }
    };

    $lightboxGallery.addEventListener('click', openLightbox);
    $lightboxGallery.addEventListener('touchstart', openLightbox);

    // Close lightbox when hitting Esc
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const lightboxActive = document.querySelector('.gallery-item.lightbox');
            if (lightboxActive) {
                lightboxActive.classList.remove('lightbox');
            }
            const lightboxOverlay = document.querySelector('.lightbox-overlay');
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'none';
            }
        }
    });

    // Close lightbox when clicking Exit button
    if ($lightboxBtn) {
        $lightboxBtn.addEventListener('click', () => {
            const lightboxActive = document.querySelector('.gallery-item.lightbox');
            if (lightboxActive) {
                lightboxActive.classList.remove('lightbox');
            }
            const lightboxOverlay = document.querySelector('.lightbox-overlay');
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'none';
            }
        });
    }
}
