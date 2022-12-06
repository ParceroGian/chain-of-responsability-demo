const CrossHandler = require("./cross-handler");

module.exports = class MoveSquareHandler {
    constructor({ client }) {
        this.client = client;
    }

    next(command){
        const crossHandler = new CrossHandler({ client: this.client });
        crossHandler.execute(command);
    }
    execute(command) {
        if (command.includes('square')) {
            this.client.addAction('punch');
        }
        return this.next(command);
    }
}