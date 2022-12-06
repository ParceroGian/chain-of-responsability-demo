const InvalidCommandHandler = require("./invalid-command-handler");

module.exports = class CrossHandler {
    constructor({ client }) {
        this.client = client;
    }

    next(){
        const invalidCommandHandler = new InvalidCommandHandler({ client: this.client });
        invalidCommandHandler.execute();
    }
    execute(command) {
        if (command.includes('cross')) {
            this.client.addAction('block');
        }
        return this.next();
    }
}