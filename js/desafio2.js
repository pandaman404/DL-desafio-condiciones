const stickersFormHTML = document.getElementById('stickersForm');
const stickersMessageHTML = document.getElementById('stickersFormMessage');

stickersFormHTML.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let formData = Object.fromEntries(new FormData(event.target));
  count = countFormValues(formData);
  renderStickersFormMessage(count);
  stickersFormHTML.reset();
}

function countFormValues(formData) {
  count = 0;
  for (let input in formData) {
    if (formData.hasOwnProperty(input)) {
      count += Number(formData[input]);
    }
  }
  return count;
}

function renderStickersFormMessage(count) {
  if (count > 10) {
    return (stickersMessageHTML.innerHTML = 'Llevas demasiados stickers');
  }
  return (stickersMessageHTML.innerHTML = `Llevas ${count} stickers`);
}
