console.log("Vamos al cine!")
let nombre = prompt("Ingrese su nombre")

console.log("Estas son las peliculas en cartelera:")
console.log("- Deadpool y Wolverine")
console.log("- Intensamente 2")
console.log("- Gotzila y Kong")
console.log("- El planeta de los simios")
console.log("- El último conjuro")
console.log("- Mi villano favorito 4")

const PELI1 = "Deadpool y Wolverine"
const PELI2 = "Intensamente 2"
const PELI3 = "Gotzila y Kong"
const PELI4 = "El planeta de los simios"
const PELI5 = "El último conjuro"
const PELI6 = "Mi villano favorito 4"

let pelicula = prompt("Hola"+ " " + nombre + " "+ "Qué película le gustaría ver?")

if(pelicula == PELI1 || pelicula == PELI2 || pelicula == "Gotzila y Kong" || pelicula == "El planeta de los simios" ||  pelicula == "El último conjuro" ||  pelicula == "Mi villano favorito 4" ){
    alert("La pelicula que ingresaste es: " + pelicula)
} else {
    console.error("Por favor, ingrese una de las películas disponibles")
    pelicula = prompt("Qué película te gustaría ver?")
}

console.log("La película que verás es: ", pelicula)

