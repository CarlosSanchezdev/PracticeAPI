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
        const card = document.createElement("div");
        card.className = 'flip-card';

        const inner = document.createElement("div");
        inner.className = 'flip-card-inner';

        const front = document.createElement("div");
        front.className = 'flip-card-front';
        front.style.backgroundImage = `url(${element.imagen})`;

        const back = document.createElement("div");
        back.className = 'flip-card-back';
        back.innerHTML = `<h4>${element.personaje}</h4>`;
        
        
        //<h4>${element.personaje}</h4>
        //<h5>${element.casaDeHogwarts}</h5>
        
        if(element.casaDeHogwarts == 'Gryffindor'){
          back.style.backgroundImage = "url('./image/Gryfindor.gif')";
          back.style.backgroundSize = '100% 100%'
          back.style.backgroundRepeat = 'no-repeat'
        }
        if(element.casaDeHogwarts == 'Slytherin'){
          back.style.backgroundImage = "url('./image/Slytherin.gif')";
          back.style.backgroundSize = '100% 100%'
          back.style.backgroundRepeat = 'no-repeat'
        }
        if(element.casaDeHogwarts == 'Ravenclaw'){
          back.style.backgroundImage = "url('./image/ravenclaw.gif')";
          back.style.backgroundSize = '100% 100%'
          back.style.backgroundRepeat = 'no-repeat'
        }

        card.appendChild(inner)
        inner.appendChild(front)
        inner.appendChild(back)

        DOMtoprint.appendChild(card);
    });

    
  });


  
