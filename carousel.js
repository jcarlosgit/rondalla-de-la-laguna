document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    // Mostrar la primera imagen cuando se carga la página
    showSlide(currentIndex);
  
    // Agregar eventos para navegar entre las imágenes
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
  });
  