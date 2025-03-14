const $gallery = document.getElementById('hover-gallery');
const $lightboxGallery = document.getElementById('lightbox-gallery');
const $lightboxBtn = document.getElementById('lightbox-btn');

console.log(document.getElementById('hover-gallery'));
console.log(document.getElementById('lightbox-gallery'));

if ($gallery) {

    // Fancy hover effect
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
}

if ($lightboxGallery) {

    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxExitBtn = document.getElementById('lightbox-btn');

    // Open lightbox
    $lightboxGallery.addEventListener('click', (event) => {
        const clickedLightbox = event.target.closest('.gallery-item');

        if (clickedLightbox) {
            clickedLightbox.classList.add('lightbox');
            // clickedLightbox.style.height = ''; // Overrride custom height: 100% when out of lightbox

            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'block';
                lightboxExitBtn.style.display = 'block';
            }
        }
    });

    // Close lightbox when hitting Esc
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const lightboxActive = document.querySelector('.gallery-item.lightbox');
            if (lightboxActive) {
                lightboxActive.classList.remove('lightbox');
            }
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'none';
                lightboxExitBtn.style.display = 'none';
                console.log(lightboxExitBtn);
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
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'none';
                lightboxExitBtn.style.display = 'none';
                console.log(lightboxExitBtn);
            }
        });
    }
}
