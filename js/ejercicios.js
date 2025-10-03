    function ejercicio1(){
        let nacimiento = new Date(document.getElementById("nacimiento").value)
        let nombre = document.getElementById("nombre").value
        const resultado = document.getElementById("resultado1")
        const hoy = new Date();
        let edad = hoy.getFullYear() - nacimiento.getFullYear()
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
          edad--;
        }
        console.log(edad)

        resultado.innerHTML =  `Hola ${nombre}, tienes ${edad} años!`
    }

    function ejercicio2(){
        const frutas = ["banana", "manzana", "pera", "melon", "sandia", "naranja", "frutilla", "uva", "kiwi", "cereza"]
        let fruta = document.getElementById("fruta").value.trim().toLowerCase()
        const result = document.getElementById("resultado2")
        if (frutas.includes(fruta)) result.innerHTML = `si, tenemos ${fruta}`
        else result.innerHTML = `no, no tenemos ${fruta}` 
    }

    function ejercicio3(){
      let num = 10 
      let numero = 10.6 
        if(num == 10)
        {
          document.getElementById('10==10').innerHTML =
          "si son iguales"
 
        }
        else
        {
            document.getElementById('10==10').innerHTML =
            "no son iguales"
        }

        if(num === 10)
        {

        document.getElementById('10===10').innerHTML =
            "si son iguales"
        }
        else
        {
            document.getElementById('10===10').innerHTML =
            "no son iguales"
        }

        alert("10.6 es de tipo " + typeof numero)

          if(true == 1)
          {
          
            document.getElementById('true==1').innerHTML =
              "si, true es 1 "
          }
          else
          {
              document.getElementById('true==1').innerHTML =
              "no, ture no es 1 "
          }

    }

    function ejercicio4(){
        let nombre = document.getElementById("nombre").value.toLowerCase()
        let fundacion = document.getElementById("fundacion").value.toLowerCase()
        let poblacion = document.getElementById("poblacion").value.toLowerCase()
        let extension = document.getElementById("extension").value.toLowerCase()
        const result = document.getElementById("resultado4")
        const ciudad = {
          nombre: nombre,
          fundacion: fundacion,
          poblacion: poblacion,
          extension: extension
        }
        
        for(const propiedad in ciudad){
          result.innerHTML = `${propiedad}: ${ciudad[propiedad]}`
        }
    }

    function ejercicio5(){

        let textoIngresado = document.getElementById("numeros").value;
        let partesSeparadas = textoIngresado.split("-");
        let duplicados = partesSeparadas.map(function(valor) {
          return valor * 2;
        });
      
        document.getElementById("resultado5").innerHTML = duplicados;
    }


    function ejercicio6(){
 
        console.log("Primer dibujo:");
        let dibujo1 = [];
        for (let i = 1; i <= 6; i++) {
          let fila = "*".repeat(i);
          dibujo1.push(fila);
        }
        dibujo1.forEach(linea => console.log(linea));
      

        console.log("\nSegundo dibujo:");
        let dibujo2 = [];
        for (let i = 1; i <= 5; i++) {
          let asteriscos = "*".repeat(2 * i - 1);
          let guiones = "-".repeat(5 - i);
          let fila = guiones + asteriscos + guiones;
          dibujo2.push(fila);
        }
        dibujo2.forEach(linea => console.log(linea));
      
    }

    function ejercicio7(){
      const entrada = document.getElementById("nombres").value;
      const nombres = entrada.split(",");
      const resultado = document.getElementById("resultado7");
      resultado.innerHTML = "";
    
      for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i].trim();
        if (nombre.startsWith("A") || nombre.startsWith("a")) {
          const item = document.createElement("li");
          item.textContent = nombre;
          resultado.appendChild(item);
        }
      }
    }

    function ejercicio8(){
        
   let texto = document.getElementById("nombre8").value;
   let aRemplazar = document.getElementById("aRemplazar").value;
   let Remplazo = document.getElementById("Remplazo").value;
   const res =  texto.replace(aRemplazar,Remplazo);
   document.getElementById("resultado").innerHTML = "texto original = " + texto + "<br>" + "nuevo texto = "+  res + "<br>";


    }

    function ejercicio9(){
        
   let texto = document.getElementById("nombre9").value;
   let bc = document.getElementById("num9").value;
   document.getElementById("resultado").innerHTML = texto.slice(0, bc);
    }

    function ejercicio10(){
        
   let texto = document.getElementById("nombre10").value;
   const res =  texto.replace(",","-");
   document.getElementById("resultado").innerHTML = res;
    }

    function ejercicio11(){
        
   let texto = document.getElementById("nombre11").value;

   let partes = texto.split(",");
   let suma = 0;
   for (let parte of partes) {
       let [nombre, valor] = parte.split(":");

       if (valor) {
           suma += Number(valor.trim());
       }
   }
   document.getElementById("resultado").innerHTML = suma;
    }

