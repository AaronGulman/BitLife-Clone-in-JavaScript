import { toactivities } from './acitivities.js';
import { toassets } from './assets.js';
import {toMenu} from './menu.js';
import { torelationships } from './relationships.js';

// make all stats show integers converted to Strings so when ints change their value it dinamically reflects on the text displayed in each bar

let mainFrame = document.createElement("div")
export let mainUI = document.createElement('div')
let ageBox = document.createElement('div')
let ageBtn = document.createElement('div')



//topUI
let topUI = document.createElement('div')
let menuIcon = document.createElement('div')

menuIcon.classList.add('menuIcon')
menuIcon.addEventListener('click',()=>{
	// mainUI.style.display = 'none';
	toMenu();

})


topUI.append(menuIcon)



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

let barPercentage = document.createElement('p')
let barPercentage1 = document.createElement('p')
let barPercentage2 = document.createElement('p')
let barPercentage3 = document.createElement('p')


// ----------------------------------------------------


let lifeStage = document.createElement('div')
let assets = document.createElement('div')
let relationships = document.createElement('div')
let activities = document.createElement('div')
let options = document.createElement('div')


export function helloScreen(){



//functions
topUIfunc()
midUIfunc()
bottomUIfunc()
userInterface()

let main = document.querySelector('#main')
mainUI.classList.add('mainUI')
main.appendChild(mainUI)
mainFrame.classList.add('mainFrame')
mainFrame.appendChild('mainUI')
main.appendChild(mainFrame)
}

function ageBoxClickHandler() {
	console.log('You\'re 1 year older');
    }


function userInterface(){
	ageBtn.classList.add('ageBtn')
	ageBtn.textContent = `+\n Age`

	ageBox.classList.add('ageBox')
	ageBox.appendChild(ageBtn)


	mainUI.append(topUI,midUI,bottomUI)

	ageBox.removeEventListener('click',ageBoxClickHandler)
	ageBox.addEventListener('click',ageBoxClickHandler)
	
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

	activities.addEventListener('click',()=>{
	toactivities();
	})

	assets.addEventListener('click',()=>{
		toassets();
	})

	relationships.addEventListener('click',()=>{
			torelationships();
	})



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

	//bars

	happinessDiv.append(happiness, happinessBar)
	healthDiv.append(health, healthBar)
	smartsDiv.append(smarts, smartsBar)
	looksDiv.append(looks, looksBar)

	bottomUI.append(options,statsMain)


	barPercentage.textContent = "100%"
	barPercentage1.textContent = "100%"
	barPercentage2.textContent = "100%"
	barPercentage3.textContent = "100%"

	barPercentage.classList.add('barPercentage')
	barPercentage1.classList.add('barPercentage')
	barPercentage2.classList.add('barPercentage')
	barPercentage3.classList.add('barPercentage')


	happinessBar.appendChild(barPercentage)
	healthBar.appendChild(barPercentage1)
	smartsBar.appendChild(barPercentage2)
	looksBar.appendChild(barPercentage3)
	

}
