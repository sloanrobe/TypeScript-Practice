class pizzaRecipe {
    makePizza() {
        this.warmOven()
        this.rollDough()
        this.spreadSauce()
        this.putCheese()
        this.useOven()
        console.log('Pizza is ready!')
    }

    private warmOven(): void {
        console.log('Turn on oven to 220º.')
    }

    private rollDough() {
        console.log('Roll the dough into a circle.')
        //return 42
    }

    private spreadSauce(): void {
        console.log('Spread one cup of pizza sauce on top of the dough.')
    }
        

    private putCheese(): void {
        console.log('Sprinkle a healthy amount of mozzarella cheese on top of the sauce.')
    }
        

    private useOven(): void {
        console.log('Put pizza into the oven.')
    }
}

const pizzaMaker = new pizzaRecipe()

pizzaMaker.makePizza()
/* pizzaMaker.putCheese() */

// I do not completely understand what "void" is used for.  It seems like I get the same output in the terminal whether
// I have it or not. Being explicit about what I want code to do.  THe intention is for the function to run without returnign anything.

// If the point of abstraction is to hide code so the user doesn't have to worry about it, why would the user see the code anyway?
// Wouldn't they be unable to see the source code?
