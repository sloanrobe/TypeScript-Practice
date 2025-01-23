class SecretService {
    secret: string
    password: string = 'password123'

    constructor(secretValue: string) {
        this.secret = secretValue
    }

    getSecret(inputPassword: string) {
        if (inputPassword === this.password) {
            console.log(`The secret is ${this.secret}.`)
        } else {
            console.log('The password is incorrect. Try again.')
        }
    }
}

// The instance is created and the secret is set to 'top secret'
const secretService = new SecretService('top secret') 

// Password is incorrect and undefined is returned
secretService.getSecret('Walrus') // -> undefined

// Password is correct, and the secret is returned
secretService.getSecret('password123') // -> 'top secret'

// This should result in a syntax error
secretService.secret 
