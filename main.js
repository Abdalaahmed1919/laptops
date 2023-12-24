// fot ul hidden and apear
let ullist = document.querySelector('.ullist');
let menu = document.querySelector('.menu');
menu.onclick = function () {
      if (!ullist.classList.contains('activeul')) {
        ullist.classList.add('activeul');
      } else {
        ullist.classList.remove('activeul');
      }
}
// scroller
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
