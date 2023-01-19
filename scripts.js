/*Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".*/
console.log(document.title);
/*Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".*/
document.getElementById("gen-1").innerHTML = 'Generasion 1 pokimon'
/*Cambia el color de fondo de la primera generación de Pokimon. */
document.getElementsByClassName('infocard-list infocard-list-pkmn-lg')[0].style.backgroundColor = "black"
/*Imprime por consola la URL de la página.*/
console.log(document.getElementsByTagName("Link")[3].href)
/*Imprime por consola el dominio de la página.*/
console.log(document.getElementsByTagName("Link")[1].href)
/*Imprime todos los nodos de tipo imagen*/
console.log(document.getElementsByTagName("img"))
/*sustituye el atributo "src" de todas las imágenes por "https://media.giphy.com/media/2v170e71aanfi/giphy.gif" */
function nicolas() {
    for (let i = 0; i < document.getElementsByTagName("img").length; i++) { document.getElementsByTagName("img")[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";} }
nicolas()

/**/
 /*for (let j = 0; j < document.getElementsByClassName("infocard-lg-data text-muted").length; j++) { 
    if(document.getElementsByClassName("infocard-lg-data text-muted")[i].chi)

    itype flying
    document.getElementsByClassName("infocard-lg-data text-muted")[i].style.backgroundColor = "Yellow" }*/
