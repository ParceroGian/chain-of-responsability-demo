module.exports = class JoyStickCommandService {
    execute(command){
        if(command === 'up'){
            return 'moveUp';
        }else if (command === 'down'){
            return 'moveDown';
        }else if (command === 'left'){
            return 'moveLeft';
        }else if (command === 'right'){
            return 'moveRight';
        }else if (command === 'square'){
            return 'punch';
        }else if (command === 'triangle'){
            return 'kick';
        }else if (command === 'circle'){
            return 'jump';
        }else if (command === 'cross'){
            return 'block';
        }else {
            return 'invalid command';
        }
    }
}