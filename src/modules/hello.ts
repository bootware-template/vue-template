export default class Hello {

    readonly message: string

    constructor(username: string) {
        this.message = 'hello! ' + username;
    }

    public getMessage(): string {
        return this.message;
    }
}