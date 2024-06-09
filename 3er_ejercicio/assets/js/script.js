let button = document.querySelector("button")


button.addEventListener("click", ()=>{
    let dato1 = document.querySelector("#cars1").value
    let dato2 = document.querySelector("#cars2").value
    let dato3 = document.querySelector("#cars3").value

    let suma = dato1 + dato2 + dato3

    if(suma === "911"){
        document.querySelector("p").innerHTML = "Password 1 Correcto"
    } else if(suma ==="714"){
        document.querySelector("p").innerHTML = "Password 2 Correcto"
    } else{
        document.querySelector("p").innerHTML = "Password Incorrecto"
    }
})


