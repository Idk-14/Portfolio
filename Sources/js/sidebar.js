document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menuToggle');
    const sidebar = document.querySelector('.sidebar');
  
    menuToggle.onclick = () => {
      menuToggle.classList.toggle('active');
      sidebar.classList.toggle('active');
    };
  });
  