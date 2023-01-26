
const persona = [
    {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Javier",
                "last": "Velasco"
            },
            "location": {
                "street": {
                    "number": 7602,
                    "name": "Calle de Alberto Aguilera"
                },
                "city": "Cartagena",
                "state": "Ceuta",
                "country": "Spain",
                "postcode": 59571,
                "coordinates": {
                    "latitude": "-37.1471",
                    "longitude": "16.2033"
                },
                "timezone": {
                    "offset": "-11:00",
                    "description": "Midway Island, Samoa"
                }
            },
            "email": "javier.velasco@example.com",
            "login": {
                "uuid": "f0c42685-6430-4973-b714-cf1b2a852f0d",
                "username": "heavybutterfly330",
                "password": "chewie",
                "salt": "wzqnaLCp",
                "md5": "ce43a5453236e34e14b8a71038084768",
                "sha1": "81c509cbfa659d973a156a39c3b29630f142d8c6",
                "sha256": "7f60405b10e11f34b0dceb69ab429970aa0ffde5cae7cdbbf1ab1685daded5a8"
            },
            "dob": {
                "date": "1987-08-22",
                "age": 35
            },
            "registered": {
                "date": "2021-02-24T03:00:07.086Z",
                "age": 1
            },
            "phone": "961-653-190",
            "cell": "683-841-700",
            "id": {
                "name": "DNI",
                "value": "39292001-S"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/12.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/12.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg"
            },
            "nat": "ES"
        }
    ],
    "info": {
        "seed": "e75888c06846be19",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}];

document.getElementById("titulo").innerHTML = "CV "+persona[0].results[0].name.first+" "+persona[0].results[0].name.last;
document.getElementById("heading").innerHTML = persona[0].results[0].name.first+" "+persona[0].results[0].name.last;
document.getElementById("email").innerHTML = "E-mail: "+persona[0].results[0].email;
document.getElementById("cell").innerHTML = "Teléfono: "+persona[0].results[0].cell;
document.getElementById("date").innerHTML = "Fecha de nacimiento: "+persona[0].results[0].dob.date;
document.getElementById("age").innerHTML = "Edad: "+persona[0].results[0].dob.age;
document.getElementById("adress").innerHTML = "Dirección: "+persona[0].results[0].location.street.name +" " +persona[0].results[0].location.street.number;
document.getElementById("city").innerHTML = "Ciudad: "+persona[0].results[0].location.city +", " +persona[0].results[0].location.state +", " +persona[0].results[0].location.country;
document.getElementById("id").innerHTML = "ID: "+persona[0].results[0].id.name +" " +persona[0].results[0].id.value;

document.getElementById('boton_infopersonal').addEventListener('click', function(){
    console.log("Capturamos el evento click en el boton ver info personal");
    document.getElementById('infopersonal_ver_ocultar').style.display= 'block';
    document.getElementById('boton_infopersonal').style.display= 'none';
});
