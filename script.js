function toggleMode() {
  //alert("oi")
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}
  //acima é a mesma coisa que abaixo:
  //html.classList.toggle("light")
  html.classList.toggle("light")

  //pegar a tag img:
  const img = document.querySelector("#profile img")
  //outra forma de pegar a tag img:
  //const img = document.querySelector("#profile img")
  //ou
  //const img = document.getElementById("profile").querySelector("img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, colocar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/aavatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto da famosa arte japonesa chamada A Grande Onda.",
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de uma personagem de anime com cabelos pretos longos e franja reta, com um olhar desconfiado e express:ao séria.",
    )
  }
}
