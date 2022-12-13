arrayProvincias = [
    {
        Provincia: "Almería",
        comunidad: "Andalucía",
    },
    {
        Provincia: "Sevilla",
        comunidad: "Andalucía",
    },
    {
        Provincia: "Málaga",
        comunidad: "Andalucía",
    },
    {
        Provincia: "Santa Cruz de Tenerife",
        comunidad: "Canarias",
    },
    {
        Provincia: "Las Palmas",
        comunidad: "Canarias",
    },
    {
        Provincia: "León",
        comunidad: "Castilla y León",
    },
    {
        Provincia: "Salamanca",
        comunidad: "Castilla y León",
    },
    {
        Provincia: "Valladolid",
        comunidad: "Castilla y León",
    },
    {
        Provincia: "Cáceres",
        comunidad: "Extremadura",
    },
    {
        Provincia: "Badajoz",
        comunidad: "Extremadura",
    },
    {
        Provincia: "Madrid",
        comunidad: "Comunidad de Madrid",
    }
];
arrayMunicipios = [
    {
        Municipio: "Almería",
        Provincia: "Almería",
    },
    {
        Municipio: "El Ejido",
        Provincia: "Almería",
    },
    {
        Municipio: "Fondón",
        Provincia: "Almería",
    },
    //----------------------------
    {
        Municipio: "Mairena del Aljarafe",
        Provincia: "Sevilla",
    },
    {
        Municipio: "Sevilla",
        Provincia: "Sevilla",
    },
    {
        Municipio: "Dos Hermanas",
        Provincia: "Sevilla",
    },
    //----------------------------
    {
        Municipio: "Carratraca",
        Provincia: "Málaga",
    },
    {
        Municipio: "Cuevas de San Marcos",
        Provincia: "Málaga",
    },
    {
        Municipio: "Villanueva de Algaidas",
        Provincia: "Málaga",
    },
    //----------------------------
    //----------------------------
    {
        Municipio: "Buenavista del Norte",
        Provincia: "Santa Cruz de Tenerife",
    },
    {
        Municipio: "El Tanque",
        Provincia: "Santa Cruz de Tenerife",
    },
    {
        Municipio: "El Rosario",
        Provincia: "Santa Cruz de Tenerife",
    },
    //----------------------------
    {
        Municipio: "San Andrés y Sauces",
        Provincia: "las Palmas",
    },
    {
        Municipio: "Santa Cruz de la Palma",
        Provincia: "las Palmas",
    },
    {
        Municipio: "Tijarafe",
        Provincia: "las Palmas",
    },
    //----------------------------
    //----------------------------
    {
        Municipio: "Berlanga del Bierzo",
        Provincia: "León",
    },
    {
        Municipio: "Castrotierra de Valmadrigal",
        Provincia: "León",
    },
    {
        Municipio: "Gordoncillo",
        Provincia: "León",
    },
    //----------------------------
    {
        Municipio: "La Alberca",
        Provincia: "Salamanca",
    },
    {
        Municipio: "Aldeavieja de Tormes",
        Provincia: "Salamanca",
    },
    {
        Municipio: "Bañobárez",
        Provincia: "Salamanca",
    },
    //----------------------------
    {
        Municipio: "Adalia",
        Provincia: "Valladolid",
    },
    {
        Municipio: "Benafarces",
        Provincia: "Valladolid",
    },
    {
        Municipio: "Cabezón de Pisuerga",
        Provincia: "Valladolid",
    },
    //----------------------------
    //----------------------------
    {
        Municipio: "Aldehuela de Jerte",
        Provincia: "Cáceres",
    },
    {
        Municipio: "Cañaveral",
        Provincia: "Cáceres",
    },
    {
        Municipio: "Casas de Millán",
        Provincia: "Cáceres",
    },
    //----------------------------
    {
        Municipio: "Ahillones",
        Provincia: "Badajoz",
    },
    {
        Municipio: "Benquerencia de la Serena",
        Provincia: "Badajoz",
    },
    {
        Municipio: "La Garrovilla",
        Provincia: "Badajoz",
    },
    //----------------------------
    //----------------------------
    {
        Municipio: "Aldea del Fresno",
        Provincia: "Madrid",
    },
    {
        Municipio: "Arroyomolinos",
        Provincia: "Madrid",
    },
    {
        Municipio: "Campo Real",
        Provincia: "Madrid",
    },
    //----------------------------
];

let selectComunidades = document.getElementById("comunidades");
selectComunidades.addEventListener("click",desplegarProvincias);
let selectProvincias = document.getElementById("provincias");
selectProvincias.addEventListener("click",desplegarLocalidades);
let selectLocalidades = document.getElementById("localidades");

function desplegarProvincias(){
    selectProvincias.innerHTML = "";
    selectLocalidades.innerHTML = "";
    arrayProvincias.forEach(element => {
        if(element.comunidad == selectComunidades.value){
            let provincia = new Option(element.Provincia, element.Provincia);
            selectProvincias.append(provincia);
        }
    });
}

function desplegarLocalidades(){
    selectLocalidades.innerHTML = "";
    arrayMunicipios.forEach(element => {
        if(element.Provincia == selectProvincias.value){
            let localidad = new Option(element.Municipio, element.Municipio);
            selectLocalidades.append(localidad);
        }
    });
}