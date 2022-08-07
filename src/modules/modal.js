'use strick';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');
  let idAnmation;
  let count = -100;

  const animate = () => {
    count += 5;
    idAnmation = requestAnimationFrame(animate);
    modal.style.display = 'block';
    if (count <= 10) {
      modalContent.style.top = count + '%';
    } else {
      cancelAnimationFrame(idAnmation);
    }
  };
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.width < 768) {
        modal.style.display = 'block';
        modalContent.style.top = 10 + '%';
      } else {
        animate();
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.style.top = -100 + '%';
    count = -100;
  });
};

export default modal;