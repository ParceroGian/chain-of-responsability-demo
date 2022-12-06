module.exports = class Command {
    constructor(){
        this.command = "";
        this.actions = [];
    }
    setCommand(command){
        this.command = command;
    }
    setActions(actions){
        this.actions = actions;
    }
    addAction(action){
        this.actions.push(action);
    }
    getActions(){
        return this.actions;
    }
}