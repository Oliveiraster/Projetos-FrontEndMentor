const title = document.querySelectorAll(".title")
const resp = document.querySelectorAll(".text")
const img = document.querySelectorAll(".arrow")
console.log(title)
console.log(resp)
for (let i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function() {
        resp[i].classList.toggle("hide")
        title[i].classList.toggle("bold")
        img[i].classList.toggle("rotate")
    })
}