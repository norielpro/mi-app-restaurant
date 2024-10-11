


if(!localStorage.getItem("dataBro2")){
localStorage.setItem('dataBro2','nombre')
}

let productoArray=[]
  const CrearCarrito = (producto, cantidad,precio)=>{
    let item= {
        producto:producto,
        cantidad:cantidad,
        precio:precio
      
    }
    productoArray.push(item);
    return item;
    
    }
const GuardarDB = ()=>{
    localStorage.setItem('productosPanes', JSON.stringify(productoArray))
    Toastify({
      text: "Producto Añadido ",
      duration: 3000,
      gravity: "bottom",
      position: "center",
      style: {
        background: "#2F71D6",
      },
      }).showToast();
   // cCompras()
    }

function cComprasPanes(){
        const prod = JSON.parse(localStorage.getItem("productosPanes"))
        let cantidadPro = document.getElementById("quote")
        cantidadPro.innerText= prod.length
      }

 //hasta aqui
 function anadirCarrito(){
    const productoscarrito=JSON.parse (localStorage.getItem("productos"))
    var contenido=''
    productoscarrito.forEach(function(p){
      contenido += `
         <li><b>${p.nombre}</b> ${p.precio}</li>
             `
    })
    //console.log(contenido)
   document.getElementById("mostrarPro").innerText= contenido
    
  }
  //muestra el carrito

   
  
  function recordarCarrito(){
    cComprasPanes()
    const prod = JSON.parse(localStorage.getItem("productosPanes"))
    const dato = JSON.parse(localStorage.getItem("dataBro"))
    const detalle=`${dato.nombre} tienes una compra pendiente en tu carrito.`
    cant= prod.length
   
    if(cant > 0){
    Swal.fire({
      title:'Productos del carrito',
      text:detalle,
      icon: 'info',
      timerProgressBar: true,
      background: '#ECC537'
    })
  
    }
    
   
  }
  function vaciarCarrito(){
   localStorage.removeItem('productosPanes')
   productoArray = []
   document.getElementById("quote").innerHTML = "0" 
   document.getElementById("orden").innerHTML ='Sin productos'   
   document.getElementById("reciboFactura").style.display= 'none'
   localStorage.setItem("facturasPendientes", '')
   Swal.close()
  }
  function smsBorrar(){
    Swal.fire({
      title: "¿Deseas vaciar el carrito ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`
    }).then((result) => {
   
      if (result.isConfirmed) {
    document.getElementById("elCarrito").innerHTML = "Sin orden a procesar"    
    vaciarCarrito()
     Swal.fire({
      text:'Puede seguir comprando en nuestra tienda',
      title:'Carrito limpio',
      showConfirmButton: true,
      allowOutsideClick: true
      });
      } else if (result.isDenied) {
        Swal.fire("El Carrito mantiene sus productos ","", "warning");
        mostrarCarrito()
        
      }
    });
  }
function nohay(){
  Toastify({
    text: "No hay productos seleccionados",
    duration: 3000,
    gravity: "top",
    position: "center",
    style: {
      background: "#ECC537",
    },
    }).showToast();
}

 function verificarExistencia(){
  if(document.getElementById("nP").textContent ==  "Productos"){
   nohay()
    }else{
  
    guardarP()
  }
 }   
function guardarP(){
  let producto= document.getElementById("nP").textContent
   let precio= Number (document.getElementById("precio").textContent)
   let cantidad= Number (document.getElementById("cantidadP").textContent)
   let preciofinal = precio * cantidad 
   //console.log (producto, precio)
   CrearCarrito(producto,cantidad, preciofinal)
   GuardarDB()
   cComprasPanes()
   document.getElementById("cantidadP").innerHTML = "1"

}  


function menos(){
    let menos = document.getElementById("menos")
    let cantidadP = Number(document.getElementById("cantidadP").textContent)
    if(cantidadP > 1){
        cantidadP --
        document.getElementById("cantidadP").innerHTML = cantidadP
    }     
    

}
function mas(){
    let mas = document.getElementById("mas")
    let cantidadP = Number(document.getElementById("cantidadP").textContent)
      
    if(cantidadP > 0  ){
    cantidadP ++
    document.getElementById("cantidadP").innerHTML = cantidadP
    }    
   // console.log(cantidadP)

}
function isOnline() {
  return navigator.onLine;
}
function recordarDatos(){
  if(isOnline()){
   verdatos()
  } else {
     Swal.fire({
      icon:"warning",
      text:'Recuerda que para ver el menú actualizado debes estar conectado a internet',
      title:'No tienes conexión',
      showConfirmButton: false,
      allowOutsideClick: false
      });
  }
 
}
setTimeout(verdatos, 1000)

function verdatos(){
 const datos=  localStorage.getItem('dataBro2')
 const detalle = `Bienvenido`
 const data = datos

 if (data === 'nombre' ){
  Swal.fire({
    icon:'warning',
    text:'Recuerda debes rellenar tus datos personales para hacer efectiva la compra',
    title:detalle,
      });
 }
 if (data === 'listo' ){
  const datosQ= JSON.parse(localStorage.getItem('dataBro'))
  const dataCliente = `Bienvenido ${datosQ.nombre}`
  const check = document.getElementById('check')
 
  Swal.fire({
    icon:'info',
    text:'Disfruta de nuestra comida',
    title:dataCliente,
      });
 }
 }

 document.addEventListener('DOMContentLoaded', function() {
  // Tu código aquí se ejecutará una vez que el DOM esté completamente cargado
 // document.getElementById('lafecha').innerText = moment().format('lll')
  console.log('El DOM ha sido completamente cargado y analizado.');
  
  // Puedes llamar a otras funciones o inicializar tu aplicación aquí
//recordarCarrito();

});
//setInterval(fecha, 60000)
function fecha(){
const fechaactual= moment().format('lll')
//document.getElementById('lafecha').innerText = fechaactual
}

const fechaCarrito= moment().format('lll')





function costosEnvios(){ 
 let html= ''
 const datos = JSON.parse(localStorage.getItem("datosIniciales")) 
datos.forEach(datos => {
    datos.precioenvios.forEach(precioenvio =>{
html +=`
 <p><b>${precioenvio.lugar}</b> <span>${precioenvio.precio}</span> </p>
`
 Swal.fire({
    title: "Costo del envío",
    html: html,
    imageUrl: "assets/domicilio.webp",
    imageAlt: "envio"
  });
})
 })

 
}

 