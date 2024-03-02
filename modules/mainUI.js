export let mainUI = document.createElement('div')


export function helloScreen(){
let main = document.querySelector('#main')


mainUI.classList.add('mainUI')


main.appendChild(mainUI)

userInterface()

}


 function userInterface(){
	let topUI = document.createElement('div')
	let midUI = document.createElement('div')
	let bottomUI = document.createElement('div')
	
	
	let ageBtn = document.createElement('div')
	
	ageBtn.textContent = "+\nAge"


	ageBtn.classList.add('ageBtn')
	topUI.classList.add('topUI')
	midUI.classList.add('midUI')
	bottomUI.classList.add('bottomUI')




	bottomUI.append(ageBtn)
	mainUI.append(topUI,midUI,bottomUI)
	
}