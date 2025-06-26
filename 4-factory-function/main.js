function createProgrammer ( name, preferredLanguage ) 
{
    return {
        name, 
        preferredLanguage,

        writeCode() {
            console.log(`${this.name} writes ${this.preferredLanguage} code.`);
        },

        drinkCoffee() {
            console.log(`${this.name} drinks coffee`);
        }
    }
}

const newProgrammer = createProgrammer('Ashikur Rahman', 'Javascript');
newProgrammer.writeCode();
