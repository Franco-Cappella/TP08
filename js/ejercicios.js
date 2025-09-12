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
        const ciudad = new Object()
        ciudad.nombre = nombre
        ciudad.fundacion = fundacion
        ciudad.poblacion = poblacion
        ciudad.extension = extension
        for(const propiedad in ciudad){
          result.innerHTML = `${propiedad}: ${ciudad[propiedad]}`
        }
    }

    function ejercicio5(){
        
    }

    function ejercicio6(){
        
    }

    function ejercicio7(){
        
    }

    function ejercicio8(){
        
    }

    function ejercicio9(){
        
    }

    function ejercicio10(){
        
    }

    function ejercicio11(){
        
    }

