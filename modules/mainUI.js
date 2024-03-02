export function helloScreen(){
let main = document.querySelector('#main')
let helloScreen = document.createElement('div')
let playerName = document.createElement('h1')


playerName.classList.add('pName')
helloScreen.classList.add('helloScreen')
helloScreen.appendChild(playerName)
main.appendChild(helloScreen)


}