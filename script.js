function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.src = "./assets/avatarlight.jpg"
    img.setAttribute("alt", "Imagem 2")
  } else {
    img.src = "./assets/avatar.jpg"
    img.setAttribute("alt", "Imagem 1")
  }
}
