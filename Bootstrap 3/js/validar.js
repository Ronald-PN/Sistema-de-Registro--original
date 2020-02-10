
function validar(){

 


    var Codigo =document.getElementById("codigo").value ;
     
    if (Codigo===""){
   
      document.getElementById("mostrar").innerHTML="El campo no puede estar vacio! Introduzca un codigo valido";
      return false;
    }

    else {
    return validar;
    }
    }



    
function login(){

 

  var Nombre =document.getElementById("nombre").value ;
  var Apellido =document.getElementById("apellido").value ;
  var Codigo =document.getElementById("rne").value ;
     
  if (Nombre==="" || Apellido==="" || Codigo==="" ){
 
    document.getElementById("mostrar").innerHTML="Los campos no pueden estar vacio! Introduzca datos validos";
    return false;
  }



  }


  function calificar(){
  
  var CodigoCentro =document.getElementById("codigo-centro").value ;
  var CodigoMaestro =document.getElementById("codigo-maestro").value ;
  var IdEstudiante =document.getElementById("id").value ;
  var Grado =document.getElementById("id").value ;
  var Calficacion =document.getElementById("calificacion").value ;
  var Seccion =document.getElementById("seccion").value ;
     
  if (CodigoCentro==="" || CodigoMaestro==="" || IdEstudiante==="" || Grado==="" || Calificacion==="" || IdEstudiante==="" ){
 
    return false;
  }
  else{
    alert("Calificacion eviada correctamente");
    return false;
  }

  }


  
  function rne(){
  
    var RNE =document.getElementById("rne").value ;
  
       
    if (RNE===""  ){
   
      alert("No disponible por el momento!");
      return false;
      
    }
  
    }




 

 
           
