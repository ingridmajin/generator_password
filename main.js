let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
let contrasena = document.getElementById('contrasena');

function generar(){
    let numeroDIgitado = parseInt (cantidad.value);

    if(numeroDIgitado < 6){
        alert("La cantidad de caracteres debe ser mayor que 6");
    }
    let password = '';
    for(let i = 0; i < numeroDIgitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]; 
        console.log(caracterAleatorio);
        password += caracterAleatorio; 
    }
    contrasena.value = password;

}










