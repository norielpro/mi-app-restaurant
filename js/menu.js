if(!localStorage.getItem("menuApp")){
    localStorage.setItem("menuApp", [])
}

fetch('server.json')
.then(function(res){
if(!res.ok){ 
    document.getElementById("errorI").innerText= "Ocurrió un error cargando el menú"
    throw new error(console.log('Hubo un error'+ res.statusText));
     
  }else{
    if(res.ok){
return res.json();
}
  }

})
.catch(error=>{ console.error('Error'+ error)})
 
.then(function(data){

localStorage.setItem("menuApp", JSON.stringify(data))

})

function llamada(){
   let html =''
   let htmlM=''
const datosMenu =JSON.parse(localStorage.getItem("menuApp"))
console.log(datosMenu)

datosMenu.forEach(data => {
    data.menu.forEach(data =>{
    const id = document.getElementById("m1").value
    const producto = document.getElementById("m2").value
    const precio = document.getElementById("m3").value

     html +=`
 <div class="menuCargado" id=${data.id}>
     <p>${data.producto}</p>
    <p>${data.precio}</p>
    <button onclick="pasar('${data.id}', '${data.producto}', '${data.precio}')"> Editar </button>
</div>

 `
    })
  data.mercado.forEach(dataM=>{
    htmlM +=`
    <div class="menuCargado" id=${dataM.id}>
       <p>${dataM.producto}</p> 
       <p>${dataM.precio}</p>
   
    </div>`
  })
document.getElementById("menuRest").innerHTML = html
document.getElementById("menuMercado").innerHTML = htmlM
}); 
}
document.addEventListener("DOMContentLoaded", llamada)


function editar(){
 let array=[]
  const arrayViejo =JSON.parse(localStorage.getItem("menuApp"))
  const idE = document.getElementById("m1").value
 const productoE = document.getElementById("m2").value
 const precioE = document.getElementById("m3").value
 let item= [{
  id: idE,
  producto: productoE,
  precio:precioE
 }]
 array.push(item)
 arrayViejo.push(...array)
 localStorage.setItem("menuApp", JSON.stringify(arrayViejo))

}

 
function pasar(id, producto, precio){
  const ida = document.getElementById("m1")
  const productoa = document.getElementById("m2")
  const precioa = document.getElementById("m3")
  ida.value= id
  productoa.value=producto
  precioa.value= precio
  console.log(productoa.value)
}
//



// Paso 3: Agregar el nuevo array al array existente
/*datos.push(...nuevosProductos); // Usar spread operator para agregar elementos del nuevo array

// Verificar el resultado
console.log(datos);*/