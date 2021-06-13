// page loader contents
const loaderContainer = document.querySelector('.loader');
const mainContainer = document.querySelector('.main');
// menu contents
const menuIcon = document.querySelector('#icon');

// page logo parts

// eslint-disable-next-line no-unused-vars
function stopLoader() {
  setTimeout(() => {
    setTimeout(() => {
      loaderContainer.style.opacity = 1;
    }, 100);
    setTimeout(() => {
      loaderContainer.style.opacity = 0;
    }, 2000);
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 2500);
    mainContainer.style.display = 'block';
    setTimeout(() => {
      mainContainer.style.opacity = 1;
    }, 3000);
  }, 100);
}
// stopLoader();

// Menu icon event
menuIcon.addEventListener('click', () => {
  const headMenuContainer = document.querySelector('.head__menu__ul');
  if (headMenuContainer.classList.contains('head__menu--responsive')) {
    setTimeout(() => {
      headMenuContainer.style.opacity = 0;
    }, 300);
    setTimeout(() => {
      headMenuContainer.style.display = 'none';
    }, 850);
    setTimeout(() => {
      headMenuContainer.classList.remove('head__menu--responsive');
    }, 900);
  } else {
    headMenuContainer.style.display = 'flex';
    setTimeout(() => {
      headMenuContainer.style.opacity = 1;
    }, 100);
    headMenuContainer.classList.add('head__menu--responsive');
  }
});
