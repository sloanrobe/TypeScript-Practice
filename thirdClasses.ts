export class Sport {
    name: string
    ballColor: string

    constructor(name: string, ballColor: string) {
        this.name = name
        this.ballColor = ballColor
    }

    whatSport() {
        return `I play ${this.name} with a ${this.ballColor} ball.`
    }
}