const MoveSquareHandler = require("./square-handler");

module.exports = class MoveDownHandler {
    constructor({ client }) {
        this.client = client;
    }

    next(command){
        const squareHandler = new MoveSquareHandler({ client: this.client });
        squareHandler.execute(command);
    }
    execute(command) {
        if (command.includes('down')) {
            this.client.addAction('moveDown');
        }
        return this.next(command);
    }
}