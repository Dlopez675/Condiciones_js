let button = document.querySelector("button")

button.addEventListener("click", ()=>{
    let input1 = Number(document.querySelector("#input1").value)
    let input2 = Number(document.querySelector("#input2").value)
    let input3 = Number(document.querySelector("#input3").value)

    let suma = input1 + input2 + input3

    if(suma > 10){
        document.querySelector("p").innerHTML = "Llevas demasidos Stickers"
    }else{
        document.querySelector("p").innerHTML = " Llevas " + suma + " Stickers"
    }
})