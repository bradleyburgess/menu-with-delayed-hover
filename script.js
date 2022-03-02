const navListItems = document.querySelectorAll(".nav__list-item");
const navSubListItems = document.querySelectorAll(".nav__sub-list-item");

function useDelayedHoverEffect(element, className, delay) {
  let timeout;

  function over() {
    clearTimeout(timeout);
    navListItems.forEach((item) => {
      if (item.dataset.menuItem !== element.dataset.menuItem)
        item.classList.remove(className);
    });
    element.classList.add(className);
  }

  function out() {
    timeout = setTimeout(() => {
      element.classList.remove(className);
    }, delay);
  }

  return [over, out];
}

navListItems.forEach((item) => {
  const [over, out] = useDelayedHoverEffect(item, "over", 350);
  item.addEventListener("mouseenter", over);
  item.addEventListener("mouseleave", out);
  item.addEventListener("focusin", over);
  item.addEventListener("focusout", out);
});
