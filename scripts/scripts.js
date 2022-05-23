//Mostrar bara de navegação lateral

$('#btn-mobile').click(function(){
    $('#menu').toggleClass('mostrar')
    $('#btn-mobile').toggleClass('transformar')
})

// Efeito maquina de escrever

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}

const titulo = document.querySelector('.job');


typeWrite(titulo);
