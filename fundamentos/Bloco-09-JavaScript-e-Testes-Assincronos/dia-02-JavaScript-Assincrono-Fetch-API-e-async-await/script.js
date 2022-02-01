// const fetch = require('node-fetch');

 // const piada = document.querySelectorAll('#piada');
 // const pokemon = document.querySelectorAll('#pokemon');

// const fetchJoke = async () => {
//   const url =  'https://pokeapi.co/api/v2/pokemon/ditto';

//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data.value);
//   // pokemon.src = data.value
// }

// fetchJoke();




/////////////////////////////////////////////////////////////////////////////////////////////////////

// O que é API?
// O que é .json
// O que é Promise?

function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

// Parte 4 - Refatorando
function extractNameAndImage(data) {
  return {
    name: data.name,
    imageUrl: data.sprites.front_default,
  }
}

// function fetchPokemon(pokemon) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // retorna uma promise
//     .then((response) => response.json()) // retorna uma promise
//     .then((data) => {
//       const pokemon = extractNameAndImage(data)
//       append(pokemon)
//     })
//     .catch((error) => console.log(error))
// }

function fetchPokemonData(pokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
}

// function requestPokemons() {
//   fetchPokemon("bulbasaur"),
//   fetchPokemon("charmander"),
//   fetchPokemon("ditto"),
//   fetchPokemon("pikachu"),
//   fetchPokemon("squirtle")
// }

function requestOrderedPokemons() {
  Promise.all([
    fetchPokemonData("bulbasaur"),
    fetchPokemonData("charmander"),
    fetchPokemonData("ditto"),
    fetchPokemonData("pikachu"),
    fetchPokemonData("squirtle")
  ])

  .then( (pokemonDataList) => { //pokemonDataList retorna um array com os .jsons
    const poke = pokemonDataList.map( (pokemonData) => extractNameAndImage(pokemonData))
    poke.forEach( (pokemon) => {
        append(pokemon)
      } )
    })
  }


// Parte 3 - Refatorando
// function extractNameAndImage(data) {
//   return {
//     name: data.name,
//     imageUrl: data.sprites.front_default,
//   }
// }

// function fetchPokemon(pokemon) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // retorna uma promise
//     .then((response) => response.json()) // retorna uma promise
//     .then((data) => {
//       const pokemon = extractNameAndImage(data)
//       append(pokemon)
//     })
//     .catch((error) => console.log(error))
// }

// function requestPokemons() {
//   fetchPokemon("bulbasaur"),
//     fetchPokemon("charmander"),
//     fetchPokemon("ditto"),
//     fetchPokemon("pikachu"),
//     fetchPokemon("squirtle")
// }

// Parte 2 - Refatorando encadeado
// function fetchPokemon(pokemon) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // retorna uma promise
//     .then( (response) => response.json()) // retorna uma promise
//     .then( (data) => {
//       const pokemon = {
//         name: data.name,
//         imageUrl: data.sprites.front_default,
//       }
//       append(pokemon)
//     })
//     .catch( (error) => console.log(error) )
//   } 

//   function requestPokemons() {
//     fetchPokemon("bulbasaur"),
//     fetchPokemon("charmander"),
//     fetchPokemon("dittoooooooo"),
//     fetchPokemon("pikachu"),
//     fetchPokemon("squirtle")
//   }

// Parte 1 - Usando fetch API
// function fetchPokemon(pokemon) {
//   const promise = (fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)); // retorna uma primise

//   promise.then( (response) => {
//     const promiseJson = response.json(); // retorna uma promise

//     promiseJson.then( (data) => {
//       // console.log(data.name);
//       const pokemon = {
//         name: data.name,
//         imageUrl: data.sprites.front_default,
//       }
//       append(pokemon)
//     })
//   } )
// }

window.onload = requestOrderedPokemons;
// window.onload = requestPokemons;