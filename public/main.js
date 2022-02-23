const navList = document.querySelector(".nav-list")
const navLinks = [...navList.querySelectorAll("li")]
const intersections = [...document.querySelectorAll(".intersection")]

const options = {
  rootMargin: "-100px",
}

const handleHighlight = (dataName) => {
  navLinks.forEach((link) => {
    link.innerText.toLowerCase() === dataName
      ? link.classList.add("text-highlight")
      : link.classList.remove("text-highlight")
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      handleHighlight(entry.target.dataset.name)
    }
  })
}, options)

intersections.forEach((intersection) => {
  observer.observe(intersection)
})
