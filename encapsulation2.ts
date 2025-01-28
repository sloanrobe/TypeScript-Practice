class SecretService {
    private secret: string
    private password: string = 'password123'

    constructor(secretValue: string) {
        this.secret = secretValue
    }

    getSecret(password: string) {
        if (password === this.password) {
            console.log(`The secret is "${this.secret}".`)
        } else {
            console.log('The password is incorrect. Try again.')
        }
    }
}

const secretService = new SecretService('top secret')
secretService.getSecret('12345')
secretService.getSecret('secretmessage')
secretService.getSecret('password123')