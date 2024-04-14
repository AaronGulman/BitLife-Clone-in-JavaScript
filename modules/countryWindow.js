import { newLife } from './person.js';
import { Countries } from './countries.js';
import {greetingMsg} from '../index.js'

export function countryWindow() {
    let character1 = new newLife("Aaron", 0, 0, 0);
    let window = document.createElement('div');
    

    window.classList.add('countryPage');

    let countryName = character1.country.flag;

    console.log(countryName);

    const countriesInstance = new Countries();
    const allCountries = countriesInstance.getAllCountries();

    allCountries.forEach(country => {
        console.log("Country Name:", country.name);
        console.log("Country Flag:", country.flag);
    });

    allCountries.map((country)=>{
      let list =  document.createElement('li')
      list.textContent = `${country.flag}${country.name} `
      window.append(list)
    })
    return window;
}
