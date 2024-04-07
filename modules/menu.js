import { mainUI, helloScreen } from "./mainUI.js"


let main = document.querySelector('#main')


export function toMenu(){
	const menuItems = ['New Life','New Life as Cat','New Life as Dog','Save Life','Lives in Progress']
	let menu = document.createElement('div')
	let mainMenu = document.createElement('div')
	let menuUpper = document.createElement('div')

	menu.classList.add('menuUI')
	menu.classList.add('mainMenu')
	menuUpper.classList.add('menuUpper')
	mainUI.append(menuUpper,menu)
	console.log('<MENU> clicked')

	let backBtn = document.createElement('img')
	backBtn.classList.add("backBtn")
	backBtn.src = "../assets/return.svg"

	menu.append(backBtn,mainMenu)

	backBtn.addEventListener('click',()=>{
		
		menu.style.animation = "1.5s menuDis"
		setTimeout(()=>{
			menu.remove();
		},1500)
	})
	menuItems.forEach(item=>{
		let menuList = document.createElement('div')
		menuList.textContent = item;
		menuList.classList.add('menuList')
		menu.append(menuList)

	})



}

