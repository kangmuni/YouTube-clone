const moreBtn = document.querySelector(".info .secondBox .contents .moreBtn");
const contents = document.querySelector(".info .secondBox .contents .title");
moreBtn.addEventListener("click", () => {
    contents.classList.toggle("clamp");
    if (moreBtn.innerText === "더보기") {
        moreBtn.innerText = "간략히"
    }
    else {
        moreBtn.innerText = "더보기"
    }
  });