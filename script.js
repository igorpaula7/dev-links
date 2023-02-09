function themeSwitcher() {
  const body = document.body
  const img = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    body.classList.remove("light")
    img.setAttribute("src", "./assets/avatar-dark-mode.jpg")
  } else {
    body.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light-mode.jpg")
  }
}
