function validacion(){
    let porcentaje = 0;
    let diferencia = 0;

    if (motoSelect === valueMoto1) {
        porcentaje = (50*valueMoto1)/100;
        if(input.value > porcentaje){
            diferencia = (valueMoto1 -input.value) + (((valueMoto1 - input.value)*25)/100);
            textDif.textContent = `${diferencia}`;            
        }
        else{
            alert('no ingresó más del 50 por ciento del precio total');     
        }
    } 
    else{
        porcentaje = (50*valueMoto2)/100;
        if(input.value > porcentaje){
            diferencia = (valueMoto2 -input.value) + (((valueMoto2 - input.value)*25)/100);
            textDif.textContent = `${diferencia}`;
        }
        else{
            alert('no ingresó más del 50 por ciento del precio total');
        }
    }    
}

const payText = document.querySelector('#paytext');
let yamaha = document.querySelector('#yamaha');
let honda = document.querySelector('#honda');

let motoSelect = 0;

const valueMoto1 = 200;
const valueMoto2 = 100;

yamaha.addEventListener('click', () => {
    payText.innerHTML = `${valueMoto1}`;
    motoSelect = valueMoto1;
});
honda.addEventListener('click', () => {
    payText.innerHTML = `${valueMoto2}`;
    motoSelect = valueMoto2;
});

let input = document.querySelector('input');
let textDif = document.querySelector('#pay');
const buttonPago = document.querySelector('#buttonPay');

buttonPago.addEventListener('click', validacion);

