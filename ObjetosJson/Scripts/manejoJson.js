
var obJsonsito={
ref:"001",
cod:"1234567891023", 
nombre:"Gorra",
precio:"20000"
}


var obJsonsito1={
    ref:"002",
    cod:"1234560091023", 
    nombre:"Pantalón",
    precio:"40000"
    }


var obJsonsito2={
    ref:"003",
    cod:"1234567833023", 
    nombre:"Camisa",
    precio:"25000"
  }

  var productos = [obJsonsito,obJsonsito1,obJsonsito2]

  var productosParaMostrar = "-------Productos Ingresados--------</br>"

  for (let i = 0;i<productos.length;i++) {

    var productoParaTabla = productos[i]

    productosParaMostrar=productosParaMostrar+"ref= "+productoParaTabla.ref+"</br>"+"nombre: "+productoParaTabla.nombre+"</br>"
    +"precio= "+productoParaTabla.precio+"</br>"

  }

  document.getElementById("productos").innerHTML=productosParaMostrar


localStorage.setItem("productos", JSON.stringify(productosParaMostrar))