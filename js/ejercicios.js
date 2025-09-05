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
        
    }

    function ejercicio3(){
        
    }

    function ejercicio4(){
        
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

