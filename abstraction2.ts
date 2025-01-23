class birthdayCake {
    bakeCake() {
        this.cakeMix()
        this.useCakePan()
        this.useOven()
        this.removeOven()
        this.addFrosting()
        console.log('The cake is ready to eat!')
    }

    cakeMix() {
        console.log('Read ingredients from box and mix them together.')
    }

    useCakePan() {
        console.log('Pour the cake mix into the cake pan.')
    }

    useOven() {
        console.log('Put the cake pan into the oven.')
    }

    removeOven() {
        console.log('Remove the cake from the oven after 10 minutes.')
    }

    addFrosting() {
        console.log('Spread the frosting on the cake.')
    }
}

const cake = new birthdayCake()
cake.bakeCake()