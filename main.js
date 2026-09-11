 

   
let diaEvento = new Date('November 28 2026,  21:00:00').getTime();
let boton = document.querySelector("#btn")



// diaEvento = new Date().getTime() + 1_000 * 20;

let relojE = document.getElementById('reloj');

const diaM = 86_400_000;
const horaM = 3_600_000;
const minutoM = 60_000;
const segundoM = 1_000;
const ejecutarReloj = setInterval(
    () => {

        let hoy = new Date().getTime();
        let distancia = diaEvento - hoy;

        let diaR = Math.trunc(distancia / diaM);

        let horaR = Math.trunc((distancia % diaM) / horaM);

        let minutoR = Math.trunc((distancia % horaM) / minutoM);

        let segundoR = Math.trunc((distancia % minutoM) / segundoM);

        if (distancia  < 1) {
            clearInterval(ejecutarReloj);
            diaEventoAhora();
        }

        pintarElementos(diaR, horaR, minutoR, segundoR);

    }
, 1000);

let creDia = document.getElementById('cre-dia');
let creHora = document.getElementById('cre-hora');
let creMinuto = document.getElementById('cre-minuto');
let creSegundo = document.getElementById('cre-segundo');
function pintarElementos(dia, hora, minuto, segundo) {

    segundo = (segundo < 10) ? '0' + segundo : segundo;

    minuto = (minuto < 10) ? '0' + minuto : minuto;

    hora = (hora < 10) ? '0' + hora : hora;

    creDia.innerHTML = dia;
    creHora.innerHTML = hora;
    creMinuto.innerHTML = minuto;
    creSegundo.innerHTML = segundo;
}

function diaEventoAhora () {
    alert('Dia del Evento!!!');
    // Todo el codigo cuando el evento llegue
}






  boton.addEventListener("click", () => {

    Swal.fire({
      title: '<strong>VER LA UBICACION<u></u></strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.9560225164914!2d-65.03918232406429!3d-42.768135333092545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe024a9dbc8f1bdf%3A0x8afb08e247380991!2sParroquia%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs%2C%20Madryn!5e0!3m2!1ses!2sar!4v1788562532148!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
        
        
    })
  });
   
   
  function exito(){
    Swal.fire({
        title: '<strong>VER LA UBICACION<u></u></strong>',
        icon: 'success',
        html:
          'INGRESÁ' +
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.611942212581!2d-65.0644242240651!3d-42.75426183221177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe023586276a6353%3A0x511a0c30f3128fef!2ssalon%20encuentro%20del%20sec!5e0!3m2!1ses!2sar!4v1789163900030!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
          'Podes ampliar el mapa',
          
          
      })
}
   
      
  // Botón 2 (nuevo)
  const boton2 = document.getElementById("boton2");
  boton2.addEventListener("click", () => {
    Swal.fire({
      title: '<strong>VER LA UBICACION</strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.0646111938745!2d-57.761958!3d-37.928920999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95852efde2df4f1f%3A0x9a2af04341877482!2sLa%20Victoriana!5e0!3m2!1ses!2sar!4v1758125963480!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    })
  });
  

    
    

   
        
    
    