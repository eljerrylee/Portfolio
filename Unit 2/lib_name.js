class Name {
    constructor(fName, lName, age, gender) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
    }
    getInfo() {
        const info = "First Name: " + this.fName + "\n" +
                     "Last Name: " + this.lName + "\n" +
                     "Age: " + this.age + "\n" + 
                     "Gender: " + this.gender;
                     return info;
    }
}