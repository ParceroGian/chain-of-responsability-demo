
module.exports = class InvalidCommandHandler {
    constructor({ client }) {
        this.client = client;
    }

    next() {
        return this.client;
    }
    execute() {
        if (this.client.getActions().length === 0) {
            this.client.addAction('invalid action')
        }
        return this.next();
    }
}