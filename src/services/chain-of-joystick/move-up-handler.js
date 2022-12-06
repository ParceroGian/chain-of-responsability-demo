const MoveDownHandler = require("./move-down-handler");

module.exports = class MoveUpHandler {
    constructor({ client }) {
        this.client = client;
    }

    next(command){
        const moveDownHandler = new MoveDownHandler({ client: this.client });
        moveDownHandler.execute(command);
    }
    execute(command) {
        if (command.includes('up')) {
            this.client.addAction('moveUp');
        }
        return this.next(command);
    }
}