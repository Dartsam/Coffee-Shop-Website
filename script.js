  document.addEventListener('DOMContentLoaded', () => {
    const carouselEl = document.querySelector('#blogCarousel');
    const carousel = new bootstrap.Carousel(carouselEl, {
      interval: false,       // disable auto-cycling
      wrap: false            // do not loop back to start
    });

    // Attach custom control
    document.getElementById('carouselNext').addEventListener('click', () => {
      carousel.next();
    });
  });
