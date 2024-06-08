const mandalorianHTML = document.querySelector('#mandalorian');
mandalorianHTML.addEventListener('click', toggleBorderImage);

function toggleBorderImage(event) {
  const classList = [...event.target.classList];
  const borderExists = classList.some((i) => i === 'border-2');

  if (borderExists) {
    event.target.classList.remove('border-2');
  } else {
    event.target.classList.add('border-2');
  }
}
