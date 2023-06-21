
/*-------Digimon estático--------*/

const digimon = async (name) => {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
    const data = await response.json();

    let contenido = ``;
    data.forEach((data, index) => {
        contenido += `<div>
        <img src="${data.img}" width="120" height=120"> </img>
        <li><h4>${data.name}</4></li>
        <li><h6>Nivel:${data.level}</h6></li>
        </div>`

    });
    document.getElementById("contenido").innerHTML = contenido
}

digimon("Bucchiemon");


/*-------Buscador de Digimon--------*/



var contenido = document.querySelector("#lista");
fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos)
    });


function tabla(datos) {
    contenido.innerHTML = ""
    for (let temp of datos) {
        contenido.innerHTML += `
<tr>
<td>${temp.name}</td>
<td>${temp.level}</td>
<td><img src="${temp.img}" width="50" height=50"> </img></td>
</tr>  `

    }
}


document.getElementById("buscar").addEventListener("click", function (event) {
    event.preventDefault()
    let nameDigimon = document.getElementById("buscarDigimon").value
    digimon(nameDigimon)
})





