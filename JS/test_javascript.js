//alerta
function alerta(){
    window.alert('Para una correcta visualización te recomendamos usar una computadora.')
}
alerta();

//Preguntas
function resultado() {
    
if (document.getElementById('p11').checked==true) {
    p1=1
} else {
    p1=0
}
if (document.getElementById('p21').checked==true) {
    p2=1
} else {
    p2=0
} 
if (document.getElementById('p33').checked==true) {
    p3=1
} else {
    p3=0
} 
if (document.getElementById('p44').checked==true) {
    p4=1
} else {
    p4=0
}
if (document.getElementById('p54').checked==true) {
    p5=1
} else {
    p5=0
}
if (document.getElementById('p62').checked==true) {
    p6=1
} else {
    p6=0
}
if (document.getElementById('p71').checked==true) {
    p7=1
} else {
    p7=0
}
if (document.getElementById('p82').checked==true) {
    p8=1
} else {
    p8=0
}
if (document.getElementById('p93').checked==true) {
    p9=1
} else {
    p9=0
}

//Resultado
nota=p1+p2+p3+p4+p5+p6+p7+p8+p9;

//Clasificación resultado
const rate_calification = nota;

var resultado_html = ""; 

if (rate_calification > 0 && rate_calification <= 3){
    resultado_html += '<h2>' + " ¿Prestaste atención? " + '</h2>';
    resultado_html += '<p>' + "Es necesario que repases conceptos. Puede que sea necesario comenzar de nuevo desde los géneros discursivos." + '</p>';
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 9" +'</h3>';
} else if (rate_calification > 3 && rate_calification <= 6) {
    resultado_html += '<h2>' + " Prueba terminada " + '</h2>';
    resultado_html += '<p>' + "Tienes algunos conocimientos pero hay que trabajar un poco más. Entonces puede que estés listo para escribir tu ponencia." + '</p>';
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 9" +'</h3>';
} else if (rate_calification > 6 && rate_calification <= 8) {
    resultado_html += '<h2>' + " ¡Súper! " + '</h2>';
    resultado_html += '<p>' + "Vale, tuviste algunos errores pero no está mal. No olvides leer los textos que tenemos para ti." + '</p>'; 
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 9" +'</h3>';  
} else if (rate_calification == 9) {
    resultado_html += '<h2>' + " ¡Felicidades! " + '</h2>';
    resultado_html += '<p>' + "Completaste el test sin fallas. ¡Eres un pedagogo re educativo!" + '</p>'; 
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 9" +'</h3>';  
} else {
    resultado_html += '<h4>' + "¡No has respondido nada aún!" + '</h4>';
    resultado_html += '<p>' + "Recarga la página e intentalo de nuevo." + '</p>'; 
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 9" +'</h3>'; 
}
$("#resultado").html(resultado_html);
return nota;
}

//mostrar cursos según validación de resultado
function mostrar(){
    document.getElementById("mostrar").style.display="";
    var nota = resultado();
}

function ejecutarFunciones(){
    resultado();
    mostrar();
    deshabilitar();
    if(nota <= 9 && nota >= 0 ){
        document.getElementById("mostrar").style.display="";
    } else {
        document.getElementById("mostrar").style.display="none";
     
    }
}
//Intentos
numeroDeIntentos = 0;

function deshabilitar(){
    
    numeroDeIntentos += 1;

    if(numeroDeIntentos === 1){
         $('.habilitar').attr('disabled', 'disabled');
        resultado();
    }   
}


