const url = "https://api.adviceslip.com/advice"

const id = document.querySelector("#advice")
const text = document.querySelector("#text")
const btn = document.querySelector(".btn")
async function getApi(){
    const response = await fetch(url)
    //console.log(response)
    const data = await response.json()
    //console.log(data)
    id.textContent = data.slip.id
    text.textContent = `" ${data.slip.advice} "` 
}
getApi()
setInterval(() => {
    getApi()
},10000)

btn.addEventListener("click", function () {
    getApi()
})
