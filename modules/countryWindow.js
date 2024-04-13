import { newLife } from './person.js';
import { Countries } from './countries.js';

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
}
