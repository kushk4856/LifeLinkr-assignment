window.addEventListener("scroll", function () {
  const targetElement = document.getElementById("side_container");
  console.log(targetElement);
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.body.offsetHeight - 100;

  if (scrollPosition >= threshold) {
    targetElement.classList.add("change_style");
  } else {
    targetElement.classList.remove("change_style");
  }
});
