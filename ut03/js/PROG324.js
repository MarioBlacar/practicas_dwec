let DNI = [
    '77486017',
    '66545634',
    '77755775',
];

function addNif(arr){
    if(Array.isArray(arr)){
        arr.forEach(numeros => {
            console.log(numeros);
            numero = numeros.split('');
            console.log(numero);
            let acumulador = 0;

            numero.forEach(num => {    
                acumulador = acumulador + Number(num);    
            });
            console.log(acumulador);
            let orden = acumulador%23;
            console.log(orden);
            switch(orden){
                case '0':
                    return(numero.push('T').join(''));
                break;
                case '1':
                    return(numero.push('R').join(''));
                break;
                case '2':
                    return(numero.push('W').join(''));
                break;
                case '3':
                    return(numero.push('A').join(''));
                break;
                case '4':
                    return(numero.push('G').join(''));
                break;
                case '5':
                    return(numero.push('M').join(''));
                break;
                case '6':
                    return(numero.push('Y').join(''));
                break;
                case '7':
                    return(numero.push('F').join(''));
                break;
                case '8':
                    return(numero.push('P').join(''));
                break;
                case '9':
                    return(numero.push('D').join(''));
                break;
                case '10':
                    return(numero.push('X').join(''));
                break;
                case '11':
                    return(numero.push('B').join(''));
                break;
                case '12':
                    return(numero.push('N').join(''));
                break;
                case '13':
                    return(numero.push('J').join(''));
                break;
                case '14':
                    return(numero.push('Z').join(''));
                break;
                case '15':
                    return(numero.push('S').join(''));
                break;
                case '16':
                    return(numero.push('Q').join(''));
                break;
                case '17':
                    return(numero.push('V').join(''));
                break;
                case '18':
                    return(numero.push('H').join(''));
                break;
                case '19':
                    return(numero.push('L').join(''));
                break;
                case '20':
                    return(numero.push('C').join(''));
                break;
                case '21':
                    return(numero.push('K').join(''));
                break;
                case '22':
                    return(numero.push('E').join(''));
                break;
            }
        });
        
    }else{
        return("El objeto no es un array");
    }
}
alert( addNif(DNI) );