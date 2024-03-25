import { mainUI, helloScreen } from "./mainUI.js"


let main = document.querySelector('#main')


export function toMenu(){
	let menu = document.createElement('div')
	menu.classList.add('menuUI')
	mainUI.append(menu)
	console.log('<MENU> clicked')

	let backBtn = document.createElement('img')
	backBtn.classList.add("backBtn")
	backBtn.src = "../assets/return.svg"

	menu.appendChild(backBtn)

	backBtn.addEventListener('click',()=>{
		
		menu.style.animation = "2s menuDis"
		setTimeout(()=>{
			menu.remove();
		},2000)
	})
	


}

