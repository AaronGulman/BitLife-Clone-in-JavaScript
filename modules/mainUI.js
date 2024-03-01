export function actionPanel(){
let main = document.querySelector('#main')
let actionPanel = document.createElement('div')
let playerName = document.createElement('h1')


playerName.classList.add('pName')
actionPanel.classList.add('actionPanel')
actionPanel.appendChild(playerName)
main.appendChild(actionPanel)


}