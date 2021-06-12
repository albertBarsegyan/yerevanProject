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
      loaderContainer.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 1500);
    mainContainer.style.display = 'block';
    setTimeout(() => {
      mainContainer.style.opacity = 1;
    }, 2000);
  }, 4000);
}
// stopLoader();

// Menu icon event
menuIcon.addEventListener('click', () => {
  const headMenuContainer = document.querySelector('.head__menu__ul');
  if (headMenuContainer.classList.contains('head__menu--responsive')) {
    headMenuContainer.classList.remove('head__menu--responsive');
    headMenuContainer.style.display = 'none';
  } else {
    headMenuContainer.style.display = 'flex';
    headMenuContainer.classList.add('head__menu--responsive');
  }
});
