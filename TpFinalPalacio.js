let monto = document.getElementById('monto');
let btnCalcular = document.getElementById('btn_calcular');
let btnSubmit = document.getElementById('btn_submit');
let marcaTarjeta = document.getElementById('marcas_tarjetas');
let montoImpreso = document.getElementById('monto_impreso');
let campo = document.getElementById('propiedades_tarjeta');

//datosDOm formulario 
let nombreDom = document.getElementById('nombre').value
let apellidoDom = document.getElementById('apellido').value
let numeroTarjetaDom = document.getElementById('num-tarjeta').value
let fechaDom = document.getElementById('fecha').value
let valorPinDom = document.getElementById('pin').value


// ingreso de monto 
btnCalcular.addEventListener('click',()=>{
    
let parrafo = document.createElement('div');

montoImpreso.innerHTML = 
`<h2> El monto ingresado es: $${monto.value}
 <h5> A continuacion ingrese metodo de pago </h5>`

document.body.appendChild(parrafo);
})

 
// una vez ingresado el monto se cargan los datos de la tarjeta
// 1- el objeto Tarjeta recibe los valores de los inpul

function validarform(e) {
    let personaNueva = {
        nombre : nombreDom.value;
        apellido : apellidoDom.value;
        numeroTarjeta : numeroTarjetaDom.value;
        fechaVence : fechaDom.value;
        pin : valorPinDom.value;
     }
    }

    let nuevaPersona = new Tarjeta (personaNueva)

 // 2- se corrobora que se cumplan los datos
//    a - que se llenen todos los campos
//    b - que nombre, apellido tengan la primera letra mayuscula
//        que sean solo string..

//    c - que las marcas de tarjeta, una vez seleccionadas
//        muestren las cuotas, y su valor en % respecto 
//        al precio

//  validarRadioTarjetas(){ 
//     var s = "no"
//  }
    // for(let i=0; i<marcaTarjeta)


 
        
}

//   verificarTarjeta() {
//       let numTar = 99999999 * 11111111;
//     if(this.numeroTarjeta >= numTar || this.numeroTarjeta <= numTar){
//         console.log('error de tarjeta')
//     }else if ( this.numeroTarjeta <= numTar && this.numeroTarjeta >= numTar){
//         console.log('numero tarjeta correcto')
//     }
//     else{
//         console.log('error')
//     }
//   }

//  const calcularCoutas = (zs)=>{ 
   
//     if(zs >= 100 && zs <= 500){
//         console.log("recargo del %5")
//       }
//       else if(zs >= 1000 && zs <= 4000){
//         console.log("recargo del %10")
//       }
//       else if(zs >= 5000 && zs <= 10000){
//       console.log("recargo del %20")
//     }
//     else if (zs >= 20000 && zs <= 50000){
//         console.log("recargo del %40")
//     }
//  }


function cuotas(n) {

    switch (n) {
        case 'visa':
            alert('tiene 3 y 6 cuotas sin interes')

            break;
        case 'american express':
            alert('tiene 3 y 6 cuotas sin interes')
            break;

        case 'master card':
            alert('hasta 12 cuotas sin interes')
            break;

        case 'cabal':
            alert('tiene 3 y 6 cuotas con interes')
            break;


        default:
            alert('tarjeta no valida')
    }


}

// resultado final con todos los datos cargados 

function montoFinal(f) {
    if (f >= 3000) {
        alert('su recargo es de 20%')
    } else if (f >= 6000) {
        alert('su recargo es de 30%')
    } else {
        alert('dato no valido')
    }
}


// ejemplo de tarjetas cargadas en el sistema

btnSubmit.addEventListener('click',() =>{
    new Tarjeta()
   console.log(tarjeta11.nombre)
} )


const tarjeta1 = new Tarjeta(Tarjeta.nombre,Tarjeta.apellido);
const tarjeta2 = new Tarjeta("emma","gonzalez",04/2/23, 1234567891234577);
const tarjeta3 = new Tarjeta("cristian","fernandez",05/5/23, 1234567331234577);

// tarjeta1.verificarTarjeta();
// tarjeta2.verificarTarjeta();
// tarjeta1.pagoAprovado();
// console.log(tarjeta1);

// let tarjetaDeUsuarios=[tarjeta1, tarjeta2, tarjeta3]``

