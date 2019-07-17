const chalk = require('chalk');
const getRandomCoordinates = require('./getRandomCoordinates');

const makeMap = function() {
    let map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    for(let i = 0; i < 5; i++){
        hassle = getRandomCoordinates();
        map[hassle.y][hassle.x] = 'H';
        map[this.position.y][this.position.x] = 'R';
        map[this.goal.y][this.goal.x] = 'G';
    }

    return map;
}

const mapSymbolization = `${chalk.yellow.inverse(' 0 ')} Free space \n${chalk.green.inverse(' R ')} Rover\n${chalk.red.inverse(' H ')} Hassle \n${chalk.magenta.inverse(' G ')} Goal`;

module.exports = {makeMap, mapSymbolization}