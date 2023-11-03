const domElement = (id) => {
  return document.querySelector(id);
};

const showbutton = domElement(".showMore-text");

const showContent = () => {
  const showMore = document.querySelector(".showMore");
  const toggleIcon = document.querySelector("#toggleIcon");

  if (
    showMore.style.display === "none" &&
    toggleIcon.classList.contains("fa-angle-up")
  ) {
    showMore.style.display = "block";
    toggleIcon.classList.remove("fa-angle-up");
    toggleIcon.classList.add("fa-angle-down");
  } else {
    showMore.style.display = "none";
    toggleIcon.classList.add("fa-angle-up");
    toggleIcon.classList.remove("fa-angle-down");
  }
};
