export class Vacation {
    location: string;
    weather: string;

    constructor(location: string, weather: string) {
        this.location = location
        this.weather = weather
    }

    travelPlans() {
        return `We are going to ${this.location} and hopefully it will be ${this.weather}!`
    }
}