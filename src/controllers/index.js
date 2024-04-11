import { listaDeContactos } from "./dependencies.js"
let imprimir = document.getElementById("imprimir")
let newContacto = document.getElementById("agregarContacto")
newContacto.addEventListener("click", ()=>{
    let card = document.createElement("div")
    imprimir.appendChild(card)

    let space = document.createElement("br")

    let name = document.createElement("span")
    name.innerText = "Nombre del contacto: "
    card.appendChild(name)
    let inputName = document.createElement("input")
    card.appendChild(inputName)
    
    let telefono = document.createElement("span")
    telefono.innerText = "Numero Telefonico: "
    card.appendChild(telefono)
    let inputTelefono = document.createElement("input")
    card.appendChild(inputTelefono)

    let guardar = document.createElement("button")
    guardar.innerText = "Guardar"
    card.appendChild(guardar)

    guardar.addEventListener("click", ()=>{
        let count = 0
        let nombre=null;
        let apellido=null;
        let numero=0    ;
        let correo=null;
        let input = document.querySelectorAll("input")
        input.forEach(element => {
            count++
            let data = element.value
            switch (count) {
                case 1:
                    nombre = data
                    break;
                case 2:
                    numero= data
                    break;
                default:
                    break;
            }
        });
        if (nombre != "" && numero != null) {
            listaDeContactos.addContacto(nombre , numero )
            alert("contacto guardado")
        }else{
            alert("Por favor, complete todos los campos.");
        }
        
        
    })
})

let mostrarCont2 = document.getElementById("mostrar-contacto2")
let mostrarCont = document.getElementById("mostrar-contacto")
mostrarCont.addEventListener("click", ()=>{
    if(listaDeContactos.comprobacion() > 0){
        let comprobacion= listaDeContactos.getContacto()
        let comprobacion2=comprobacion
        do{ 
            const card= document.createElement("div");
            mostrarCont2.appendChild(card)
            
            let chartxt= document.createElement("h2");
            chartxt.innerText = "contacto"
            card.appendChild(chartxt)

            chartxt= document.createElement("span");
            chartxt.innerText = "Nombre: " + comprobacion.getNombre()+ " "
            card.appendChild(chartxt)
            
            
            chartxt= document.createElement("span");
            chartxt.innerText="Telefono: " +comprobacion.getTelefono() + " "
            card.appendChild(chartxt)
            
            listaDeContactos.deleteContacto()
            comprobacion= listaDeContactos.getContacto()
            console.log(comprobacion.getNombre()+" = "+ comprobacion2.getNombre())
        } while (comprobacion.getNombre()!=comprobacion2.getNombre());
    }
    else{
        alert("ingrese un contacto.");
    }
})