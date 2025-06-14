



document.addEventListener("DOMContentLoaded" , () =>  { //Usarlo en caso de tener un script que depende de que la pagina se haya cargado del todo




document.querySelector("button").addEventListener("click", () => {//--------> addEventListener es un "escuchador" de eventos, y es vincular una funcion con un evento.
    // Funcion que se llama cuando se clickea el boton
 
    //Busco el input
    const input = document.querySelector("input");
    const compra = input.value; //---> Lo que escribo en la barra de busqueda, se guarda en la propiedad VALUE
//Limpio el input
input.value ="";

let li = document.createElement("li"); //Lo que me permite es que yo le digo la etiqueta que quiero "li", me crea un objeto en el html que represanta un li.
li.innerText = compra;
li.setAttribute("class" , "");//-----> Permite que cualquier atributo de u elemento de html , se lo opuede setear con esto

let btn = DocumentTimeline.createElement("button");
btn.classList.add("btn");
btn.classList.add("btn-danger");
btn.innerText = "Borrar";
btn.addEventListener("click", (e) =>{
// Guardo el culpable del evento (button que se clickeo)
   const target = e.target;
   target.parentElement.remove();



});

li.append(btn);

document.querySelector("ul").append(li);

//append, similar al (.push) de los arrays, lo que hace es, agregar al final, dentro de un elemento de html, lo agrega al fondo





});


}); 



//--------------------------------------------------------------/
/*

<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

*/