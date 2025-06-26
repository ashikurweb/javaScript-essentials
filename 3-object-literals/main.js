let programmer  = {
    name: 'Ashikur Rahman',
    preferredLanguage: 'JavaScript',
    writeCode: function () 
    {
        console.log(`${this.name} write code in ${this.preferredLanguage}`);
    },
    drinkCoffee: function () 
    {
        console.log(`${this.name} drinks coffee.`);
    },
}; 

programmer.writeCode();