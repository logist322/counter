const crossroadElement = document.querySelector(`.crossroad`);
const tableElement = document.querySelector(`.table`);
const refreshButtonElement = document.querySelector(`.refresh`);

crossroadElement.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (evt.target.tagName === `BUTTON`) {
    crossroadElement.querySelector(`#${evt.target.dataset.for}`).value = null;
  }
});

refreshButtonElement.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  tableElement.querySelectorAll(`.controls__button`).forEach((it) => it.textContent = 0)
});

tableElement.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (evt.target.tagName === `BUTTON`) {
    evt.target.textContent = Number(evt.target.textContent) + 1;
  }
});