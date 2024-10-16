function nuevaInternet(){
    if(navigator.onLine){
        document.getElementById("noInternet").style.display = 'none'
     }else{
         document.getElementById("noInternet").style.display = 'flex'
     }
    
    }
setInterval(nuevaInternet, 1000)

if(!localStorage.getItem("productosPanes")){
    localStorage.setItem('productosPanes','')
    }
if(!localStorage.getItem("envio")){
        localStorage.setItem('envio','')
        }   
const notaInternet = document.getElementById('sinCon')
document.addEventListener("DOMContentLoaded", m)

document.addEventListener("DOMContentLoaded", tomarDatos)


function nueva(){
    const nuevaversion = localStorage.getItem("nuevaversion")
    if(nuevaversion == 'si'){
    //document.getElementById("v").style.opacity = 1
    //document.getElementById("link").href= localStorage.getItem("link")
            }
    //console.log(nuevaversion)
    }
if(localStorage.getItem("facturasPendientes")){
    alert("Tienes una factura pendiente")
    document.getElementById("reciboFactura").style.display= 'flex'
}
function tomarDatos(){
    if(localStorage.getItem("dataBro2") == 'listo'){
            const nombre = document.getElementById("nombre")
      
            const tel = document.getElementById("telefono")
            const direccion = document.getElementById("direccion")
            const datos = JSON.parse (localStorage.getItem("dataBro"))
            nombre.value= datos.nombre
            tel.value= datos.telefono
            direccion.value= datos.direccion
        } 
}
function saludarCliente() {
    if(localStorage.getItem("dataBro2") == 'nombre'){
        document.getElementById("saludarCliente").innerHTML = "Bienvenido, recuerde llenar sus datos"

    }else{
         // Define el horario en el que quieres mostrar el botón
    const medianoche = moment().set({ hour: 0, minute: 0 }); // 09:00 AM
    const madrugada = moment().set({ hour: 6, minute: 0 }); // 09:00 AM
    const mediodia = moment().set({ hour: 12, minute: 0 }); // 05:00 PM
    const tardenoche = moment().set({ hour: 19, minute: 0 }); // 05:00 PM
    const noche = moment().set({ hour: 24, minute: 0 }); // 8:00 PM
    // Obtiene la hora actual
    const ahora = moment();
    // Verifica si la hora actual está dentro del rango
    if (ahora.isBetween(medianoche, mediodia, null, '[]')) {
       const nombreCliente = JSON.parse (localStorage.getItem("dataBro"))
       //console.log(nombreCliente)
       document.getElementById("saludarCliente").innerHTML = "Tenga buenos días"+" " + nombreCliente.nombre
    }
    if(ahora.isBetween(medianoche, madrugada, null, '[]')){
        const nombreCliente = JSON.parse (localStorage.getItem("dataBro"))
       document.getElementById("saludarCliente").innerText = "Estás madrugando con hambre"+ " "+ nombreCliente.nombre 
    }   
    if(ahora.isBetween(mediodia, tardenoche, null, '[]')){
        const nombreCliente = JSON.parse (localStorage.getItem("dataBro"))
       //document.getElementById("saludarCliente").innerText = "Que bueno verte esta tarde"+ " "+ nombreCliente.nombre  
    }   
    if(ahora.isBetween(tardenoche,noche, null, '[]')){
        const nombreCliente = JSON.parse (localStorage.getItem("dataBro"))
       document.getElementById("saludarCliente").innerText = "Buenas noches "+ " "+ nombreCliente.nombre  
    }   
    }
   
}
//document.addEventListener("DOMContentLoaded", saludarCliente)
document.addEventListener("DOMContentLoaded", nueva) 

let form = localStorage.getItem("envio")   
const ul = document.getElementById("ul")
const portador = document.getElementById("portador")



document.addEventListener('DOMContentLoaded', internet)
//document.addEventListener('DOMContentLoaded', mostrarBotonEnHorario)

//funcion compartir con QR
function qr(){
const version = localStorage.getItem("versionApp")
const link = localStorage.getItem("link")

if(!link){
    Swal.fire({
        title:'Error',
        text:'Espera a que carguen los datos del servidor',
        timer:1500, 
        showConfirmButton: false, grow: 'row' })
}else{

document.getElementById("version").innerHTML= version
     var qr = new QRious({
    element: document.querySelector('canvas'),
    
    size: 150,
    value: link
  });
  qr === canvas.qrious;
}

}





//generar tickect
function generarTicketAlfanumerico() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ticket = '';
    for (let i = 0; i < 5 ; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
    ticket += caracteres[indiceAleatorio];
    
    }
    //return ticket;
const token= moment().format('l')+ticket
localStorage.setItem("token", token)
console.log('es este'+ '----'+ token);
 
    

  }
  






function internet(){
    if(navigator.onLine){
//ul.style.display = 'flex'
//notaInternet.style.display ='none'
//mostrarBotonEnHorario()
}else{
  //  ul.style.display = 'none'
    //notaInternet.style.display ='flex'
    //notaInternet.innerText = 'Sin conexión a internet'
}
}
setInterval(nuevaInternet, 1000)
//mostrarBotonEnHorario

//los option
//github


function m() {
    const datos = JSON.parse(localStorage.getItem("datosIniciales"))
    datos.forEach(datos =>{
   const abrir = Number(datos.abrir)
    const cerrar = Number (datos.cerrar)  
   
       // Define el horario en el que quieres mostrar el botón
    const horaInicio = moment().set({ hour: abrir, minute: 0 }); 
    const horaFin = moment().set({ hour: cerrar, minute: 0 }); 
    //console.log(horaFin, horaInicio)
    // Obtiene la hora actual
    const ahora = moment();
    
    // Verifica si la hora actual está dentro del rango
    if (ahora.isBetween(horaInicio, horaFin, null, '[]')) {
       document.getElementById("cierre").style.display='none'
    }else{
      
        document.getElementById("cierre").style.display='flex'
    }
    })
   
   
}
document.addEventListener("DOMContentLoaded", m)
setInterval(m, 10000)
// funcion para que el carrito muestre una alerta
function alertaDatos(){
   const dat=  localStorage.getItem("dataBro2")
if(dat == 'nombre'){
    Swal.fire({
        icon:'warning',
        text:'Recuerda debes rellenar tus datos personales para hacer efectiva la compra',
        title:'Faltan Datos Personales',
          });
}else{
    carroVer()
}
}
// Llama a la función al cargar la página
var htmlopt='' 
function opt(){
const opt =JSON.parse (localStorage.getItem("datosIniciales"))
opt.forEach(function(opt){
    opt.precioenvios.forEach(function(pre){
        htmlopt +=` <option><b>${pre.lugar}:</b> ${pre.precio}</option>`
        console.log(htmlopt)
        //document.getElementById("mySelect").innerHTML = htmlopt
    })
})   
}



function carroVer(){
    const carroVer= localStorage.getItem("productosPanes")
if(carroVer == ''){
    document.getElementById("elCarrito").innerHTML = `<p>Carrito Vacío</p>`
}else{
    generarTicketAlfanumerico()
    mostrarCarrito()
}
}

async function mostrarCarrito(){
           const productoscarrito=JSON.parse (localStorage.getItem("productosPanes"))
        var contenido=''
        var ordenContenido=''
        var textoW= ''
      
        productoscarrito.forEach(function(p){
          contenido += `
           <td>${p.producto}</td>
             <td>${p.precio}</td>
               <td>${p.cantidad}</td>
          
        `
        ordenContenido +=`
        <tr>
         <td id="producto1">${p.producto}</td>
             <td id="precio1">${p.precio}</td>
               <td id="cantidad1">${p.cantidad}</td>        
        </tr>
       
        `
          textoW += `Producto:${p.producto}/Cantidad:${p.cantidad}/Precio:${p.precio} `
        })
        const prod = JSON.parse(localStorage.getItem("productosPanes"))
       const precios= prod.map(objeto => Number(objeto.precio))
       const pTotal = precios.reduce((total, valorActual) => total + valorActual, 0);
       const cliente= JSON.parse(localStorage.getItem("dataBro"))
     
       //const email ='iglesiahatillo57@gmail.com'
       const numTel= localStorage.getItem("numTel")
       cant= prod.length
       const token = localStorage.getItem("token")
       const envio = localStorage.getItem("envio")
     
     
      //qr generar
      //document.getElementById("canvas2").style.display ="flex" 
       const textodelQr = 'Nombre del cliente:'+"---"+ cliente.nombre+ "---" + 'Orden#:'+ "---" + token+"---"+ "Total a pagar:"+ "---" + pTotal+"---"+ "Envio" + envio
//lo nuevo de los opt
let htmlopt= ''
const opt =JSON.parse (localStorage.getItem("datosIniciales"))
opt.forEach(function(opt){
    opt.precioenvios.forEach(function(pre){
        htmlopt +=` <option value='${pre.precio}'><b>${pre.lugar}:</b> $${pre.precio} cup</option>`
        //console.log(htmlopt)
        //document.getElementById("mySelect").innerHTML = htmlopt
    })
})   

//fin de lo nuevo de los opt
       var qrM = new QRious({
        element: document.getElementById('canvas2'),
        size: 100,
        value: textodelQr
      });
      //qrM === canvas.qrious;
      // fin del qr 
      
      let textoWhat=`*Id*%0A+${token}%0A*Pedido:*%0A${textoW}%0A+*Total a Pagar*%0A+${pTotal}%0A+*Nombre del Cliente*%0A+${cliente.nombre}%0A+*Telef.*%0A+${cliente.telefono}%0A+*Direccion*%0A+${cliente.direccion}%0A+*Fecha del Ticket de compra*%0A+${fechaCarrito}%0A+*Envio*%0A+${localStorage.getItem("envio")}`


       const htmlOrden= `${ordenContenido}
       
       
       `

       const htmlCarrito =`
    <div class='datosCarrito'>  
    <h5 class='ui'>Datos del Cliente</h5>
    <p ><b>Orden#:</b><span id='tokenE'>${localStorage.getItem("token")}</span></p>
    <p ><b>Cliente:</b> <span id='nombreE'>${cliente.nombre}</span> </p>
    <p><b>Tel:</b><span id='telE'> ${cliente.telefono}</span></p>
    <p id="total"><b>Factura Sub-Total:</b>$<span id="totalS">${pTotal}</span>cup</p>
    <p id='costoEnvio'><b>Costo de Envio:</b> $<span id="recogida"></span>cup </p>
    <p id="totalC"><b>Total + Envio:</b> <span id='totalE'>$ <span id='totalEnvio'></span> cup</span></p>
     </div> 
      <hr>
    
    <div id='modoEnvio'>
    <h5 id='til'>Elegir modo de envio</h5>
    <form id='formEnvio'>
     <select id="mySelect">
      ${htmlopt}
     </select>
    
<button type="button" id="wa2" onclick='opt1();enviarFactura()'>Confirmar Orden</button>
    </form>
     </div>
     </br>
    <hr>
  <div class='botones'>
 <a  class="ui-btn" id="wa" href="#" target='_blank'>Procesar x Whatsapp <i class="icofont-whatsapp"> </i></a>

    <!--<a  class="ui-btn" id="wa" href="https://api.whatsapp.com/send?phone=${numTel}&text=*Pedido:*%0A+${textoW}%0A+*Total a Pagar*%0A+ ${pTotal} +*Nombre del Cliente*%0A +${cliente.nombre}+*Telef.*%0A + ${cliente.telefono}+*Direccion*%0A + ${cliente.direccion}+ *Fecha del Ticket de compra*%0A + ${fechaCarrito}" >Procesar x Whatsapp <i class="icofont-whatsapp"> </i></a>-->
    
<a  id='wa1' onClick="OcultardivCarrito();smsBorrar()">Vaciar carrito <i class="icofont-cart"> </i></a>
      </div>      
    `
document.getElementById('elCarrito').innerHTML = htmlCarrito
document.getElementById('orden').innerHTML = htmlOrden
opt1()
const tEnvio= document.getElementById("totalEnvio").textContent
 
      }

   
    function opt1(){
        var obj = document.getElementById("mySelect");
        const envioMoney= document.getElementById("recogida").innerHTML = obj.options[obj.selectedIndex].value
        const dinero = obj.options[obj.selectedIndex].value
        const moneyTotal= document.getElementById("totalS").textContent
        //var opcionSeleccionada =   obj.options[obj.selectedIndex].text
        const final = document.getElementById("totalEnvio")
        const finalFinal = envioMoney + moneyTotal
        final.innerHTML= Number(moneyTotal)+ Number(dinero)
   
    }


function enviarFactura(){
 document.getElementById("reciboFactura").style.display= 'flex'
   let facturasrecientes =[]  
   localStorage.setItem("facturasPendientes",[])
    const id = document.getElementById("tokenE").textContent
    const nombre = document.getElementById("nombreE").textContent
    const numTel= document.getElementById("telE").textContent
    const numeroTel= localStorage.getItem("numTel")
    const total = document.getElementById("totalS").textContent
    const costoEnvio = document.getElementById("recogida").textContent
    const totalC =document.getElementById("totalC").textContent
    const productoscarrito=JSON.parse (localStorage.getItem("productosPanes"))
    let textoW =''
    let textoFact =''
    const mensaje = productoscarrito.map((producto, index) => {
        return `${index + 1}. ${producto.nombre} - ${p.cantidad} - ${producto.precio} CUP`;
    }).join('%0A');

   productoscarrito.forEach(function(p){
      //  textoW += `*Producto:*%20${p.producto}%20/*Cantidad*:%20${p.cantidad}%20/%20*Precio:*%20${p.precio}%0A%0A`
        textoFact += `<p><b>Producto:</b>${p.producto}<b>Cantidad:</b>${p.cantidad}<b>Precio:</b>${p.precio}</p></br> `
      })
    let mensajeFactura= ''
    mensajeFactura = `*Orden:*%20${id}%0A*Nombre:*%20${nombre}%0A*Tel:*%20${numTel}%0A*Sub-Total:*%20${total}%0A*Envio:*%20${costoEnvio}%0A*Total+Envio:*%20${totalC}%0A`
   
    const textoFinal= mensaje +mensajeFactura
    const botonWa= document.getElementById("wa")
//nueva referencia de watsapp
//botonWa= `https://wa.me/${numeroTel}?text=Hola,%20me%20gustaría%20realizar%20un%20pedido%20de%20.%20Aquí%20están%20los%20detalles:%0A-%20${textoW}%20${nombre}%0A-%20${numTel}%0A-%20${}`
//se caba

    botonWa.href = `https://api.whatsapp.com/send?phone=${numeroTel}&text=${textoFinal} `
    botonWa.style.display= "block"
     
    facturasrecientes.push(
        {
            "id":id,
            "productos":textoFact,
            "nombre": nombre,
            "tel": numTel,
            "total":total,
            "costoenvio": costoEnvio,
            "totalEnvio": totalC
        
        })
    localStorage.setItem("facturasPendientes", JSON.stringify(facturasrecientes))

}
function mostrarFactura(){
    document.getElementById("factura").style.display = "flex"
    
    const dataFactura =JSON.parse(localStorage.getItem("facturasPendientes"))
     let htmlFact=''
     dataFactura.forEach((data)=>{
     htmlFact=`
     <div id='fact1'>
     <h2>Factura</h2>
     <hr>
    <p class='fat'>Orden No.</p>
     <p>${data.id}</p>
      <p class='fat'>A Nombre de</p>
     <p>${data.nombre}</p>
     <p class='fat'>Sub-Total:</p>
    <p>$${data.total} cup</p>
     <p class='fat'>Total a pagar:</p>
     <p>${data.totalEnvio}</p>
      <details>
  <summary>Detalles de los productos</summary>
  <div>${data.productos}</div>
      </details>
      <hr>
<br>
      <input type="button" value="Borrar" id='wa5' onClick='smsBorrarFactura()'>
     </div>
     
     `  
    
     })
 document.getElementById("mostrarFactura").innerHTML= htmlFact
}
function cerrarFactura(){
    document.getElementById("factura").style.display = "none"
}
function cerrarEnvio(){
    document.getElementById("envios").style.display = "none"
}

function Verrecibo(){
  document.getElementById("reciboFactura").style.display= 'flex'
}
function Esconderrecibo(){
    document.getElementById("reciboFactura").style.display= 'none'
  }

  function smsBorrarFactura(){
      document.getElementById("factura").style.display = "none"
    Swal.fire({
      title: "¿Deseas borrar la factura pendiente?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`
    }).then((result) => {
   
      if (result.isConfirmed) {
  document.getElementById("reciboFactura").style.display= 'none'
  localStorage.setItem("facturasPendientes", '')
     Swal.fire({
      title:'Facturada Borrada',
      showConfirmButton: true,
      allowOutsideClick: true
      });
      } else if (result.isDenied) {
        Swal.fire("Sigues con una factura pendiente","", "warning");
       
        
        
      }
    });
  }

  //validar el numero de telefono
  function verificarNumeroCuba(numero) {
    // Expresión regular para validar números cubanos
    const regexCuba = /^(5\d{7}|63\d{6})$/;
    return regexCuba.test(numero);
}

function proceso() {
 
    const phoneNumber = document.getElementById("telefono").value;

    if (!verificarNumeroCuba(phoneNumber)) {
        document.getElementById("telefono").value= ''
       Toastify({
            text: "El número ingresado no es un número válido de Cuba.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
        }).showToast();
        
    } else {
        Toastify({
            text: "Número válido.",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    }
}


function mostrarEnvio(){
    document.getElementById("envios").style.display = "flex"
    let htmlEnvio=''
    const dataEnvio =JSON.parse(localStorage.getItem("datosIniciales"))
  console.log(dataEnvio)

  dataEnvio.forEach( data=>{
    data.precioenvios.forEach(p=>{
        htmlEnvio +=`
         <tr>
             <td>${p.lugar}</td>
             <td>${p.precio}</td>
        </tr>
        `
    })
  })

 document.getElementById("mostrarEnvioT").innerHTML= htmlEnvio
}
