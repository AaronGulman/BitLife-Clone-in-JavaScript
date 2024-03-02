let mainUI = document.createElement('div')
let ageBtn = document.createElement('div')

//topUI


//midUI
let midUI = document.createElement('div')



//bottomUI part:
let bottomUI = document.createElement('div')
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
	options.classList.add('options')
	bottomUI.classList.add('bottomUI')
	
	options.append(ageBtn)
	
	bottomUI.append(options)

}

function ageUp(age){
	age++;
	
}