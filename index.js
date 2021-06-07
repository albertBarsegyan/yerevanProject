const loaderContainer = document.querySelector('.loader');
const mainContainer = document.querySelector('.main-content');

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
  }, 3000);
}
// stopLoader();
