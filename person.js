export class newLife {
	constructor(name,genderIndex,hairColorIndex){
		this.name = name;
		this.gender = this.getGenderByIndex(genderIndex);
		this.hairColor = this.getHairColorByIndex(hairColorIndex);
	}

	getGenderByIndex(gender){
		const genderArr = ['man','female'];
		return genderArr[gender];
	}

	chooseGender(gender){
		this.genderIndex = gender;
		this.gender = this.getGenderByIndex;
	}
	

	getHairColorByIndex(index){
		const hairColors = ['black','brown','blonde','red','gray','white']
		return hairColors[index];
	}

	chooseHairColor(index){
		this.hairColorIndex = index,
		this.hairColor = this.getHairColorByIndex;
	}
}



