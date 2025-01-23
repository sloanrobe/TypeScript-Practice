export class Car {
    make: string
    model: string
    mileage: number

    constructor(make: string, model: string, mileage: number) {
        this.make = make;
        this.model = model;
        this.mileage = mileage;
    }
    
    showDescription(): string {
        return `The car is a ${this.make} ${this.model}.`
    }

    showMileage(): string {
        return `The car has ${this.mileage} miles on it.`
    }
}

/* const car = new Car("Ford", "F150")

console.log(car.showDescription()) */

// Do I need to install package.json and tsconfig.json every time I create a new TS folder?
// Why isn't it Car.make and Car.model on line 11?
// Why can't line 11 say ${Car} instead of car?


// npm init (create package.json file)
// Added "type": "module", to json file
// Changed "Main" in json file to dist/app.js
// Added npm i @types/node -D
// Added to Scripts in json file "dev": tsx src/app.ts (typing npm run dev will run that command)
