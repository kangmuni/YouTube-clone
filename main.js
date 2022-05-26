const contentsBtn = document.querySelector('.contents__moreBtn');
const contents = document.querySelector('.contents__title');

contentsBtn.addEventListener('click', () => {
  contents.classList.toggle('clamp');
  if (contentsBtn.innerText === '더보기') {
    contentsBtn.innerText = '간략히';
  } else {
    contentsBtn.innerText = '더보기';
  }
});
