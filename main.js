const moreBtn1 = document.querySelector('.info .secondBox .contents .moreBtn');
const contents = document.querySelector('.info .secondBox .contents .title');
const items = document.querySelectorAll('.upNext .item');
console.log(items);
const moreBtn2 = document.querySelector('.upNext .item .moreBtn');

moreBtn1.addEventListener('click', () => {
  contents.classList.toggle('clamp');
  if (moreBtn1.innerText === '더보기') {
    moreBtn1.innerText = '간략히';
  } else {
    moreBtn1.innerText = '더보기';
  }
});

items.forEach((item) => {
  console.log(item);
  item.addEventListener('mouseover', (event) => {
    console.log(event.target);
    if (moreBtn2.style.display === 'none') {
      moreBtn2.style.display = 'block';
    }
  });
});
