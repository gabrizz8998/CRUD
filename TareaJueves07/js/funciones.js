/*window.onload=function(
 
);*/
var isbn=document.getElementById("iISBN");
var titulo=document.getElementById("Titulo");
var autor=document.getElementById("Autor");
var editorial=document.getElementById("Editorial");
var paginas=document.getElementById("Paginas");
var posicion=0;


var aIsbn=new Array();
var aTitulo=new Array();
var aAutor=new Array();
var aEditorial=new Array();
var aPaginas=new Array();
cargarXml();

function cargarXml(){
    //Leemos los datos del fichero datos.js en formato xml 
    //y lo transformamos en una coleccion de array 
    var codigo=new DOMParser();
    var myXml=codigo.parseFromString(datosFichero,"text/xml");
    //alert(myXml);
    

    aIsbn=myXml.getElementsByTagName("isbn");
    aTitulo=myXml.getElementsByTagName("titulo");
    aAutor=myXml.getElementsByTagName("autor");
    aEditorial=myXml.getElementsByTagName("editorial");
    aPaginas=myXml.getElementsByTagName("paginas");
    
    mostrarRegistro();
   
}

function mostrarRegistro(){
    isbn.value=aIsbn[posicion].firstChild.nodeValue;
    titulo.value=aTitulo[posicion].firstChild.nodeValue;
    autor.value=aAutor[posicion].firstChild.nodeValue;
    editorial.value=aEditorial[posicion].firstChild.nodeValue;
    paginas.value=aPaginas[posicion].firstChild.nodeValue;
}

function siguienteRegistro(){
    var longitud=aIsbn.length;
    if(posicion<longitud-1){
        posicion++;
        mostrarRegistro();
    }else{
        alert("No hay mas registros")
    }
    
}

function anteriorRegistro(){
    if(posicion>0){
        posicion--;
        mostrarRegistro();
    }else{
        alert("No hay mas registros")
    }
    
}

function modificarRegistro(){
    aIsbn[posicion].firstChild.nodeValue=isbn.value;
    aTitulo[posicion].firstChild.nodeValue=titulo.value;
    aAutor[posicion].firstChild.nodeValue=autor.value;
    aEditorial[posicion].firstChild.nodeValue=editorial.value;
    aPaginas[posicion].firstChild.nodeValue=paginas.value;
}

function borrarRegistro(){
   /* delete aIsbn[posicion];
    aIsbn.splice(posicion,1);
    aTitulo.splice(posicion,1);
    aAutor.splice(posicion,1);
    aEditorial.splice(posicion,1);
    aPaginas.splice(posicion,1);*/

    var es=aIsbn.toArray;
    alert(es)

    if(posicion!=0){
        posicion=0;
    }else{
        posicion=1;
    }
    mostrarRegistro();
    
}

