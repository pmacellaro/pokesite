// This is the function to get the pokemon from an api
//while the api is waiting for the response everything else will run resulting in the await
//Need to run the commands after 

]function randomPokemon(){  //gets a random number then makes an API call for that pokemon
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
    

// type1
// type2
// weight
// ability
// alternatesprite

}




const getButton1 = document.querySelector('#b1') //Adds Random Event to first button
getButton1.addEventListener("click", () =>{
    randomPokemon()
})




//Second Button Part


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

function main2(data) {  //this rn is just to do everything we can fix it after to make it not shit
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
}

function renderPokemonStats2(pkmObject){ //we can get the data out, we need to make it so we have vary the location we assign the data to 
    pkmObject.stats.forEach(element => {    //pkmObject.stats is an array of objects. For each object we need a the base_stat and the stat.name    }
        statValue = element.base_stat
        statName = element.stat.name
        let placeholder = document.querySelector(`#${statName}2`) //get location of the statname for pkmon1
        placeholder.textContent = statValue

    })

 
}

//TODO make this modular
//The issue is that the location we render to will differ for each button
//We could set it so 1 function just gets the data out and returns an object
//We then pass that object with the info into a render function but that render function also uses a location?
//For Each click we know what we will be populating, we can create an array of Id's that we will be using. Once we get to the part of placing the data we will reference the array for the location. Select that location and add the value then. 
//This would mean that the render function will take in the data it will be rendering from, and a location that it will render to. 
//Add the rest of the elements needed for the HTML file and update that for now
//We need to create a method for the pokemon battle as well. 

// type1
// type2
// weight
// ability
// alternatesprite

//event listener is not firing i think
//pkmn1Sprite.addEventListener("mouseover",()=> {})

//When document is loaded there is no event listener. Vereified from looking at event listeners tab in browser 
//HAHA was looking at the html file that was linked to the old index js. wasted 40 minutes trying to solve a problem that was hear hahahahahaahahahahahahahaahfuck


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


