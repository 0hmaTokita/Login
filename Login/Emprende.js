var nombre,correo, asunto, texto;


function funEnviar(){

    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    asunto = document.getElementById("asunto").value;
    texto = document.getElementById("tex").value;

    if (nombre == "" || correo == "" || asunto == "" || texto == "") {
        alert("Falta rellenar un espacio!");
    } else {
        alert("Formulario enviado correctamente");
    }

    console.log("nombre: "+ nombre+"\ncorreo: "+correo+"\nasunto: "+asunto+"\ntexto: "+texto);
}