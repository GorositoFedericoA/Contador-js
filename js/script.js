const botones = document.querySelectorAll(".btn")
const valor = document.querySelector(".valor")

let contador = 0


try {
    botones.forEach(boton => {
        boton.addEventListener("click",()=>{


            if(boton.id === "suma"){
                contador += 1
                valor.textContent = contador            
                console.log(contador)
            }else if(boton.id === "resta"){
                contador -= 1
                valor.textContent = contador            
                console.log(contador)
            }else if(boton.id === "reset"){
                contador = 0
                valor.textContent = contador
            }

        })
    });
} catch (error) {
    console.log(error)
}