const navList = document.querySelector(".nav-list")
const navLinks = [...navList.querySelectorAll("li")]
const sections = [...document.querySelectorAll(".section")]

const options = {
  rootMargin: "0px",
  threshold: 0.7,
}

const handleHighlight = (id) => {
  navLinks.forEach((link) => {
    link.innerText.toLowerCase() === id
      ? link.classList.add("text-highlight")
      : link.classList.remove("text-highlight")
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      handleHighlight(entry.target.id)
    }
  })
}, options)

sections.forEach((section) => {
  observer.observe(section)
})
