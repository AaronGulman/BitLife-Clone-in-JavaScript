import { helloScreen } from "./modules/mainUI.js"

let main = document.querySelector("#main")

let greetingMsg = document.createElement('div')
let helloMsg = document.createElement('h1')
let playerName = document.createElement('input')
let genderBox = document.createElement('div')
let male = document.createElement('div')
let female = document.createElement('div')
let alertBox = document.createElement('div')
let alertBoxMsg = document.createElement('p')
let maleImg = document.createElement('img')
let femaleImg = document.createElement('img')


maleImg.src = "./assets/male.svg"
femaleImg.src = "./assets/female.svg"

maleImg.classList.add('icon')
femaleImg.classList.add('icon')
greetingMsg.classList.add('greetingMsg')
helloMsg.classList.add('helloMsg')
playerName.classList.add('playerName')
genderBox.classList.add('genderBox')
male.classList.add('male')
female.classList.add('female')
alertBox.classList.add('alertBox')
alertBoxMsg.classList.add('alertBoxMsg')


helloMsg.textContent = 'Welcome to Abandoned Forest'

playerName.setAttribute('placeholder' , "Type in your name here")






greetingMsg.append(helloMsg,playerName,genderBox)

male.appendChild(maleImg)
female.appendChild(femaleImg)

genderBox.append(male,female)

main.appendChild(greetingMsg)




male.addEventListener('click',()=>{
	greetingMsg.remove()
	genderMsg(true)
	helloScreen()
	navigator.vibrate(50)

})
female.addEventListener('click',()=>{
	greetingMsg.remove()
	genderMsg(false)
	helloScreen()


})



function genderMsg(isMale){
	if(isMale){
		console.log("CLICKED!")
		main.appendChild(alertBox)
		alertBoxMsg.textContent = `Hello, Mr ${playerName.value}`
		alertBox.appendChild(alertBoxMsg)

	}else{
		console.log("CLICKED!")
		main.appendChild(alertBox)
		alertBoxMsg.textContent = `Hello, Ms ${playerName.value}!`
		alertBox.appendChild(alertBoxMsg)
	}
}

alertBox.addEventListener('dblclick',()=>{
	setInterval(()=>{
		alertBox.remove()
	},500)

})