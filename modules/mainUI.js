let mainUI = document.createElement('div')
let ageBtn = document.createElement('div')



//topUI
let topUI = document.createElement('div')


//midUI
let midUI = document.createElement('div')



//bottomUI 
let bottomUI = document.createElement('div')
let bottomLeft = document.createElement('div')
let bottomRight = document.createElement('div')


let lifeStage = document.createElement('div')
let assets = document.createElement('div')
let relationships = document.createElement('div')
let activities = document.createElement('div')
let options = document.createElement('div')


export function helloScreen(){
let main = document.querySelector('#main')
mainUI.classList.add('mainUI')
main.appendChild(mainUI)


//functions
topUIfunc()
midUIfunc()
bottomUIfunc()
userInterface()


}


function userInterface(){
	ageBtn.textContent = "+\nAge"
	ageBtn.classList.add('ageBtn')
	mainUI.append(topUI,midUI,bottomUI)

	ageBtn.addEventListener('click',()=>{
		console.log('You\'re 1 year older')
	})
	
}

function topUIfunc(){
	topUI.classList.add('topUI')
}


function midUIfunc(){
	midUI.classList.add('midUI')

}

function bottomUIfunc(){

	bottomLeft.classList.add('bottomLeft')
	bottomRight.classList.add('bottomRight')

	lifeStage.classList.add('lifeStage')
	assets.classList.add('assets')
	relationships.classList.add('relationships')
	activities.classList.add('activities')
	
	options.classList.add('options')


	
	bottomUI.classList.add('bottomUI')



	bottomLeft.append(lifeStage, assets)
	bottomRight.append(relationships, activities)
	
	options.append(bottomLeft, ageBtn, bottomRight)
	
	bottomUI.append(options)

}

function ageUp(age){
	age++;
	
}