let usuario = [
    {   name: 'Mario',
        surname: 'Blasco',
    }
];

function generateUsername(arr){
    arr.forEach(item => {
        let strMinusName = item.name.toLowerCase();
        let strMinusSurname = item.surname.toLowerCase();
        let a = strMinusName.charAt(0);
        let nickname = a + strMinusSurname;
        let random1 = Math.round(Math.random()*10).toString;
        let random2 = Math.round(Math.random()*10).toString;

        item[nickname] = nickname + random1 + random2;
    });
}
let objeto1 = prompt ("escriba el nombre del array que quiere utilizar: ");
alert( generateUsername(objeto1) );