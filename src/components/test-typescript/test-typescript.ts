export default class TypeScriptify {
    private secret: string;
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
        this.secret = 'SECRET!';
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}