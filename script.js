let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function changeSlide(direction) {
      currentSlide += direction;
      if (currentSlide < 0) currentSlide = totalSlides - 1;
      if (currentSlide >= totalSlides) currentSlide = 0;
      updateSlide();
    }

    function updateSlide() {
      const offset = -currentSlide * 100;
      slides.style.transform = `translateX(${offset}%)`;
    }

    // Auto-slide every 3 seconds
    setInterval(() => changeSlide(1), 3000);
    //this is languange//
     