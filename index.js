function randomPokemon(){  //gets a random number then makes an API call for that pokemon
    x = Math.ceil(Math.random()*900)  
    getPokemon(x)
}

function getPokemon(item){     //makes the api call and then gets the json data
    fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
        .then(resp => resp.json())
        .then(data => main(data))
}

function main(data) {  //this rn is just to do everything we can fix it after to make it not shit
    //data is a object
    renderPokemonImg(data) //gets the info for the population of the render
    renderPokemonStats(data) //gets the info for the stats
    renderPokemonExtra(data)
}

function renderPokemonImg(pkmObject){ //grab the sprite we will use for the pokemon
    let frontIMG = pkmObject.sprites.front_default 
    let name = pkmObject.name
    document.querySelector('#name1').textContent = name //need to not hardcode the location
    let placeholder = document.querySelector("#pkmn1")  //need to not hardcode the location
    placeholder.src = frontIMG    
    document.querySelector('#health1').value = 100
}

function renderPokemonStats(pkmObject){ //we can get the data out, we need to make it so we have vary the location we assign the data to 
    pkmObject.stats.forEach(element => {    //pkmObject.stats is an array of objects. For each object we need a the base_stat and the stat.name    }
        statValue = element.base_stat
        statName = element.stat.name
        let placeholder = document.querySelector(`#${statName}1`) //get location of the statname for pkmon1
        placeholder.textContent = statValue

    })
}

function renderPokemonExtra(pkmObject){ //extra stuff for hover
    let shinyIMG = pkmObject.sprites.front_shiny //pokemons alternate shiny sprite
    let typeArray = [] //all the types the pokemon has
    let type = pkmObject.types
        for (idx in type){
            typeName = type[idx].type.name
            typeArray.push(typeName)
        }
    let weight = pkmObject.weight //pokemons weight
    let abilities = pkmObject.abilities 
    let abilityArray = [] //all the abilities the pokemon has
        for (idx in abilities){
            abilityName = abilities[idx].ability.name
            abilityArray.push(abilityName)
        }  
    document.querySelector('#weight1').textContent = weight
    document.querySelector('#altsprite1').src = shinyIMG
    document.querySelector('#typep1').textContent = typeArray
    document.querySelector('#ability1').textContent = abilityArray
}

const getButton1 = document.querySelector('#b1') //Adds Random Event to first button
getButton1.addEventListener("click", () =>{
    randomPokemon()
})

//Second Button Part Had to duplicate since I hard coded in locations to render to 


const getButton2 = document.querySelector('#b2') //Adds Random Event to Second Button
getButton2.addEventListener("click", () =>{
    randomPokemon2()
})

function randomPokemon2(){  //gets a random number then makes an API call for that pokemon
    x = Math.ceil(Math.random()*900)  
    getPokemon2(x)
}


function getPokemon2(item){     //makes the api call and then gets the json data
    fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
        .then(resp => resp.json())
        .then(data => main2(data))
}

function main2(data) {  
    //data is a object
    renderPokemonImg2(data) //gets the info for the population of the render
    renderPokemonStats2(data) //gets the info for the stats
    renderPokemonExtra2(data)
}

function renderPokemonImg2(pkmObject){ //grab the sprite we will use for the pokemon
    let frontIMG = pkmObject.sprites.front_default 
    let name = pkmObject.name
    document.querySelector('#name2').textContent = name //need to not hardcode the location
    let placeholder = document.querySelector("#pkmn2")  //need to not hardcode the location
    placeholder.src = frontIMG    
    document.querySelector('#health2').value = 100
}

function renderPokemonStats2(pkmObject){ //we can get the data out, we need to make it so we have vary the location we assign the data to 
    pkmObject.stats.forEach(element => {    //pkmObject.stats is an array of objects. For each object we need a the base_stat and the stat.name    }
        statValue = element.base_stat
        statName = element.stat.name
        let placeholder = document.querySelector(`#${statName}2`) //get location of the statname for pkmon1
        placeholder.textContent = statValue})
}

function renderPokemonExtra2(pkmObject){ //extra stuff for hover
    let shinyIMG = pkmObject.sprites.front_shiny //pokemons alternate shiny sprite
    let weight = pkmObject.weight //pokemons weight
    let typeArray = [] //all the types the pokemon has
    let type = pkmObject.types
        for (idx in type){
            typeName = type[idx].type.name
            typeArray.push(typeName)
        }
    let abilities = pkmObject.abilities 
    let abilityArray = [] //all the abilities the pokemon has
        for (idx in abilities){
            abilityName = abilities[idx].ability.name
            abilityArray.push(abilityName)
        }
    document.querySelector('#weightp2').textContent = weight
    document.querySelector('#altspritep2').src = shinyIMG
    document.querySelector('#typesp2').textContent = typeArray
    document.querySelector('#abilityp2').textContent = abilityArray
}

//Mouseover and Mouseout event listener to toggle extra info pannel

function hidediv(id){ 
    let element = document.getElementById(id)
    element.style.visibility = 'hidden'
}

function displaydiv(id){ 
    let element = document.getElementById(id)
    element.style.visibility = 'visible'
}

const pkmn1Sprite = document.querySelector('#pkmn1')

pkmn1Sprite.addEventListener('mouseover', ()=> displaydiv('extrainfopkmn1'))
pkmn1Sprite.addEventListener('mouseout', ()=> hidediv('extrainfopkmn1'))

const pkmn2Sprite = document.querySelector('#pkmn2')

pkmn2Sprite.addEventListener('mouseover', ()=> displaydiv('extrainfopkmn2'))
pkmn2Sprite.addEventListener('mouseout', ()=> hidediv('extrainfopkmn2'))

//Drag and Drop Event Listeners to start the Battle

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
  startBattle()
}


//Battle Functions

let pkm1 = {attack:0,
    defense:0,
    hp:0,
    speed:0}

let pkm2 = {attack:0,
        defense:0,
        hp:0,
        speed:0}

pkmn1hpint = parseInt(pkm1.hp) 
pkmn2hpint = parseInt(pkm2.hp) //is this a reference or value copy?

        
function startBattle(){ //this will setup the objects needed for the battle

        pkm1.attack = document.querySelector('#attack1').textContent
        pkm1.defense = document.querySelector('#defense1').textContent
        pkm1.hp = document.querySelector('#hp1').textContent
        pkm1.speed = document.querySelector('#speed1').textContent

        pkm2.attack = document.querySelector('#attack2').textContent              
        pkm2.defense = document.querySelector('#defense2').textContent
        pkm2.hp = document.querySelector('#hp2').textContent    //is this pass by reference or value? i think reference, can save a value as an int for reset if it is pass by reference
        pkm2.speed = document.querySelector('#speed2').textContent
}

function Attack(attackerObj,defenderObj,skillMod = 1){ //Skill mod exists for stretch goals
    let attackVal = attackerObj.attack 
    let defenseVal = defenderObj.defense
    let damageDealt = ((skillMod*(attackVal-defenseVal))/4)
    if (damageDealt <=0){
        damageDealt = Math.ceil(Math.random()*2) //either do 1 or 2 base damage
    }
    let randomMod = Math.random() +.5 //changes range to .5-1.5
    damageDealt = randomMod*damageDealt
    return damageDealt}

let oneAttacktwo = document.querySelector('#oneattack2') 
let twoAttackone = document.querySelector('#twoattack1')
let battleStart = document.querySelector('#StartBattle')

oneAttacktwo.addEventListener('click', () =>{
    let dmgDealt = Attack(pkm1,pkm2)
    //console.log(dmgDealt)
    let hp = document.querySelector('#hp2')
    let newhp = Math.floor(hp.textContent-dmgDealt) //Use floor so always have at least some damage done
    //console.log(pkm2)
    if (newhp <=0){
        hp.textContent = 0
        document.querySelector('#health2').value = 0
        alert(`${document.querySelector('#name2').textContent} has fainted Get new Pokemon`)
    }
    else{
    hp.textContent = newhp
    document.querySelector('#health2').value = (newhp/pkm2.hp)*100}
})

twoAttackone.addEventListener('click', () =>{
    let dmgDealt = Attack(pkm2,pkm1)
    //console.log(dmgDealt)
    let hp = document.querySelector('#hp1')
    let newhp = Math.floor(hp.textContent-dmgDealt)
    //console.log(pkm1)
    if (newhp <=0){
        hp.textContent = 0
        document.querySelector('#health1').value = 0
        alert(`${document.querySelector('#name1').textContent} has fainted Get new Pokemon`)
    }
    else{
    hp.textContent = newhp
    document.querySelector('#health1').value = (newhp/pkm1.hp)*100}
})

battleStart.addEventListener('click', ()=>startBattle()) //remove this button the battle start will occur on drag and drop was good for testing though. 

//TODO and stretch goals
//Round the HP values 
//make it not look like shit
//We can load buttons for 4 moves assigned to the pokemon. These moves can be used in the attack functions and adjust the skill mods
//Battles are turn based so we should grey out on button at all times so someone can't just spam 1 to death. Which button is active first can be based of the pokemons speed
//Look at the types and adjust skill mod for that as well. 
//Fix the render functions so that they dont have locations hard coded so we dont have a duplicate set of functions. Could have them take in an array of id's for the locations to render to. 
//Add the battle music when the battle starts. HOENN random pokemon battle slaps
//For types we can have images instead of the listed array.
