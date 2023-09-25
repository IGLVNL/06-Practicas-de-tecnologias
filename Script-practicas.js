
/*//Algunos conceptos basicos
let nombre = prompt("Dame tu nombre");
alert("Hola " + nombre);
document.write(nombre); 
        //Esta funcion, permite escribir en el html, justo donde esta el tag Script
        //tambien detecta etiquetas html  
let str1 = "hola";
let str2 = " hola";
let num = prompt("Introduce un numero");//El prompt, guarda datos introducidos por teclado, en forma de string
result = parseInt(num); //Esta funcion, transforma un string a un entero
result = parseFloat(num); //Esta funcion, transforma un string a un Float
result += 0.5; 
    //Esta funcion añade 0.5 al valor que tenia la variable result y guarda el resultado en la misma variable
alert(result);
result = str1 + str2; //Esta es la forma tradicional de concatenar
alert(result);
result =  str1.concat(str2); //El metodo concat, concatena 2 cadenas de textos
alert(result)
result = `${str1} ${str2} esto es
                                una concatenacion`;
        // Esta es una concatenacion con "backticks" que son las comillas
        // inclinadas. Esta opcion, permite dar saltos de lineas.
        // Ademas, permite escribir y ejecutar codigo HTML
        // Para concatenar una variable, se usa la expresion ${variable}
alert(result);

        // En el caso de querere escribir Strings, se pueden usar tanto las comillas 
        // simples '' como las dobles "" o los Backsticks ``. Pero en caso de querer 
        // escribir comillas para resaltar alguna palabra o frase, se tiene que elegir alguna de 
        // aquellas que no estan encerrando a la frase, ya que si se utiliza la misma comilla, 
        // la frase se interrumpe. Para evitar esto se hace lo que se llama escape de backsticks,
        // que es lo que se explico antes
result = "Esto es un 'Escape' de BackSticks";
alert(result);
result = "Esto no es un "Escape" de backsticks":
*/

/*//Arrays
let array = ["15","20"];
alert(array[0]);
let Asociativo = {
        nombre: "PC1",
        procesador: "ryzen",
        ram: "16gb"
        };  
        //Esto es un array asociativo. Se le puede pedir por un tipo de dato en particular
let nom = Asociativo["nombre"];
document.write(nom);
alert(nom);
*/

/* //Ciclo While
let numero = 5;
while (numero < 10){
        alert(numero);
        numero++
};*/

/* //Ciclo Do while
        do {
        alert(numero);
        numero--
        if(numero==2){
                break;  
                //este comando, termina con el ciclo que se esta ejecutando
        };
        } while (numero>0); 
*/

/* //Ciclo For
        for (let i = 0; i < 10; i++){
        numero ++;
        if(numero==13){
            continue;   //este comando, genera un break antes de que se cumpla lacondicion
                        //y reanuda el ciclo, luego del valor del parametro dado
                        //En este caso, se saltea el 13
                        //Sirve para saltear una iteracion
        };
        document.write(numero + "<br>");
        }; 
            //El ciclo for, es un ciclo determinado (es definida la cantidad de vueltas )
            //a difrencia del while y el do while, que son indeterminados, o sea, solo 
            //dependen de la condicion
            //Los 3 elementos que se definen en el for son, el parametro i, que sirve para
            //definir el inicio del conteo, la condicion, y el incremento o iteracion.
            //i se puede declarar e inicializar fuera del for
            //tambien se puede aplicar el Break
*/

/* //Ciclo for in
        let arrayAnimales = ["perro", "gato", "loro", "morza"];
        for( let variableAnimal in arrayAnimales){
                document.write(variableAnimal + "<br>");
        };
                //esto es un bucle For in. Funciona asignando a una variable, la posicion
                //de un objeto de un array. y ejecutando una accion, a medida que se recorre el array
        */

        /* //Ciclo for of
        for(let variableAnimal of arrayAnimales){ //variableAnimal, es una variable arbitraria
                document.write(variableAnimal + "<br>");
        };
            // esto es un bucle For of. Funciona asignando a una variable, el valor asignado 
            // a la posicion de un objeto de un array. y ejecutando una accion, a medida que 
            // se recorre el array
*/

/* //Label
        let array1 = [22,21,8,98,16,42,23,56,47,2,62,4,19];
        let array2 = ["rojo","rojo","verde","azul","azul","amarillo","naranja","naranja","naranja","violeta","celeste","celeste"];
        let array3 = [];
        let valorArray = [];
        let index = 0;

    labelDelFor:    //asi se declara la sentencia
                    //Esto es una sentencia llamada Label. Lo que hace al llamarla
                    //en un break o en un continue, al aplicarlos, no sobre el ciclo
                    //que que contiene el Label, sino sobre el ciclo padre, o sea, el
                    //ciclo que viene despues de los dos puntos :

        for( let arrayVar of array1){
                array3[index] = arrayVar;
                if (array3[index] > 70 ){
                continue ;
                };
                document.write(array3[index] + "<br>");
                index++;
                if( index > 6){
                for(valorArray of array2){
                if(valorArray == "violeta"){
                    continue labelDelFor; //Asi se invoca la sentencia
                } 
                document.write(valorArray + "<br>");
                };
                };
        };
        */

        /*//Funciones
        function prueba(){
                alert("hola");
                return "listo"; //el return devuelve un tipo de dato, luego de ejecutar una
                                //funcion. Si no se coloca, queda como Undifined
                                //El return, termina de ejecutar la funcion llamada
        };
        */

        /*//Parametrizacion de una funcion
        let x = prompt("dame un numero");
        let y = prompt("dame otro numero");
        x = parseInt(x);
        y = parseInt(y);

    function prueba2(var1,var2){    //asi se parametriza una funcion.
                                    //cuando se ponen parametros en una funcion, se definen
                                    //dichas variables
        let suma = var1 + var2;     //Es importante poner el Let dentro de una funcion
                                    //para que la definicion de esa variable, quede
                                    //dentro de la funcion
        return suma;
        };
        let result = prueba2(x, y); //en la variable result, se guarda el dato retornado por
                                        //la funcion
        document.write(result);
*/

/*//Funcion Flecha
    prueba3 = (var1,var2)=>{    //esta es la forma de escribir la funcion Flecha
        let suma = var1 + var2;     
        return suma;
        };
        result = prueba3(x, y); 
        document.write(result);
*/

/*//Simplificacion de funciones flecha
    prueba4 =  var1 =>{    //si la funcion, tiene un solo parametro, esta se simplifica
                            // quitandole los parentesis de la variables
        
        return var1
        };
        result = prueba4(x); 
        document.write(result);
*/

/*Simplificacion 2 de funciones flecha
    prueba4 =  var1 => var1;        // si la funcion, tiene un solo parametro,y
                                    // ademas tiene una sola linea de codigo
                                    // se pueden quitar los parentesis
                                    // y la funcion se retorna automaticamente
        result = prueba4(x); 
        document.write(result);
*/

/* //POO

    class Animal {                           //La clase animal, es la que contiene las propiedades
        constructor(especie,raza,sexo,edad){ //del objeto a instanciar. Dichas propiedades, se 
            this.especie = especie;          //se definen de manera generica, como se ve en el 
            this.raza = raza;                //ejemplo. 
            this.sexo = sexo;                //This, hace referencia al objeto
            this.edad = edad;                //El constructor, "construye" las propiedades del objeto
                this.devolucion = `soy un ${especie} de raza ${raza}, soy ${sexo} y tengo ${edad}`;
            //En el caso de "devolucion", si bien es un atributo del objeto, no es un parametro
            //del mismo, por lo que no se lo puede instanciar con el.
                };
                saludar(){ document.write(this.devolucion);};
                        //Esto es un metodo. Dentro de un objeto, es una funcion caracteristica del
                        //objeto, por lo que su estructura es la de una funcion normal. Las funciones
                        //flecha, no funcionan dentro de una clase de un objeto
        };
        let animal = new Animal("perro","dogo","macho","6 años");      
                        //Esta es la forma de instanciar un objeto y guardarla
                        //en una variable, aclarando los valores que toman sus atributos
                console.log(animal.devolucion);
                        //asi se llama a una propiedad de una instancia de un objeto
        animal.saludar();
            //asi se ejecuta el metodo contenido en el objeto instanciado
    */

        /*Herencia
        class Animal {                           
                constructor(especie,raza,sexo,edad){ 
                this.especie = especie;          
                this.raza = raza;                
                this.sexo = sexo;                
                this.edad = edad;                
                this.devolucion = `soy un ${especie} de raza ${raza}, soy ${sexo} y tengo ${edad}`;
                };
                saludar(){ document.write(this.devolucion);};
        };

    class perro extends Animal {    //Esta es la forma de expresar la Herencia de una clase (Animal), a otra(perro en este caso)
        constructor(especie,raza,TamañoDeColmillo){     //Aca se escribe el constructor con los nuevos parametros
            super(especie,raza);                        //Asi se definen los atributos heredados
            this.TamañoDeColmillo = TamañoDeColmillo;   //Este es un nuevo atributo de la subclase perro 
        }
        ladrar(){alert("wow");};
        }


        let labrador = new perro("can ","labrador ","3cm ");      
                //Al momento de instanciar un objeto, este no puede tener el mismo nombre que una clase
        console.log(labrador.TamañoDeColmillo + labrador.raza + labrador.especie);
        labrador.ladrar();
    */

/*Metodos estaticos 
                
        class Animal {                           
                constructor(especie,raza,sexo,edad){ 
                this.especie = especie;          
                this.raza = raza;                
                this.sexo = sexo;                
                this.edad = edad;                
                this.devolucion = `soy un ${especie} de raza ${raza}, soy ${sexo} y tengo ${edad}`;
                };
                static saludar(){ document.write("Este es un metodo estatico");};
        };
                        //Un metodo estatico, es aquel que no necesita que se instancie un objeto, para
                        //poder ser ejecutado. Esto quiere decir, que no es necesario introducir parametros
                        //y crear el objeto, por lo que se puede ejecutar el metodo directamente
        Animal.saludar();
        */

        /*//Setters

        class Animal {                           
                constructor(especie,raza,sexo,edad){ 
                this.especie = especie;          
                this.raza = raza;                
                this.sexo = sexo;                
                this.edad = edad;                
                this.devolucion = null;
                };
                set AñadirDevolucion(Devolucion){   //Este es un metodo Setter
                this.devolucion = Devolucion;   //Lo que hace es modificar un atributo
                };                              //de un objeto ya instanciado
                get getDevolucion(){
                return this.devolucion;
                };
        };
        const perro = new Animal("canino","gran danes","macho","5");
        perro.AñadirDevolucion = "Este es el mensaje de devolucion";
        perro.getDevolucion;
            //Para setear un nuevo valor a una propiedad, se lo hace de esta manera
            //En este caso, si bien el metodo Setter, es un metodo, se lo utiliza como
            //Si fuese una propiedad, por lo que para poder modificarla, se lo hace mediante
            //una asignacion. Dicha asignacion, se guarda en el parametro definido para el metodo
        console.log(perro.devolucion);    
        sconsole.log(Animal.getDevolucion);
*/
/* Metodos de cadenas */

    // let cadena1 = "prueba";
    // let cadena = "cadena de prueba";
    // resultado = cadena.concat(" Hola");
    // document.write(resultado);
            //concat es un metodo de cadena que concatena 2 cadenas de caracteres en una sola
            //ya que las cadenas de caracteres, son objetos.
            //Cuando se coloca una cadena de caracteres en una variable String, lo que 
            //sucede es lo siguiente let cadena = new String("cadena de prueba");
            //por eso se dice que una cadena de caracteres, es un objeto.
    //console.log(cadena[3]);
            //Esta funcion, al ponerle como parametro una cadena en forma de array,
            //hace que se muestre por consola, el valor del caracter ubicado en el
            //elemento 3 del array(la posicion 4 seria), demostrando asi el punto anterior
            //En caso de que no encuentre nada en una posicion especifica, devuelve el valor -1
    // resultado = cadena.startsWith(cadena1);
    // console.log(resultado);
            //el metodo startswith, devuelve true, si el comienzo de una cadena, es exactamente 
            //igual a una cadena en especifico
    // resultado = cadena.endsWith(cadena1);
    // console.log(resultado);
            //el metodo endwith, hace lo mismo, pero comparando el final de una cadena, con
            //una cadena en especifico
            //en ambos casos, compara caracter por caracter
    // resultado = cadena.includes(cadena1);
    // console.log(resultado);
            //el metodo includes, busca una cadena de caracteres en especifico, en otra cadena
            // //y devuelve true o false
    // resultado = cadena.indexOf(cadena1);
    // console.log(resultado);
            //El metodo indexOf, hace lo mismo que el caso anterior, con la diferencia de que
            //no devuelve true o false, sino que devuelve el valor del indice de la "primer"
            //letra de la cadena que se busca, en la otra cadena. Si no se encuentra, devuelve -1
    // resultado = cadena.lastIndexOf(cadena1);
    // console.log(resultado);
            //Este metodo, hace lo mismo, pero mostrando el indice de 
            //la primer letra de la cadena, pero comenzando desde el final de la cadena,
            //quedandose con la primera que encuentre.
    // resultado = cadena1.padStart(15,"12j");
    // console.log(resultado);
            //Este metodo, hace que la cadena especificada, termine teniendo, el numero
            //de caracteres especificados, en el primer parametro. Esto lo hace, agregando 
            //la cadena especificada en el segundo parametro al principio de la cadena especificada
            //y repitiendola las veces que sea necesario, hasta completar los 15
            //caracteres totales en este caso
    // resultado = cadena1.padEnd(15,"12j");
    // console.log(resultado);
            //Esta hace lo mismo que el anterior, pero rellena la cadena desde el final de
            //la misma
    // resultado = cadena1.repeat(3);
    // console.log(resultado);
            //Este metodo, repite la cadena, las veces que se le aclare, una seguida de la otra
            //Si se le pone 0 como parametro. No muestra nada. Si se le pone -1, muestra un error
    // resultado = cadena.split("de");
    // console.log(resultado);
            //Este metodo, lo que hace es separar la cadena de caracteres, en aquel caracater
            //o cadena de caracteres que le especifico, formando de esta manera, un array
            //que contiene las partes separadas de la cadena, pero eliminando del array, 
            //el caracter o caracteres utilizados para la division.
    // resultado = cadena.substring(2,9);
    // console.log(resultado);
            //Este metodo, crea una nueva cadena, apartir de otra. Comenzando desde la posicion
            //especificada en el primer parametro, y terminando en la posicion especificada
            //en el segundo.
            //Este metodo, no incluye al caracter del segundo parametro, sino que al caracter anterior.
            //Si incluye al caracter ubicado en el primer parametro.
    // resultado = cadena.toLocaleLowerCase();
    // console.log(resultado);
            //Este metodo, convierte una cadena, algun caracter de una cadena, en minuscula
    // resultado = cadena.toUpperCase();
    // console.log(resultado);
            //Este metodo, hace lo mismo, pero a mayusculas
    // let num = 5
    // resultado = num.toString();
    // console.log(10 + resultado);
            //Este metodo, convierte un numero, en string. En el caso de las operaciones
            //matematicas, solo la suma, es la unica que evidencia que se trata de una
            //cadena de texto. Las demas operaciones, no.
    // let arr = ["hola ", " japones ", " sito  "];
    // resultado = arr.toString();
    // console.log(resultado); 
            //Tambien convierte arrays en cadenas de texto
    // console.log(resultado.length);
            // .length es una propiedad de los strings, que cuenta el numero de caracteres
            //que los conforman
    // let cad = ' hola como estas ';
    // let cad1 = cad.trim();
    // console.log(cad1.length);
            // .trim remueve los espacios que hayan al final y al inicio de una cadena de
            //caracteres
            //Tambien existen .trimEnd(), y .trimStart(), que hacen lo mismo, pero solo 
            //eliminan los espacios que hayan al final, y al inicio de una cadena, respectivamente
/* Metodos de arrays*/
    // metodos transformadores

        // let nombres = ["pedro","juan","carlos"];
        // let eliminado = nombres.pop();
        // console.log(eliminado);
        // console.log(nombres)
            //El metodo .pop() elimina el ultimo elemento del array, y lo guarda, para
            //dejar el array original, con un elemento menos
            //Tambien existe el metodo .shift(), que hace lo mismo que el anterior pero
            //eliminando el primer elemento del array.
        // let cantidad = nombres.push("acobo", "dalomito");
        // console.log(cantidad);
        // console.log(nombres);
            //El metodo .push() añade tantos elementos como le indiquemos, al final de 
            //un array en especifico, y devuelve el largo del array
        // nombres.reverse();
        // console.log(nombres);
            //Este metodo, invierte el orden de los elementos de un array
        // nombres.unshift(0,2,3);
        // console.log(nombres)
            //El metodo unshift, añade tantos elementos como le indiquemos, al principio del
            //array
        // nombres.sort();
        // console.log(nombres)
            //Este metodo, ordena el array de manera alfabetica o numerica, de menor a mayor
            //respecto del primer caracter de los elementos del array
        // nombres.splice(-1,2,"coco","cuca","caca");
        // console.log(nombres);
            //El metodo splice, tiene como funcion, eliminar o eliminar elementos de un 
            //array, o añadirle elementos, o ambos. Este metodo, tiene 3 parametros, 
            //el primero, indica el indice del elemento desde donde vamos a eliminar
            // y/o agragar elementos al array. El segundo, indica cuantos elementos se van a eliminar desde esa
            //posicion. Y el tercero, son todos los elementos que se van a agregar a partir de la
            //posicion indicada en el primer parametro. Si se pone 0 en el segundo parametro,
            //esto significa que no se elemina ningun elemento. Si se coloca -1 en el primer
            //parametro, esto indica que los elementos añadidos se colocan al final del array
            //pero esto hace que se elimine el ultimo elemento del array anterior.
            //Si no se especifica ningun elemento como tercer parametro, el metodo solo elimina
            // elementos especificados por los parametros anteriores.
    //metodos accesores
        // let apellidos = ["cacheton","culon","piton"];
        // let union = nombres.join(`
        // `);
        // console.log(union);
            //El metodo .join(), transforma un array en una cadena de texto, uniendo cada
            //elemento del array, en uno solo, pero ademas, toma como parametro, algun
            //string que querramos usar como separador entre cada elemento del array original, en
            // este caso, se utilizo un salto de linea
        // apellidos = apellidos.slice(0,2);
        // console.log(apellidos)
            //Este metodo, forma un nuevo array, indicando desde donde hasta que parte de 
            // otro array. El segundo parametro, indica donde termina el array, pero no 
            //incluye a dicho elemento
            //Si le pongo -1 como final del array, selecciona todos los elementos, sin
            //incluir al ultimo elemento
            //Tambien existen los metodos toString(), indexOf(), lastIndexOf() e includes()
            //que funcionan igual que cuando se trabajaba con cadenas de texto
        
    //Metodos de repeticion
        //nombres.filter(nombre => console.log(nombre));
        //El metodo filter, funciona de manera ciclica, recorriendo el array de principio
        //a fin. Recibe una funcion como parametro, de modo que al recorrer cada elemento
        //del array, ejecuta dicha funcion, operando con el dato alojado en dicho elemento.
        // let nombres1 = nombres.filter(nombre => nombre.length >2);
        // console.log(nombres1);
        //Ademas de lo anterior, el metodo filter, tiene una cualidad mas, que es el poder
        //crear otro array, con los elementos que cumplan con cierta condicion. Esto lo 
        // hace utilizando una funcion como parametro. En este caso, compara la longitud 
        //de caracteres de cada elemento del array, con un numero. Todos los elementos
        //que cumplan con esa condicion, van a formar parte del nuevo array.
        //La primer funcion de este metodo, hace lo mismo que el metodo forEach().

/* Objeto Math*/
        // let num1 = Math.sqrt(25);       //raiz cuadrada de un numero
        // console.log(num1);
        // let num2 = Math.cbrt(27);       //raiz cubica de un numero
        // console.log(num2);
        // let num3 = Math.max(27,4,100,5);       //muestra el numero mas grande de un conjunto
        // console.log(num3);
        // let num4 = Math.min(27,4,100,5);       //muestra el numero mas chico de un conjunto
        // console.log(num4);
        // let num5 = Math.random();       //muestra el numero random entre 0 y 1, sin incluirlos
        // console.log(num5); 
        // num5 = Math.random()*100;      //de esta manera, aumento el rando de cero a 100
        // console.log(num5);
        // num5 = Math.round(num5);       //este metodo redondea un numero con decimales
        // console.log(num5);
        
        // num5 = Math.random()*100;
        // console.log(num5);
        // num5 = Math.floor(num5);       //este metodo redondea siempre hacia abajo
        // console.log(num5);

        // num5 = Math.random()*100;
        // console.log(num5);
        // num5 = Math.trunc(num5);        //este metodo trunca los decimas, eliminandolos
        // console.log(num5);
        // /*propiedades del objeto Math*/
        // console.log(Math.PI);           //muestra el numero pI
        // console.log(Math.SQRT1_2);           //muestra la raiz de 1/2
        // console.log(Math.SQRT2);           //muestra la raiz de 2
        // console.log(Math.E);           //muestra el numero E
        // console.log(Math.LN2);           //muestra el logaritmo natural de 2
        // console.log(Math.LN10);           //muestra el logaritmo natural de 10
        // console.log(Math.LOG2E);           //muestra el logaritmo en base 2 de E
        // console.log(Math.LOG10E);           //muestra el logaritmo en base 10 de E
        
/* Objeto Math*/
