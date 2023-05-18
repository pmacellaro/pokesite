// This is the function to get the pokemon from an api
//while the api is waiting for the response everything else will run resulting in the await
//Need to run the commands after 

function getPokemon(item){     
    fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
        .then(resp => resp.json())
        .then(data => savePokemon(data))
}

function savePokemon(data){ //this will just save whatever the data is into the pkmonObject
    let pkmonObject = data
    return pkmonObject
}

function randomPokemon(){
    x = Math.ceil(Math.random()*900)  
    //console.log(x)
    return getPokemon(x)
}

//x = randomPokemon()
x = savePokemon('hello')
console.log(x)


function renderPokemon(pkmObject){ //grab the sprite we will use for the pokemon
    let backIMG = pkmObject.sprites.back_default 
    let placeholder = document.querySelector("HTMLELEMENT")
    placeholder.src = backIMG    
}

function renderStats(pkmObject){
    pkmObject.stats.forEach(element => {    //pkmObject.stats is an array of objects. For each object we need a the base_stat and the stat.name    }
        let value = element.base_stat
        let statName = element.state.name
        let placeholder = document.querySelector(`#${statName}1`) //get location of the statname for pkmon1
        placeholder.textContent = value
}); 
}
function renderDetails(pkmObject){}
function populateFields()


var draggable = document.getElementById('pkmn1');
var droppable = document.getElementById('pkmn2');
draggable.addEventListener('dragstart', dragStart);
droppable.addEventListener('dragover', dragOver);
droppable.addEventListener('drop', drop);
function dragStart(event) {
  // Set the data that will be transferred during the drag
  event.dataTransfer.setData('placeholder', event.target.id);
}
function dragOver(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  var draggedElementId = event.dataTransfer.getData('placeholder');
  var newNode = document.getElementById(imgData).cloneNode(true);
  var draggedElement = document.getElementById(draggedElementId);
  event.target.appendChild(draggedElement);
}