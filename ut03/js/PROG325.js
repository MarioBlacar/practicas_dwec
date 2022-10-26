let notas = [
    {   DIW : '24-05-2020',
        fecha2 : '02-12-2018',
        fecha3 : '14-02-2020',
    }
];

function getAverageGrade(arr){
    if(Array.isArray(arr)){
        arr.reduce( (acum, item) => {
            if(acum.substring( 6, 9 ) >= item.substring( 6, 9 )){
                acum = item;
            }else if(acum.substring( 6, 9 ) == item.substring( 6, 9 )){
                if(acum.substring( 3, 4 ) >= item.substring( 3, 4 )){
                    acum = item;
                }else if(acum.substring( 3, 4 ) == item.substring( 3, 4 )){
                    if(acum.substring( 0, 1 ) >= item.substring( 0, 1 )){
                        acum = item;
                    }
                }
            }
            }, 0 );
        return(acum);
    }else{
        return("El objeto no es un array");
    }
}
alert( getAverageGrade(notas) );