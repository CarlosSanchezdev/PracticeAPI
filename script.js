const DOMtoprint = document.querySelector('.cards-grid');
const DOMtoprint2 = document.querySelector('.print');
// const url = ('https://jsonplaceholder.typicode.com/users')

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//     data.forEach((element) => {
//         console.log(element);
//         const div = document.createElement("button")
//         div.setAttribute('marker', element.id);
//         div.addEventListener('click', desplegarDatos)
//         div.innerHTML = element.name;

//         DOMtoprint.appendChild(div);
//     });

//     function desplegarDatos(event){

    
//         const Id2 = event.target.getAttribute('marker');
        
//         let position = data.map(element => element.id.toString()).indexOf(Id2);
    
//         let storage = data[position];

//         DOMtoprint2.innerHTML = `
        
        
//         ${storage.name}`;
        
//     }
//   });
// Object.entries()

const url2 = ('https://harry-potter-api.onrender.com/personajes')

// fetch(url2)
//   .then(response => response.json())
//   .then((data) => {
//     //console.log(data)
//     data.forEach((element) => {
//         //console.log(element);
//         const div = document.createElement("button")
//         div.addEventListener('click', () => {desplegarDatos(element)})
//         div.innerHTML = `<img src="${element.imagen}">`
//         ;

//         DOMtoprint.appendChild(div);
//     });

    
//   });

//   function desplegarDatos(item){

    
        
//     console.info(item)
//     DOMtoprint2.innerHTML = `
    
    
//     ${item.personaje}`;
    
// }

fetch(url2)
  .then(response => response.json())
  .then((data) => {
    //console.log(data)
    data.forEach((element) => {
        //console.log(element);
        const div = document.createElement("div")
        div.className = 'flip-card'

        div.innerHTML = `<div class="flip-card-inner">
        <div class="flip-card-front" style="background-image: url('${element.imagen}');">

        </div>
        <div class="flip-card-back">
            <h4>${element.personaje}</h4>
            <h5>${element.casaDeHogwarts}</h5>
        </div>`
        ;

        DOMtoprint.appendChild(div);
    });

    
  });

//   function desplegarDatos(item){

    
        
//     console.info(item)
//     DOMtoprint2.innerHTML = `
    
    
//     ${item.personaje}`;
    
// }
  
