var num = 0
function selecte(n){
     num = n
}

function send(){
    if(num !== 0){
        let ok = document.querySelector(".hide")
        let show = document.querySelector(".show")
        let text = document.querySelector(".text")
        ok.style.display = 'flex'
        show.style.display = 'none'
        text.textContent = ` You selected ${num} out of 5`
    } else{
        alert('select a level of satisfaction')
    }
}