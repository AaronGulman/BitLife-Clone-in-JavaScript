let mainUI = document.createElement('div')
let ageBox = document.createElement('div')
let ageBtn = document.createElement('div')



//topUI
let topUI = document.createElement('div')


//midUI
let midUI = document.createElement('div')



//bottomUI 
let bottomUI = document.createElement('div')
let bottomLeft = document.createElement('div')

let bottomLeftOne = document.createElement('div')
let bottomLeftTwo = document.createElement('div')

let bottomRight = document.createElement('div')
let bottomRightOne = document.createElement('div')
let bottomRightTwo = document.createElement('div')



let statsMain = document.createElement('div')
let stats = document.createElement('div')


//stats

let happinessDiv = document.createElement('div')
let healthDiv = document.createElement('div')
let smartsDiv = document.createElement('div')
let looksDiv = document.createElement('div')
// ----------------------------------------------------
let happiness = document.createElement('h2')
let health = document.createElement('h2')
let smarts = document.createElement('h2')
let looks = document.createElement('h2')
// ----------------------------------------------------

let happinessBar = document.createElement('div')
let healthBar = document.createElement('div')
let smartsBar = document.createElement('div')
let looksBar = document.createElement('div')


// ----------------------------------------------------


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

	ageBtn.classList.add('ageBtn')
	ageBtn.textContent = `+\n Age`

	ageBox.classList.add('ageBox')
	ageBox.appendChild(ageBtn)


	mainUI.append(topUI,midUI,bottomUI)

	ageBox.addEventListener('click',()=>{
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


	bottomLeftOne.classList.add("bottomLeftOne")
	bottomLeftTwo.classList.add("bottomLeftTwo")
	bottomRightOne.classList.add("bottomRightOne")
	bottomRightTwo.classList.add("bottomRightTwo")



	lifeStage.classList.add('lifeStage')
	assets.classList.add('assets')
	relationships.classList.add('relationships')
	activities.classList.add('activities')
	
	options.classList.add('options')

	statsMain.classList.add('statsMain')

	stats.classList.add('stats')



	bottomUI.classList.add('bottomUI')



	happinessDiv.setAttribute("class","statBox happinessDiv")
	healthDiv.setAttribute("class","statBox healthDiv")
	smartsDiv.setAttribute("class","statBox smartsDiv")
	looksDiv.setAttribute("class","statBox looksDiv")
	// ----------------------------------------------------
	happiness.setAttribute("class","statText happiness")
	health.setAttribute("class","statText health")
	smarts.setAttribute("class","statText smarts")
	looks.setAttribute("class","statText looks")

	happiness.textContent = "Happiness 😊"
	health.textContent = "Health ❤️"
	smarts.textContent = "Smarts 🧠"
	looks.textContent = "Looks 😎"


	// ----------------------------------------------------
	happinessBar.setAttribute("class","statBar")
	healthBar.setAttribute("class","statBar")
	smartsBar.setAttribute("class","statBar")
	looksBar.setAttribute("class","statBar")





	bottomLeftOne.append(lifeStage)
	bottomLeftTwo.append(assets)
	bottomRightOne.append(relationships)
	bottomRightTwo.append(activities)

	bottomLeft.append(bottomLeftOne, bottomLeftTwo)
	bottomRight.append(bottomRightOne, bottomRightTwo)

	
	options.append(bottomLeft, ageBox, bottomRight)

	
	stats.append(happinessDiv, healthDiv, smartsDiv, looksDiv)
	
	statsMain.append(stats)

	happinessDiv.append(happiness, happinessBar)
	healthDiv.append(health, healthBar)
	smartsDiv.append(smarts, smartsBar)
	looksDiv.append(looks, looksBar)

	bottomUI.append(options,statsMain)

	

}

function ageUp(age){
	age++;
	
}