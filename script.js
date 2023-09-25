document.addEventListener("DOMContentLoaded", function() {
    let conceptos = document.querySelectorAll(".Concepto");
    let Descripcion = document.getElementById("Descripcion");
    let imgFoco = document.querySelectorAll(".foquito");
    let limpiar = document.getElementById("escoba");
    let menuimg = document.getElementById("menuimg");
    let menu = document.getElementById("menu");
    let temas = document.querySelectorAll("h2");
    let lista = null;
    
    document.body.onclick = function () {
        if(Descripcion.style.display === 'flex'){
            Descripcion.style.display = 'none';
            limpiar.style.display = 'none';
        }
        if(menu.style.display !== 'none'){
            menu.style.display = 'none';
        };
    };

    limpiar.onclick = function() {
        console.clear();
        limpiar.style.display = 'none';
    };

    menuimg.onclick = function() {
        if(menu.style.display !== 'flex'){
            menu.style.display = 'flex';
            Descripcion.style.display = 'none';
            limpiar.style.display = 'none';
        } else {
            menu.style.display = 'none';
        }
        menu.style.width = 'auto';
        menu.style.maxWidth = '40%';
        menu.style.maxHeight = '50%';
        menu.style.overflowY = 'auto';
        menu.style.padding = '5px';
        lista = document.createElement("ul");
        lista.style.listStyleType = "none";  if (menu.querySelector("ul") == null) {
            temas.forEach(function (tema) {
                let contenidotema = tema.textContent;
                let elementoLista = document.createElement("li");
                let enlace = document.createElement("a");
                enlace.textContent = contenidotema;
                enlace.href = "#" + tema.id;
                enlace.addEventListener("click", function(event) {
                    smoothScroll(event, tema.id);
                });
                elementoLista.style.padding = "5px";
                elementoLista.appendChild(enlace);
                lista.style.padding = "0px";
                lista.appendChild(elementoLista);
                });
                menu.appendChild(lista);
                console.log(lista);
            }
            event.stopPropagation();
    };

    function smoothScroll(event, targetId) {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    imgFoco.forEach(function(elemento) {
        elemento.addEventListener("mouseover", function() {
            elemento.setAttribute("src", "img/wb_incandescent_FILL0_wght400_GRAD0_opsz24.svg");
            Descripcion.style.display = "none";
        });
        elemento.addEventListener("mouseout", function() {
            elemento.setAttribute("src", "img/lightbulb_FILL0_wght400_GRAD0_opsz24.svg");
        });
    });//funcion para cambiar la imagen del foquito
        //Funcion para quitar las descripciones cuando se esta viendo una aclaracion

    conceptos.forEach(function(concepto) {
        concepto.onclick = function() {
            if(menu.style.display !== 'none'){
                menu.style.display = 'none';
            }
            Descripcion.style.display = 'flex';
            Descripcion.style.position = 'fixed';
            Descripcion.style.width = 'auto';
            Descripcion.style.maxWidth = '80%';
            Descripcion.style.left = '50%';
            Descripcion.style.transform = 'translateX(-50%)';
            Descripcion.style.height = 'auto';
            Descripcion.style.maxHeight = '50%';
            Descripcion.style.overflowY = 'auto';
            Descripcion.style.top = '30%';
            Descripcion.style.padding = '5px';
            if (concepto.id === "Concepto1") {
                Descripcion.innerHTML = 'Una Variable del tipo Number, es una variable que'+ 
                                        ' acepta datos del tipo numérico, como por ejemplo' + 
                                        '1 2 25 589 796.5 etc.';
            } else if (concepto.id === "Concepto2") {
                Descripcion.innerHTML = 'Una Variable del tipo String, es una variable que'+ 
                                        ' acepta datos del tipo Caracteres de texto, como por ejemplo' + 
                                        'a Hola asdwd 58997 (tomado como texto).';
            } else if (concepto.id === "Concepto3") {
                Descripcion.innerHTML = 'Una Variable del tipo Bool, es una variable que'+ 
                                        ' acepta datos del tipo Booleano, como por ejemplo' + 
                                        'true o false.';
            } else if (concepto.id === "Concepto4") {
                Descripcion.innerHTML = 'Declarar una variable con Var, determina el Scope de esta variable'+ 
                                        ', por lo que su alcance es Global, si esta es declarada fuera de una ' + 
                                        'funcion. Sino, es limitada por la funcion en si.' + 
                                        'Ademas, pueden ser redeclaradas y reasignadas, dentro del mismo ambito.' + 
                                        'Estas son las unicas variables con comportamiento Hoisting.';
            } else if (concepto.id === "Concepto5") {
                Descripcion.innerHTML = 'Declarar una variable con let, limita el Scope a un Bloque (if, for, while, etc.)'+ 
                                        ' lo que hace que solo se puedan acceder a estas, dentro del bloque en si.' + 
                                        'Ademas, no se realiza el Hoisting de la misma. Por otro lado, No se pueden redeclarar, pero si se puede reasignar dicha variable.';
            } else if (concepto.id === "Concepto6") {
                Descripcion.innerHTML = 'Declarar una variable con Const, hace que esta no se pueda redeclarar ni reasignar,'+ 
                                        ' ni dentro, ni fuera del ambito de la misma. A diferencia de las otras 2 formas, este tipos de ' + 
                                        'variables, deben de asignarseles un valor al declararlas, y su ambito, es en bloque. Cualquier intento de reasignacion, envia un error por consola.';
            } else if (concepto.id === "Concepto7") {
                Descripcion.innerHTML = 'Cuando una variable no esta inicializada, pero si declarada,'+ 
                                        ' y se quiere acceder a ella, se envia el mensaje Undefined, lo que significa que ' + 
                                        'la variable existe, pero no tienen ningun valor.';
            } else if (concepto.id === "Concepto8") {
                Descripcion.innerHTML = 'El valor Null, es un valor especial que se le asigna intencionalmente a una variable, '+ 
                                        'para decir que esta esta vacia, y que mas adelante, se le asignara otro valor' + 
                                        '. Es distinto de Undifined.';
            } else if (concepto.id === "Concepto9") {
                Descripcion.innerHTML = 'NaN significa "Not a Number" y es el resultado que se devuelve por consola, al igual que undefined,'+ 
                                        ' cuando se intenta utilizar una variable de algun tipo, como si fuera un numero, pero siendo que esta no lo es. Como por ejemplo, al dividir un texto por 2.';
            } else if (concepto.id === "Concepto10") {
                Descripcion.innerHTML = 'Representa números, ya sean enteros o de punto flotante.';
            } else if (concepto.id === "Concepto11") {
                Descripcion.innerHTML = 'NaN significa "Representa cadenas de texto.';
            } else if (concepto.id === "Concepto12") {
                Descripcion.innerHTML = 'Representa valores true o false. Ceros o Unos';
            } else if (concepto.id === "Concepto13") {
                Descripcion.innerHTML = 'Representa un valor no definido.';
            } else if (concepto.id === "Concepto14") {
                Descripcion.innerHTML = 'Representa un valor nulo o ausente.';
            } else if (concepto.id === "Concepto15") {
                Descripcion.innerHTML = 'Representa un valor único e inmutable que se puede utilizar como clave en objetos.';
            } else if (concepto.id === "Concepto16") {
                Descripcion.innerHTML = 'Representa números enteros más grandes de lo que puede manejar el tipo number, sin perder precision. El maximo para number es 9007199254740991, y para Bigint es 1234567890123456789012345678901234567890n';
            } else if (concepto.id === "Concepto17") {
                Descripcion.innerHTML = 'alert() es una función que muestra una ventana emergente de alerta en el navegador, con un mensaje y un botón "Aceptar" para cerrarlo.';
            } else if (concepto.id === "Concepto18") {
                Descripcion.innerHTML = 'prompt() es una función que muestra una ventana emergente en el navegador con un mensaje, un campo de entrada de texto y dos botones: "Aceptar" y "Cancelar". Se utiliza para solicitarle al usuario que ingrese datos o información. El usuario puede escribir texto en el campo de entrada y luego hacer clic en "Aceptar" o "Cancelar". Prompt() devuelve el valor ingresado por el usuario como una cadena de texto si se hace clic en "Aceptar", o null si se hace clic en "Cancelar".';
            } else if (concepto.id === "Concepto19") {
                Descripcion.style.display = 'none';
                alert("Este es un ejemplo de un Alert");
            } else if (concepto.id === "Concepto20") {
                Descripcion.style.display = 'none';
                let mensaje = prompt("Escribe un mensaje");
                if(mensaje != null){
                    alert("Este es el mensaje que guardaste en una variable: '" + mensaje + "'");
                } else {
                    alert("Este alert te muestra '" + mensaje + "' por que le diste a 'Cancelar' en el Prompt");
                }
            } else if (concepto.id === "Concepto21") {
                console.clear();
                Descripcion.innerHTML  = 'Asi se declara una variable de tipo Number <br>'+
                                    'var numero1 = 25; <br>' +
                                    'let numero2 = 30; <br>' +
                                    'const numero3 = 50; <br>'+
                                    '*inspecciona la consola del navegador para ver como se opera en cada caso. <br>' + 
                                    '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                var numero1 = 25;
                let numero2 = 30;
                const numero3 = 50;
                console.log("var numero1= " + numero1);
                numero1 = 10;
                console.log("ReAsigno la variable");
                console.log("numero1= " + numero1);
                console.log("Como puedes ver, el valor de la variable de tipo var, puede ser modificado");
                console.log("let numero2= " + numero2);
                numero2 = 40;
                console.log("ReAsigno la variable");
                console.log("numero2= " + numero2);
                console.log("En el caso de let, tambien se puede modificar");
                console.log("numero3= " + numero3);
                console.log("En el caso de const, al querer modificar el valor de la variable, esto enviaria un error por consola");
                console.log("*Lo normal, es que se utilice la declaracion con let, ya que conlleva menos errores de Hoisting, y delimita el Scope a Local.");
                limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto22") {
                console.clear();
                Descripcion.innerHTML = 'Asi se declara una variable de tipo String <br>' + 
                                        'let Nombre = "Horacio" <br><br>' +
                                        '*inspecciona la consola del navegador para ver como se opera en cada caso <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                let Nombre = "Horacio";
                console.log("Esta es la cadena de caracteres que declaraste: '" + Nombre + "'");
                console.log("No olvides que cualquier String, debe ser escrito entre Comillas, incluso si este es un número tomado como string. Las comillas son estas ' ' , \" \" , \` \` ");
                limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto23") {
                console.clear();
                Descripcion.innerHTML  = 'Asi se declara una variable de tipo Bool <br>'+
                                    'let Verdadero = true; //o false <br><br>' +
                                    '*inspecciona la consola del navegador para ver como se opera en cada caso <br>' + 
                                    '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                let Verdadero = true;
                console.log("Verdadero= " + Verdadero);
                console.log("Este es el valor de la variable que declaraste.");
                limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto24") {
                Descripcion.innerHTML = 'X = Y <br>' + 
                                        'Significa que a la variable X, se le asigna un nuevo valor. En este caso, el valor que posea la variable Y';
            } else if (concepto.id === "Concepto25") {
                Descripcion.innerHTML = 'X += Y <br>' + 
                                        'Significa que al valor que ya tenia X previamente, se le suma un valor especifico, y al resultado, se lo vuelve a guardar en la variable X. En este caso, el valor que contiene la variable Y';
            } else if (concepto.id === "Concepto26") {
                Descripcion.innerHTML = 'X -= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, se le resta un valor especifico, y al resultado, se lo vuelve a guardar en la variable X.';
            } else if (concepto.id === "Concepto27") {
                Descripcion.innerHTML = 'X *= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, se lo multiplica por un valor especifico, y al resultado, se lo vuelve a guardar en la variable X.';
            } else if (concepto.id === "Concepto28") {
                Descripcion.innerHTML = 'X /= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, se lo divide por un valor especifico y distinto de Cero, y al resultado, se lo vuelve a guardar en la variable X.';
            } else if (concepto.id === "Concepto29") {
                Descripcion.innerHTML = 'X %= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, se lo divide por un valor especifico y distinto de Cero, y al "resto" de la division, se lo vuelve a guardar en la variable X.';
            } else if (concepto.id === "Concepto30") {
                Descripcion.innerHTML = 'X **= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, se lo eleva a una cierta potencia definida por un valor especifico (Y), y al resultado, se lo vuelve a guardar en la variable X.';
            } else if (concepto.id === "Concepto31") {
                Descripcion.innerHTML = 'X <<= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, convertido en binario, se lo corre una cierta cantidad de lugares hacia la izquierda. Dicha cantidad de lugares, esta definida por un valor especifico (Y), y al resultado, se lo convierte nuevamente a su forma Decimal, y se lo vuelve a guardar en la variable X.';
            } else if (concepto.id === "Concepto32") {
                Descripcion.innerHTML = 'X >>= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, convertido en binario, se lo corre una cierta cantidad de lugares hacia la derecha. Dicha cantidad de lugares, esta definida por un valor especifico (Y), y al resultado, se lo convierte nuevamente a su forma Decimal, y se lo vuelve a guardar en la variable X. Hay que tener en cuenta el Desbordamiento fuera de los limites de bits disponibles.';
            } else if (concepto.id === "Concepto33") {
                Descripcion.innerHTML = 'X >>>= Y <br>' + 
                'Significa que al valor que ya tenia X previamente, convertido en binario, se lo corre una cierta cantidad de lugares hacia la derecha, y agrega esa misma cantidad de lugares, como Ceros, del lado izquierdo. La cantidad de lugares a correr y a rellenar, esta definida por un valor especifico (Y), y al resultado, se lo convierte nuevamente a su forma Decimal, y se lo vuelve a guardar en la variable X.';
            } else if (concepto.id === "Concepto34") {
                Descripcion.innerHTML = 'X &= Y <br>' + 
                'Significa que realiza una operacion bit a bit, entre los valores binarios de 2 numeros, haciendo la comparacion de cada bit del binario. Si al menos uno de los valores a comparar, es 0, el resultado de la comparacion es 0, sino, es 1. Una vez comparados cada bit de ambos numeros, se lo combierte a decimal y se lo asigna a la variable X';
            } else if (concepto.id === "Concepto35") {
                Descripcion.innerHTML = 'X ^= Y <br>' + 
                'Significa que realiza una operacion bit a bit, entre los valores binarios de 2 numeros, haciendo la comparacion de cada bit del binario. Si uno de los valores a comparar, es 1 y el otro 0, el resultado de la comparacion es 1, sino, es 0. Una vez comparados cada bit de ambos numeros, se lo combierte a decimal y se lo asigna a la variable X';
            } else if (concepto.id === "Concepto36") {
                Descripcion.innerHTML = 'X |= Y <br>' + 
                'Significa que realiza una operacion bit a bit, entre los valores binarios de 2 numeros, haciendo la comparacion de cada bit del binario. Si al menos uno de los valores a comparar, es 1, el resultado de la comparacion es 1, sino, es 0. Una vez comparados cada bit de ambos numeros, se lo combierte a decimal y se lo asigna a la variable X';
            } else if (concepto.id === "Concepto37") {
                console.clear();
                Descripcion.innerHTML = 'let X = 2; <br> let Y = 5; <br> let Resultado; <br>' +
                                        'Resultado = X + Y <br>' +
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 2+5);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto38") {
                console.clear();
                Descripcion.innerHTML = 'let X = 10; <br> let Y = 5; <br> let Resultado; <br>' +
                                        'Resultado = X - Y; <br>' +
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 5);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto39") {
                console.clear();
                Descripcion.innerHTML = 'let X = 2; <br> let Y = 5; <br> let Resultado; <br>' +
                                        'Resultado = X * Y <br>' +
                                        '*Revisa la consola <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 2*5);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto40") {
                console.clear();
                Descripcion.innerHTML = 'let X = 20; <br> let Y = 5; <br> let Resultado; <br>' +
                                        'Resultado = X / Y <br>' +
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 20/5);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto41") {
                console.clear();
                Descripcion.innerHTML = 'let X = 20; <br> let Y = 3; <br> let Resultado; <br>' +
                                        'Resultado = X ** Y <br>' +
                                        '*Revisa la consola, <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 20**3);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto42") {
                console.clear();
                Descripcion.innerHTML = 'let X = 5; <br>' +
                                        'X++; <br>' +
                                        '*A lo que tiene X guardado, le suma 1 <br>';
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 6);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto43") {
                console.clear();
                Descripcion.innerHTML = 'let X = 5; <br>' +
                                        'X--; <br>' +
                                        '*A lo que tiene X guardado, le resta 1 <br>';
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 4);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto44") {
                console.clear();
                Descripcion.innerHTML = 'let X = 10; <br> let Y = 3; <br> let Resultado; <br>' +
                                        'Resultado= X % Y; <br>' + 
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 10%3);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto45") {
                console.clear();
                Descripcion.innerHTML = 'let X = -15; <br> let Resultado; <br>' +
                                        'Resultado= -X; <br>' + 
                                        '*Es como multiplicar por -1 a lo que tiene X, y lo aguarda en Resultado.'; + 
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 15);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto46") {
                console.clear();
                Descripcion.innerHTML = 'let X = "55"; <br> let Resultado; <br>' +
                                        'Resultado= +X; <br>' + 
                                        '*Convierte al numero escrito como String, en Number, y lo asigna a Resultado'; + 
                                        '*Revisa la consola.' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        console.log("El resultado es: " + 55);
                                        limpiar.style.display = 'flex';
            }
            else if (concepto.id === "Concepto47") {
                Descripcion.innerHTML = 'El método "document.Write()", lo que hace es escribir algo, dentro del documento, pero hay que tener en cuenta, que todo el contenido ya cargado en la pagina previamente, se reemplazara por lo que pones como argumento en el método.';
            } else if (concepto.id === "Concepto48") {
                console.clear();
                Descripcion.innerHTML = 'let palabra1 = "Hola "; <br>' + 
                                        'let palabra2 = "Horacio"; <br>' + 
                                        'console.log("palabra1 + palabra2"); <br>' + 
                                        '*Revisa la consola.' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        let palabra1 = "Hola ";
                                        let palabra2 = "Horacio";
                                        console.log(palabra1 + palabra2);
                                        limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto49") {
                console.clear();
                Descripcion.innerHTML = 'let palabra1 = "Hola"; <br>' + 
                                        'let numero1 = 22; <br>' + 
                                        'let bool1 = true; <br>' + 
                                        'console.log("palabra1 + numero1 + bool1"); <br>' + 
                                        '*Revisa la consola.' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        let palabra1 = "Hola";
                                        let numero1 = 22;
                                        let bool1 = true;
                                        console.log(palabra1 + numero1 + bool1);
                                        limpiar.style.display = 'flex';
                                        console.log("Como puedes ver, los numeros no se sumaron, sino que al haber una suma de Strings, Bools y Numbers, todo se convierte a string");
            } else if (concepto.id === "Concepto50") {
                console.clear();
                Descripcion.innerHTML = 'let palabra1 = "Hola"; <br>' + 
                                        'let numero1 = 22; <br>' + 
                                        'let result = palabra1.concat(numero1); <br>' + 
                                        'console.log(result); <br>' + 
                                        '*Revisa la consola.' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
                                        let palabra1 = "Hola";
                                        let numero1 = 22;
                                        let result = palabra1.concat(numero1);
                                        console.log(result);
                                        limpiar.style.display = 'flex';
                                        console.log("El método concat(), lo que hace es concatenar al menos 1 string, con otro dato, que puede ser number, string o bool, ya que los convierte a string. Es un método de cadena");
            } else if (concepto.id === "Concepto51") {
                console.clear();
                Descripcion.innerHTML = 'La siguiente forma de concatenación es la forma mas recomendada para evitar errores <br>' + 
                                        '*Revisa la consola. <br>' + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en Windows)';
                let palabra1 = "Horacio";
                let palabra2 = `Hola soy ${palabra1}`;
                console.log("let palabra1 = 'Horacio';");
                console.log("let palabra2 = `Hola soy ${palabra1}`;");
                console.log(palabra2);
                console.log("Esta es una concatenación con backticks, y tiene la particularidad de que reconoce código HTML y lo aplica, en caso de que el string esté en el cuerpo del HTML.");
                limpiar.style.display = 'flex';
            } else if (concepto.id === "Concepto52") {
                        Descripcion.innerHTML = 'a == b';
            } else if (concepto.id === "Concepto53") {
                        Descripcion.innerHTML = 'a != b';
            } else if (concepto.id === "Concepto54") {
                        Descripcion.innerHTML = 'a === b';
            } else if (concepto.id === "Concepto55") {
                        Descripcion.innerHTML = 'a !== b';
            } else if (concepto.id === "Concepto56") {
                        Descripcion.innerHTML = 'a > b';
            } else if (concepto.id === "Concepto57") {
                        Descripcion.innerHTML = 'a >= b';
            } else if (concepto.id === "Concepto58") {
                        Descripcion.innerHTML = 'a < b';
            } else if (concepto.id === "Concepto59") {
                        Descripcion.innerHTML = 'a <= b';
            }
            event.stopPropagation(); // Detener la propagación del evento Onclick
        };
    });
});




/*
 else if (concepto.id === "Concepto") {
                Descripcion.innerHTML = '';
            }
*/

/*
 + 
                                        '**Presiona Ctrl + Shift + j para abrir la consola (en windows)';
*/

