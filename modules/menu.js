let main = document.querySelector('#main')


export function toMenu(){
	let menu = document.createElement('div')
	menu.classList.add('menuUI')
	main.append(menu)
	console.log('<MENU> clicked')

}

